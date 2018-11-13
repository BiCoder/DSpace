/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.submit.lookup;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import gr.ekt.bte.core.DataLoader;
import gr.ekt.bte.core.Record;
import gr.ekt.bte.core.RecordSet;
import gr.ekt.bte.core.StringValue;
import gr.ekt.bte.exceptions.MalformedSourceException;

import org.apache.log4j.Logger;
import org.dspace.core.Context;

/**
 * @author Andrea Bollini
 * @author Kostas Stamatis
 * @author Luigi Andrea Pascarelli
 * @author Panagiotis Koutsourakis
 */
public class SingleSubmissionLookupDataLoader extends ASubmissionLookupDataLoader {

    private static Logger log = Logger
            .getLogger(SingleSubmissionLookupDataLoader.class);

    /*
     * (non-Javadoc)
     *
     * @see gr.ekt.bte.core.DataLoader#getRecords()
     */
    @Override
    public RecordSet getRecords() throws MalformedSourceException {

        RecordSet recordSet = new RecordSet();

        // KSTA:ToDo: Support timeout (problematic) providers
        // List<String> timeoutProviders = new ArrayList<String>();
        DataLoader genProvider = dataloadersMap.get(type);
        RecordSet subRecordSet = genProvider.getRecords();
        recordSet.addAll(subRecordSet);
        // Add in each record the provider name... a new provider doesn't
        // need to know about it!
        for (Record record : subRecordSet.getRecords()) {
            if (record.isMutable()) {
                record.makeMutable().addValue(SubmissionLookupService.PROVIDER_NAME_FIELD, new StringValue(type));
            }
        }

        // Question: Do we want that in case of file data loader?
        // for each publication in the record set, if it has a DOI, try to find
        // extra pubs from the other providers
        if (searchTerms != null
            || (identifiers != null && !identifiers
            .containsKey(SubmissionLookupDataLoader.DOI))) { // Extend
            Map<String, Set<String>> provider2foundDOIs = new HashMap<String, Set<String>>();
            List<String> foundDOIs = new ArrayList<String>();

            for (Record publication : recordSet.getRecords()) {
                String providerName = SubmissionLookupUtils.getFirstValue(
                    publication,
                    SubmissionLookupService.PROVIDER_NAME_FIELD);

                String doi = null;

                if (publication.getValues(SubmissionLookupDataLoader.DOI) != null
                    && publication
                    .getValues(SubmissionLookupDataLoader.DOI)
                    .size() > 0) {
                    doi = publication.getValues(SubmissionLookupDataLoader.DOI)
                                     .iterator().next().getAsString();
                }
                if (doi == null) {
                    doi = NOT_FOUND_DOI;
                } else {
                    doi = SubmissionLookupUtils.normalizeDOI(doi);
                    if (!foundDOIs.contains(doi)) {
                        foundDOIs.add(doi);
                    }
                    Set<String> tmp = provider2foundDOIs.get(providerName);
                    if (tmp == null) {
                        tmp = new HashSet<String>();
                        provider2foundDOIs.put(providerName, tmp);
                    }
                    tmp.add(doi);
                }
            }

            if (!(genProvider instanceof SubmissionLookupDataLoader)) {
                return recordSet;
            }

            SubmissionLookupDataLoader provider = (SubmissionLookupDataLoader) genProvider;

            // Provider must support DOI
            if (!provider.getSupportedIdentifiers().contains(SubmissionLookupDataLoader.DOI)) {
                return recordSet;
            }

            // if (evictProviders != null
            // && evictProviders.contains(provider.getShortName())) {
            // continue;
            // }
            Set<String> doiToSearch = new HashSet<String>();
            Set<String> alreadyFoundDOIs = provider2foundDOIs.get(type);
            for (String doi : foundDOIs) {
                if (alreadyFoundDOIs == null || !alreadyFoundDOIs.contains(doi)) {
                    doiToSearch.add(doi);
                }
            }
            List<Record> pPublications = null;
            Context context = null;
            try {
                if (doiToSearch.size() > 0) {
                    context = new Context();
                    pPublications = provider.getByDOIs(context, doiToSearch);
                }
            } catch (Exception e) {
                log.error(e.getMessage(), e);
            } finally {
                if (context != null && context.isValid()) {
                    context.abort();
                }
            }
            if (pPublications != null) {
                for (Record rec : pPublications) {
                    recordSet.addRecord(rec);
                    if (rec.isMutable()) {
                        rec.makeMutable().addValue(SubmissionLookupService.PROVIDER_NAME_FIELD,
                                new StringValue(type));
                    }
                }

            }
        }

        log.info("BTE DataLoader finished. Items loaded: "
                     + recordSet.getRecords().size());

        // Printing debug message
        String totalString = "";
        for (Record record : recordSet.getRecords()) {
            totalString += SubmissionLookupUtils.getPrintableString(record)
                + "\n";
        }
        log.debug("Records loaded:\n" + totalString);

        return recordSet;
    }

}

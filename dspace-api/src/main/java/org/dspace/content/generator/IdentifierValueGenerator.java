/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.content.generator;

import org.apache.log4j.Logger;
import org.dspace.content.Item;
import org.dspace.content.Metadatum;
import org.dspace.core.Context;

public class IdentifierValueGenerator implements TemplateValueGenerator
{

    private static Logger log = Logger.getLogger(IdentifierValueGenerator.class);

    @Override
    public Metadatum[] generator(Context context, Item targetItem, Item templateItem,
            Metadatum metadatum, String extraParams)
    {

        Metadatum[] m = new Metadatum[1];
        m[0] = metadatum;
        String value = ""+targetItem.getID();
        metadatum.value = value;
        return m;
    }
   
}

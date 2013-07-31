/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.statistics.util;

import org.apache.log4j.Logger;
import org.dspace.core.ConfigurationManager;
import org.dspace.statistics.SolrLogger;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * SpiderDetector is used to find IP's that are spiders...
 * In future someone may add UserAgents and Host Domains
 * to the detection criteria here.
 *
 * @author kevinvandevelde at atmire.com
 * @author ben at atmire.com
 * @author Mark Diggory (mdiggory at atmire.com)
 */
public class SpiderDetector
{

    private static Logger log = Logger.getLogger(SpiderDetector.class);

    /**
     * Sparse HashTable structure to hold IP address ranges.
     */
    private IPTable table = null;

    private UATable ua_table = null;

    /**
     * Utility method which Reads the ip addresses out a file & returns them in a Set
     *
     * @param spiderIpFile the location of our spider file
     * @return a vector full of ip's
     * @throws IOException could not happen since we check the file be4 we use it
     */
    public Set<String> readIpAddresses(File spiderIpFile) throws IOException
    {
        Set<String> ips = new HashSet<String>();

        if (!spiderIpFile.exists() || !spiderIpFile.isFile())
        {
            return ips;
        }

        //Read our file & get all them ip's
        BufferedReader in = new BufferedReader(new FileReader(spiderIpFile));
        String line;
        while ((line = in.readLine()) != null)
        {
            if (!line.startsWith("#"))
            {
                line = line.trim();

                if (!line.equals("") && !Character.isDigit(line.charAt(0)))
                {
                    // is a hostname
                    // add this functionality later...
                }
                else if (!line.equals(""))
                {
                    ips.add(line);
                    // is full v4 ip (too tired to deal with v6)...
                }
            }
            else
            {
                String ua = line.replaceFirst("#", "").replaceFirst("UA", "")
                        .trim();
                if (ua.startsWith("\"") && ua.endsWith("\""))
                    ua = ua.substring(1, ua.length() - 1);
                ua_table.add(ua);
            }
        }
        in.close();
        return ips;
    }

    /**
     * Get an immutable Set representing all the Spider Addresses here.
     *
     * @return
     */
    public Set<String> getSpiderIpAddresses()
    {

        loadSpiderIpAddresses();
        return table.toSet();
    }

    /*
        private loader to populate the table from files.
     */

    private void loadSpiderIpAddresses()
    {

        if (table == null)
        {
            table = new IPTable();
            ua_table = new UATable();

            String filePath = ConfigurationManager.getProperty("dspace.dir");

            try
            {
                File spidersDir = new File(filePath, "config/spiders");

                if (spidersDir.exists() && spidersDir.isDirectory())
                {
                    for (File file : spidersDir.listFiles())
                    {
                        for (String ip : readIpAddresses(file))
                        {
                            table.add(ip);
                        }
                        log.info("Loaded Spider IP file: " + file);
                    }
                }
                else
                {
                    log.info("No spider file loaded");
                }


            }
            catch (Exception e)
            {
                log.error("Error Loading Spiders:" + e.getMessage(), e);
            }


        }

    }


    /**
     * Static Service Method for testing spiders against existing spider files.
     * <p/>
     * In the future this will be extended to support User Agent and
     * domain Name detection.
     * <p/>
     * In future spiders HashSet may be optimized as byte offset array to
     * improve performance and memory footprint further.
     *
     * @param request
     * @return true|false if the request was detected to be from a spider
     */
    public boolean isSpider(HttpServletRequest request, boolean isUseProxies)
    {

        if (isUseProxies
                && request.getHeader("X-Forwarded-For") != null)
        {
            /* This header is a comma delimited list */
            for (String xfip : request.getHeader("X-Forwarded-For").split(","))
                {
                if (isSpiderByIp(xfip))
                    return true;
                }
            }

        return (isSpiderByIp(request.getRemoteAddr()) || (request
                .getHeader("User-Agent") != null && isSpiderByUserAgent(request
                .getHeader("User-Agent"))));
    }

    /**
     * Check individual IP is a spider.
     *
     * @param ip
     * @return if is spider IP
     */
    public boolean isSpiderByIp(String ip)
    {

        if (table == null)
        {
            loadSpiderIpAddresses();
        }

        try
        {
            if (table.contains(ip))
            {
                return true;
            }
        }
        catch (Exception e)
        {
            return false;
        }

        return false;


    }

    public boolean isSpiderByUserAgent(String ua)
            {
        if (ua_table == null)
            {
            loadSpiderIpAddresses();
            }
        return ua_table.contains(ua);
        }

}

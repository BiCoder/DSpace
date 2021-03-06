/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.dspace.rest.exceptions.ContextException;
import org.dspace.utils.DataUtils;
import org.json.JSONArray;

/**
 * This class provides all CRUD operation over collections.
 * 
 * @author Ta Huu Binh (FDS)
 */
@Path("/dataset")
public class Stat extends Resource
{
    private static Logger log = Logger.getLogger(MyTableResource.class);

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllCrisDoTp(@PathParam("id") String id, @QueryParam("cols") String cols,
            @QueryParam("limit") @DefaultValue("100") Integer limit, @QueryParam("offset") @DefaultValue("0") Integer offset,
            @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        
        JSONArray results = new JSONArray();
        org.dspace.core.Context context = null;

        try
        {
            context = createContext(getUser(headers));

            if (!((limit != null) && (limit >= 0) && (offset != null) && (offset >= 0)))
            {
                log.warn("Paging was badly set.");
                limit = 100;
                offset = 0;
            }

            //results = DataUtils.findAll(context, limit, offset, id, cols);
           
            context.complete();
        }
        catch (SQLException e)
        {
            processException("Something went wrong while reading collections from database. Message: " + e, context);
        }
        catch (ContextException e)
        {
            processException("Something went wrong while reading collections, ContextError. Message: " + e.getMessage(), context);
        }
        finally
        {
            System.out.println("finally");
            processFinally(context);
        }

        log.trace("All collections were successfully read.");
        
        return results.toString();
    }

}

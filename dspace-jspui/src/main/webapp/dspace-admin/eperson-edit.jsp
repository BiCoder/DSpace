<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>

<%--
  - eperson editor - for new or existing epeople
  -
  - Attributes:
  -   eperson - eperson to be edited
  -   email_exists - if non-null, user has attempted to enter a duplicate email
  -                  address, so an error should be displayed
  -
  - Returns:
  -   submit_save   - admin wants to save edits
  -   submit_delete - admin wants to delete edits
  -   submit_cancel - admin wants to cancel
  -
  -   eperson_id
  -   email
  -   firstname
  -   lastname
  -   phone
  -   language
  -   can_log_in          - (boolean)
  -   require_certificate - (boolean)
  --%>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"
    prefix="fmt" %>


<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.util.Locale"%>

<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>

<%@ page import="org.dspace.core.I18nUtil" %>
<%@ page import="org.dspace.eperson.EPerson, org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.eperson.Group"   %>
<%@ page import="org.dspace.core.Utils" %>

<%
    EPerson eperson = (EPerson) request.getAttribute("eperson");

	Group [] groupMemberships = null;
	if(request.getAttribute("group.memberships") != null)
	{
		groupMemberships = (Group []) request.getAttribute("group.memberships");
	}

    String email     = eperson.getEmail();
    String firstName = eperson.getFirstName();
    String lastName  = eperson.getLastName();
    String phone     = eperson.getMetadata("phone");
    String netid = eperson.getNetid();
    String language     = eperson.getMetadata("language");
    boolean emailExists = (request.getAttribute("email_exists") != null);

    boolean ldap_enabled = ConfigurationManager.getBooleanProperty("authentication-ldap", "enable");
%>

<dspace:layout style="submission" titlekey="jsp.dspace-admin.eperson-edit.title"
               navbar="admin"
               locbar="link"
               parenttitlekey="jsp.administer"
               parentlink="/dspace-admin"
               nocache="true">



        <%-- <h1>Edit EPerson <%= eperson.getEmail() %>:</h1> --%>
        <h1><fmt:message key="jsp.dspace-admin.eperson-edit.heading">
            <fmt:param><%= Utils.addEntities(eperson.getEmail()) %></fmt:param>
        </fmt:message>
        <dspace:popup page="<%= LocaleSupport.getLocalizedMessage(pageContext, \"help.site-admin\") + \"#epeople\"%>"><fmt:message key="jsp.help"/></dspace:popup>
        </h1>
  

<% if (emailExists)
	{ %><p class="alert alert-warning">
	     <fmt:message key="jsp.dspace-admin.eperson-edit.emailexists"/>
	   </p>
<%  } %>

    <form method="post" action="">

		<div class="row mb-2">
            <%-- <td>Email:</td> --%>         
            <label class="col-md-2" for="temail"><fmt:message key="jsp.dspace-admin.eperson-edit.email"/></label>
            <div class="col-md-6">
            	<input type="hidden" name="eperson_id" value="<%=eperson.getID()%>"/>
            	<input class="form-control" name="email" id="temail" size="24" value="<%=email == null ? "" : Utils.addEntities(email) %>"/>
            </div>
        </div>

        <div class="row mb-2">
            <%-- <td>Last Name:</td> --%>
            <label class="col-md-2" for="tlastname"><fmt:message key="jsp.dspace-admin.eperson.general.lastname"/></label>
            <div class="col-md-6">
				<input class="form-control" name="lastname" id="tlastname" size="24" value="<%=lastName == null ? "" : Utils.addEntities(lastName) %>"/>
			</div>
       </div>     

        <div class="row mb-2">           
            <%-- <td>First Name:</td> --%>
            <label class="col-md-2" for="tfirstname"><fmt:message key="jsp.dspace-admin.eperson.general.firstname"/></label>
            <div class="col-md-6">
                <input class="form-control" name="firstname" id="tfirstname" size="24" value="<%=firstName == null ? "" : Utils.addEntities(firstName) %>"/>
            </div>
         </div>

        <% if (ldap_enabled) { %>
		<div class="row mb-2">
            <label class="col-md-2">LDAP NetID:</label>
            <div class="col-md-6">
                <input class="form-control" name="netid" size="24" value="<%=netid == null ? "" : Utils.addEntities(netid) %>" />
            </div>
        </div>
        <% } %>

        <div class="row mb-2">
            <%-- <td>Phone:</td> --%>
            <label class="col-md-2" for="tphone"><fmt:message key="jsp.dspace-admin.eperson-edit.phone"/></label>
            <div class="col-md-6">
				<input class="form-control" name="phone" id="tphone" size="24" value="<%=phone == null ? "" : Utils.addEntities(phone) %>"/>
			</div>  
  		</div>
  		
  		<div class="row mb-2">          
            <label class="col-md-2" for="tlanguage"><fmt:message key="jsp.register.profile-form.language.field"/></label>
            <div class="col-md-6">            
       		<select class="form-control" name="language" id="tlanguage">
<%
		Locale[] supportedLocales = I18nUtil.getSupportedLocales();

        for (int i = supportedLocales.length-1; i >= 0; i--)
        {
        	String lang = supportedLocales[i].toString();
        	String selected = "";
        	
        	if (language == null || language.equals(""))
        	{ if(lang.equals(I18nUtil.getSupportedLocale(request.getLocale()).getLanguage()))
        		{
        			selected = "selected=\"selected\"";
        		}
        	}
        	else if (lang.equals(language))
        	{ selected = "selected=\"selected\"";}
%>
          	 <option <%= selected %>
                value="<%= lang %>"><%= supportedLocales[i].getDisplayName(I18nUtil.getSupportedLocale(request.getLocale())) %></option>
<%
        }
%>
        	</select>
        	</div>
   		</div>
        <div class="row mb-2">
        <%-- <td></td> --%>
            <label class="col-md-2"></label>
            <div class="col-md-3">
            <div class="custom-control custom-checkbox">
                            <input class="custom-control-input"  type="checkbox" name="can_log_in" id="can_log_in" value="true"<%= eperson.canLogIn() ? " checked=\"checked\"" : "" %> />
                            <label class="custom-control-label" for="can_log_in">
                            Require Certificate
												              </label>
                        </div>
			
			</div>
			<div class="col-md-3">
                  <div class="custom-control custom-checkbox">
                            <input class="custom-control-input"  type="checkbox" name="require_certificate" id="require_certificate" value="true"<%= eperson.getRequireCertificate() ? " checked=\"checked\"" : "" %> />
                            <label class="custom-control-label" for="require_certificate">
                            Require Certificate
												              </label>
                        </div>
			
			</div>
		</div>
		<div class="row mt-4">
        <%-- <td></td> --%>
            <label class="col-md-2"></label>
            <div class="col-md-6 btn-group px-0">
            
					<input class="btn btn-default" type="submit" name="submit_save" value="<fmt:message key="jsp.dspace-admin.general.save"/>" />
                    <input class="btn btn-default" type="submit" name="submit_resetpassword" value="<fmt:message key="jsp.dspace-admin.eperson-main.ResetPassword.submit"/>"/>
                    <%-- <input type="submit" name="submit_delete" value="Delete EPerson..."> --%>
                    <input class="btn btn-danger" type="submit" name="submit_delete" value="<fmt:message key="jsp.dspace-admin.general.delete"/>" />
			</div>		
		</div>
    		
    </form>

<%
  if((groupMemberships != null) && (groupMemberships.length>0))
  {
%>
	<br/>
	<br/>
	
	<h3><fmt:message key="jsp.dspace-admin.eperson-edit.groups"/></h3>
	
	<div class="row">    
    <ul>
	<%  for(int i=0; i<groupMemberships.length; i++)
     	{
        String myLink = groupMemberships[i].getName();
        String args   = "submit_edit&amp;group_id="+groupMemberships[i].getID();
        
        myLink = "<a href=\""
        +request.getContextPath()
        +"/tools/group-edit?"+args+"\">" + myLink + "</a>";
	%>
    	<li><%=myLink%></li>
	<%  } %>
    </ul>
    </div>
<% } %>  

</dspace:layout>

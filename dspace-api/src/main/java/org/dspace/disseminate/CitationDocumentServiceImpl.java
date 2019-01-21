/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.disseminate;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.PDPageTree;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.dspace.authorize.AuthorizeException;
import org.dspace.authorize.service.AuthorizeService;
import org.dspace.content.Bitstream;
import org.dspace.content.Community;
import org.dspace.content.IMetadataValue;
import org.dspace.content.Item;
import org.dspace.content.crosswalk.StreamDisseminationCrosswalk;
import org.dspace.content.service.BitstreamService;
import org.dspace.content.service.CommunityService;
import org.dspace.content.service.ItemService;
import org.dspace.core.Context;
import org.dspace.core.factory.CoreServiceFactory;
import org.dspace.disseminate.service.CitationDocumentService;
import org.dspace.disseminate.strategy.DissaminateStrategy;
import org.dspace.handle.service.HandleService;
import org.dspace.services.ConfigurationService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * The Citation Document produces a dissemination package (DIP) that is different that the archival package (AIP).
 * In this case we append the descriptive metadata to the end (configurable) of the document. i.e. last page of PDF.
 * So instead of getting the original PDF, you get a cPDF (with citation information added).
 *
 * @author Peter Dietz (peter@longsight.com)
 * @author Giuseppe Digilio (giuseppe dot digilio at 4science dot it)
 */
public class CitationDocumentServiceImpl implements CitationDocumentService, InitializingBean {
    /**
     * Class Logger
     */
    private static Logger log = Logger.getLogger(CitationDocumentServiceImpl.class);

    /**
     * A set of MIME types that can have a citation page added to them. That is,
     * MIME types in this set can be converted to a PDF which is then prepended
     * with a citation page.
     */
    protected final Set<String> VALID_TYPES = new HashSet<String>(2);

    /**
     * A set of MIME types that refer to a PDF
     */
    protected final Set<String> PDF_MIMES = new HashSet<String>(2);

    /**
     * A set of MIME types that refer to a JPEG, PNG, or GIF
     */
    protected final Set<String> RASTER_MIMES = new HashSet<String>();
    /**
     * A set of MIME types that refer to a SVG
     */
    protected final Set<String> SVG_MIMES = new HashSet<String>();
    
    public final String BITSTREAM_PREFIX = "bitstream.";

    /**
     * List of all enabled collections, inherited/determined for those under communities.
     */
    protected List<String> citationEnabledCollectionsList;

    protected File tempDir;

    protected String logo;
    protected String[] header1;
    protected String[] header2;
    protected boolean comColHeader;
    protected String[] fields;
    protected String footer;
    private String configPrefix;
    private Integer headingFontSize;
    private Integer subheadingFontSize;
    private Integer textFontSize;

	private ArrayList<DissaminateStrategy> configurationStrategy;

    /**
     * Citation page format
     */
    protected PDRectangle citationPageFormat = PDRectangle.LETTER;

    @Autowired(required = true)
    protected AuthorizeService authorizeService;
    @Autowired(required = true)
    protected BitstreamService bitstreamService;
    @Autowired(required = true)
    protected CommunityService communityService;
    @Autowired(required = true)
    protected ItemService itemService;
    @Autowired(required = true)
    protected ConfigurationService configurationService;

    @Autowired(required = true)
    protected HandleService handleService;

    public String getConfigPrefix() {
		return configPrefix + ".";
	}

	public void setConfigPrefix(String configPrefix) {
		this.configPrefix = configPrefix;
	}

    public ArrayList<DissaminateStrategy> getConfigurationStrategy() {
		return configurationStrategy;
	}

	public void setConfigurationStrategy(ArrayList<DissaminateStrategy> configurationStrategy) {
		this.configurationStrategy = configurationStrategy;
	}
	
	@Override
	public void afterPropertiesSet() throws Exception {
        // Add valid format MIME types to set. This could be put in the Schema
        // instead.
        //Populate RASTER_MIMES
        SVG_MIMES.add("image/jpeg");
        SVG_MIMES.add("image/pjpeg");
        SVG_MIMES.add("image/png");
        SVG_MIMES.add("image/gif");
        //Populate SVG_MIMES
        SVG_MIMES.add("image/svg");
        SVG_MIMES.add("image/svg+xml");


        //Populate PDF_MIMES
        PDF_MIMES.add("application/pdf");
        PDF_MIMES.add("application/x-pdf");

        //Populate VALID_TYPES
        VALID_TYPES.addAll(PDF_MIMES);
	}

    private void initProperties() {
    	headingFontSize = 14;
    	subheadingFontSize = 13;
    	textFontSize = 12;
    	
    	
        String configPrefix = getConfigPrefix();

        // Configurable text/fields, we'll set sane defaults
        String[] logoCfg = configurationService.getArrayProperty(configPrefix + "logo_path");
        if (logoCfg==null || logoCfg.length==0)
        {
        	logo = "";
        } else {
        	logo = logoCfg[0]; 
        }

        header1 = configurationService.getArrayProperty(configPrefix + "header1");
        if (header1==null || header1.length==0)
        {
            header1 = new String[]{"DSpace Institution", ""};
        }

        header2 = configurationService.getArrayProperty(configPrefix + "header2");
        if (header2==null || header2.length==0)
        {
            header2 = new String[]{"DSpace Repository", "http://dspace.org"};
        }

        comColHeader = configurationService.getBooleanProperty(configPrefix + "comColHeader", true);

        fields = configurationService.getArrayProperty(configPrefix + "fields");
        if (fields==null || fields.length==0)
        {
            fields = new String[]{"dc.date.issued", "dc.title", "dc.creator", "dc.contributor.author", "dc.publisher", "_line_", "dc.identifier.citation", "dc.identifier.uri"};
        }

        String footerConfig = configurationService.getProperty(configPrefix + "footer");
        if(StringUtils.isNotBlank(footerConfig) || configurationService.hasProperty(configPrefix + "footer")) {
            footer = footerConfig;
        } else {
            footer = "Downloaded from DSpace Repository, DSpace Institution's institutional repository";
        }

        String pageformatCfg = configurationService.getProperty(configPrefix + "page_format");

        if (pageformatCfg != null) {
            if (pageformatCfg.equalsIgnoreCase("A4")) {
                citationPageFormat = PDRectangle.A4;
            } else if (!pageformatCfg.equalsIgnoreCase("LETTER")) {
                log.info("Citation-page: Unknown page format ' " + pageformatCfg + "', using LETTER.");
            }
        }

        //Ensure a temp directory is available
        String tempDirString = configurationService.getProperty("dspace.dir") + File.separator + "temp";
        tempDir = new File(tempDirString);
        if(!tempDir.exists()) {
            boolean success = tempDir.mkdir();
            if(success) {
                log.info("Created temp directory at: " + tempDirString);
            } else {
                log.info("Unable to create temp directory at: " + tempDirString);
            }
        }
    }

    protected String retrieveConfigFile(Context context, Bitstream bitstream) {
    	String configFile = null;

    	for (DissaminateStrategy strategy : configurationStrategy) {
    		try {
				if (strategy.isStrategyEnabled(context, bitstream)) {
					configFile = strategy.getConfigFile(context, bitstream);
					break;
				}
			} catch (SQLException e) {
				configFile = null;
			}
    	}
    		
    	return configFile;
    }
    protected boolean isCitationEnabledThroughStrategy(Context context, Bitstream bitstream) throws SQLException {   		
    	return retrieveConfigFile(context, bitstream) != null;
    }

    @Override
    public Boolean isCitationEnabledForBitstream(Bitstream bitstream, Context context) throws SQLException {

        boolean adminUser = authorizeService.isAdmin(context);

        if(!adminUser && canGenerateCitationVersion(context, bitstream)) {
            return true;
        }

        // If previous logic didn't return true, then we're false.
        return false;
    }

    /**
     * Should the citation page be the first page of the document, or the last page?
     * default = true. true = first page, false = last page
     * citation_as_first_page=true
     */
    protected Boolean citationAsFirstPage = null;

    protected Boolean isCitationFirstPage() {
        if(citationAsFirstPage == null) {
            citationAsFirstPage = configurationService.getBooleanProperty(getConfigPrefix() + "citation_as_first_page", true);
        }

        return citationAsFirstPage;
    }

    @Override
    public boolean canGenerateCitationVersion(Context context, Bitstream bitstream) throws SQLException
    {
        return isCitationEnabledThroughStrategy(context, bitstream) && VALID_TYPES.contains(bitstream.getFormat(context).getMIMEType());
    }

    @Override
    public File makeCitedDocument(Context context, Bitstream bitstream)
            throws IOException, SQLException, AuthorizeException {
        PDDocument document = new PDDocument();
        PDDocument sourceDocument = new PDDocument();
        try {
        	setConfigPrefix(retrieveConfigFile(context, bitstream));
        	initProperties();
            Item item = (Item) bitstreamService.getParentObject(context, bitstream);
            sourceDocument = sourceDocument.load(bitstreamService.retrieve(context, bitstream));
            PDPage coverPage = new PDPage(citationPageFormat);
            generateCoverPage(context, document, coverPage, item, bitstream);
            addCoverPageToDocument(document, sourceDocument, coverPage);

            document.save(tempDir.getAbsolutePath() + "/bitstream.cover.pdf");
            return new File(tempDir.getAbsolutePath() + "/bitstream.cover.pdf");
        } finally {
            sourceDocument.close();
            document.close();
        }
    }

    protected void generateCoverPage(Context context, PDDocument document, PDPage coverPage, Item item, Bitstream bitstream) throws IOException {
        PDPageContentStream contentStream = new PDPageContentStream(document, coverPage);
        ConvertMetadata converter = new ConvertMetadata();
        try {
        	
            int ypos = 760;
            int xpos = 30;
            int xwidth = 550;
            int ygap = 20;

            PDFont fontHelvetica = PDType1Font.HELVETICA;
            PDFont fontHelveticaBold = PDType1Font.HELVETICA_BOLD;
            PDFont fontHelveticaOblique = PDType1Font.HELVETICA_OBLIQUE;
            contentStream.setNonStrokingColor(Color.BLACK);

            Integer yImage = drawImage(document, coverPage, contentStream, xwidth, ypos - ygap);
            ypos = yImage;
            
            if (header1.length > 0 && StringUtils.isNotBlank(header1[0])) {
	            String[][] content = {header1};
	            drawTable(coverPage, contentStream, ypos, xpos, content, fontHelveticaBold, textFontSize, false);
	            ypos -=(ygap);
            }

            if (header2.length > 0 && StringUtils.isNotBlank(header2[0])) {
	            String[][] content2 = {header2};
	            drawTable(coverPage, contentStream, ypos, xpos, content2, fontHelveticaBold, textFontSize, false);
	            ypos -=ygap;
            }

            if (comColHeader) {
                contentStream.fillRect(xpos, ypos, xwidth, 1);
                contentStream.closeAndStroke();

	            String[][] content3 = {{getOwningCommunity(context, item), getOwningCollection(item)}};
	            drawTable(coverPage, contentStream, ypos, xpos, content3, fontHelvetica, 9, false);
	            ypos -=ygap;

	            contentStream.fillRect(xpos, ypos, xwidth, 1);
	            contentStream.closeAndStroke();
	            ypos -=(ygap*2);
            }

            for(String field : fields) {            	
                field = field.trim();
                PDFont font = fontHelvetica;
                int fontSize = textFontSize;
                if(field.contains("title")) {
                    fontSize = headingFontSize;
                    ypos -= ygap;
                } else if(field.contains("creator") || field.contains("contributor")) {
                    fontSize = subheadingFontSize;
                }

                if(field.equals("_line_")) {
                    contentStream.fillRect(xpos, ypos, xwidth, 1);
                    contentStream.closeAndStroke();
                    ypos -=(ygap);

                }
                if(field.equals("_blankline_")) {
                    ypos -=(ygap);

                } else if (field.startsWith(BITSTREAM_PREFIX)) {
                	String bistreamField = field.substring(BITSTREAM_PREFIX.length());
                	if (StringUtils.isNotEmpty(converter.convert(bistreamField, bitstream))) {
                    	String metadataContent = converter.convert(bistreamField, bitstream);
                        ypos = drawStringWordWrap(coverPage, contentStream, metadataContent, xpos, ypos, font, fontSize);
                    }
                	
                } else if (StringUtils.isNotEmpty(converter.convert(field, item))) {
                	String metadataContent = converter.convert(field, item);
                    ypos = drawStringWordWrap(coverPage, contentStream, metadataContent, xpos, ypos, font, fontSize);
                    
                } else if (field.startsWith("item.")) {
                	String config = field.substring("item.".length());
                    StreamDisseminationCrosswalk crosswalk = (StreamDisseminationCrosswalk)CoreServiceFactory.getInstance().getPluginService().getNamedPlugin(StreamDisseminationCrosswalk.class, config);
                    if (crosswalk != null) {
	                    ByteArrayOutputStream out = new ByteArrayOutputStream();
	                    String metadataContent = null;
	                    
	                    try
	                    {            
	                        crosswalk.disseminate(null, item, out);
	                        metadataContent = out.toString();
	                        metadataContent = metadataContent.replace("\n", " ").replace("\r", " ");
	                        if (StringUtils.isNotEmpty(metadataContent)) {
	                            ypos = drawStringWordWrap(coverPage, contentStream, metadataContent, xpos, ypos, font, fontSize);
	                        }
	                    }        
	                    catch (Exception e)
	                    {
	                        log.error(e.getMessage(),e);
	                    }
                    }
                }

            }

            if (!footer.isEmpty()) {
	            contentStream.beginText();
	            contentStream.setFont(fontHelveticaOblique, textFontSize);
	            contentStream.moveTextPositionByAmount(xpos, ypos);
	            contentStream.drawString(footer);
	            contentStream.endText();
            }
        } finally {
            contentStream.close();
        }
    }

    protected void addCoverPageToDocument(PDDocument document, PDDocument sourceDocument, PDPage coverPage) {
        PDPageTree sourcePageList = sourceDocument.getDocumentCatalog().getPages();

        if (isCitationFirstPage()) {
            //citation as cover page
            document.addPage(coverPage);
            for (PDPage sourcePage : sourcePageList) {
                document.addPage(sourcePage);
            }
        } else {
            //citation as tail page
            for (PDPage sourcePage : sourcePageList) {
                document.addPage(sourcePage);
            }
            document.addPage(coverPage);
        }
    }

    @Override
    public int drawStringWordWrap(PDPage page, PDPageContentStream contentStream, String text,
                                    int startX, int startY, PDFont pdfFont, float fontSize) throws IOException {
        float leading = 1.5f * fontSize;

        PDRectangle mediabox = page.getMediaBox();
        float margin = 72;
        float width = mediabox.getWidth() - 2*margin;

        List<String> lines = new ArrayList<>();
        int lastSpace = -1;
        while (text.length() > 0)
        {
            int spaceIndex = text.indexOf(' ', lastSpace + 1);
            if (spaceIndex < 0)
            {
                lines.add(text);
                text = "";
            }
            else
            {
                String subString = text.substring(0, spaceIndex);
                float size = fontSize * pdfFont.getStringWidth(subString) / 1000;
                if (size > width)
                {
                    if (lastSpace < 0) // So we have a word longer than the line... draw it anyways
                        lastSpace = spaceIndex;
                    subString = text.substring(0, lastSpace);
                    lines.add(subString);
                    text = text.substring(lastSpace).trim();
                    lastSpace = -1;
                }
                else
                {
                    lastSpace = spaceIndex;
                }
            }
        }

        contentStream.beginText();
        contentStream.setFont(pdfFont, fontSize);
        contentStream.moveTextPositionByAmount(startX, startY);
        int currentY = startY;
        for (String line: lines)
        {
            contentStream.drawString(line);
            currentY -= leading;
            contentStream.moveTextPositionByAmount(0, -leading);
        }
        contentStream.endText();
        return currentY;
    }

    @Override
    public String getOwningCommunity(Context context, Item item) {
        try {
            List<Community> comms = itemService.getCommunities(context, item);
            if(comms.size() > 0) {
                return comms.get(0).getName();
            } else {
                return " ";
            }

        } catch (SQLException e) {
            log.error(e.getMessage());
            return e.getMessage();
        }
    }

    @Override
    public String getOwningCollection(Item item) {
        return item.getOwningCollection().getName();
    }

    @Override
    public String getAllMetadataSeparated(Item item, String metadataKey) {
        List<IMetadataValue> dcValues = itemService.getMetadataByMetadataString(item, metadataKey);

        ArrayList<String> valueArray = new ArrayList<String>();

        for(IMetadataValue dcValue : dcValues) {
            if(StringUtils.isNotBlank(dcValue.getValue())) {
                valueArray.add(dcValue.getValue());
            }
        }

        return StringUtils.join(valueArray.toArray(), "; ");
    }

    @Override
    public void drawTable(PDPage page, PDPageContentStream contentStream,
                                 float y, float margin,
                                 String[][] content, PDFont font, int fontSize, boolean cellBorders) throws IOException {
        final int rows = content.length;
        final int cols = content[0].length;
        final float rowHeight = 20f;
        final float tableWidth = page.getMediaBox().getWidth()-(2*margin);
        final float tableHeight = rowHeight * rows;
        final float colWidth = tableWidth/(float)cols;
        final float cellMargin=5f;

        if(cellBorders) {
            //draw the rows
            float nexty = y ;
            for (int i = 0; i <= rows; i++) {
                contentStream.drawLine(margin,nexty,margin+tableWidth,nexty);
                nexty-= rowHeight;
            }

            //draw the columns
            float nextx = margin;
            for (int i = 0; i <= cols; i++) {
                contentStream.drawLine(nextx,y,nextx,y-tableHeight);
                nextx += colWidth;
            }
        }

        //now add the text
        contentStream.setFont(font, fontSize);

        float textx = margin+cellMargin;
        float texty = y-15;
        for(int i = 0; i < content.length; i++){
            for(int j = 0 ; j < content[i].length; j++){
                String text = content[i][j];
                contentStream.beginText();
                contentStream.moveTextPositionByAmount(textx,texty);
                contentStream.drawString(text);
                contentStream.endText();
                textx += colWidth;
            }
            texty-=rowHeight;
            textx = margin+cellMargin;
        }
    }
    
    public int drawImage(PDDocument document, PDPage page, PDPageContentStream contentStream,
    					 			int startX, int startY) throws IOException {
    	int ypos = startY;
    	int imagex = 0;
    	int imagey = 0;
    	int imageyPadding = 60;

		if(StringUtils.isNotBlank(logo) ) {
			File file = new File(logo);
			if(file!= null && file.exists()){
           	
            	PDImageXObject pdImage = PDImageXObject.createFromFileByContent(file, document);

            	imagex = startX - pdImage.getWidth();
            	imagey = startY - pdImage.getHeight();
            	contentStream.drawImage(pdImage, imagex, imagey);
            	
            	ypos = imagey - imageyPadding;

			}

		}

    	return ypos;
    }

}

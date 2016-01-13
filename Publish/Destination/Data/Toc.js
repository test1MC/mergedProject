var xmlTocData = "";
xmlTocData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlTocData += '<CatapultToc Version=\"1\" DescendantCount=\"1\">';
xmlTocData += '    <TocEntry Title=\"Parent\" Link=\"/Content/Topic.htm\" ComputedResetPageLayout=\"true\" ComputedFirstTopic=\"true\" DescendantCount=\"0\" />';
xmlTocData += '    <TocEntry Title=\"Child\" Link=\"/../../../../child/child.flprj\" AbsoluteLink=\"file:///C:/Users/dspencer/Documents/My Projects/child/child.flprj\" MergeHint=\"0\" ComputedFirstTopic=\"false\" DescendantCount=\"0\">';
xmlTocData += '    </TocEntry>';
xmlTocData += '</CatapultToc>';
CMCXmlParser._FilePathToXmlStringMap.Add('Toc', xmlTocData);

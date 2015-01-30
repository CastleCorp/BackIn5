

/**$.ajax({ type: "POST",
    url: "http://localhost:9007/rss/messageFeed.xml",
    data: "<test></test>", 
    contentType: "text/xml",
    dataType: "xml",
    cache: false,
    success : alert("Success"),
    error : function (xhr, ajaxOptions, thrownError){  
        console.log(xhr.status);          
        console.log(thrownError);
    } 
}); **/

$.post("http://localhost:9007/rss/messageFeed.xml", "<item><phone>5712286515</phone><message>Test</message></item>");
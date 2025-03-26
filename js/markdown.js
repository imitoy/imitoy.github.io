$(document).ready(function(){
    var path = window.location.pathname;
    if(!path.endsWith("/") && !path.endsWith(".html")){
        path += "/";
    }
    if(path.endsWith("/")){
        path += "index.html";
    }
    $.get(path.replace("index.html", "index.md"),function(response,state){
        $("#content").html(marked.parse(response));
    })
    $.get(path.replace("index.html", "title.md"),function(response, state){
        $("#title").text(response);
    })
})
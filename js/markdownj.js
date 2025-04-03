$(document).ready(function(){
    var path = window.location.pathname;
    if(!path.endsWith("/") && !path.endsWith(".html")){
        path += "/";
    }
    if(path.endsWith("/")){
        path += "index.html";
    }
    $.get(window.location.pathname.replace("index.html", "index.md"),function(response,state){
        $("#content").html(marked.parse(response));
        MathJax.typeset();
    })
    $.get(window.location.pathname.replace("index.html", "title.txt"),function(response, state){
        $("#title").text(response);
    })
})
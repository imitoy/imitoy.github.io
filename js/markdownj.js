$(document).ready(function(){
    $.get(window.location.pathname.replace("index.html", "index.md"),function(response,state){
        $("#content").html(marked.parse(response));
        MathJax.typeset();
    })
    $.get(window.location.pathname.replace("index.html", "title.txt"),function(response, state){
        $("#title").text(response);
    })
})
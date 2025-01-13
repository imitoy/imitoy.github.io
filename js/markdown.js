$(document).ready(function(){
    $.get(window.location.pathname.replace("index.html", "index.markdown"),function(response,state){
        $("#content").html(marked.parse(response));
    })
    $.get(window.location.pathname.replace("index.html", "title.txt"),function(response, state){
        $("#title").text(response);
    })
})
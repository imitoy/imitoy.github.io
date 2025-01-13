var content_node;

function loadMarkdown(content){
    addChildWithAnimation(content_node)
    //content_node.innerHTML = content;//marked.parse(content);
}

$(document).ready(function(){
    $("#content").text("gggg");
    $.get("http://localhost:8158/index.html",function(response, state){
        $("#content_node").text(state);
        })
})

window.onload = function(event){
    content_node = document.getElementById("content");
    content_node.innerHTML="hhhh"
    {
        var progress_passage = document.getElementById("progress-passage");
        var href = window.location.href.replace("html", "md")
        
        //const axios = require("axios")
        content_node.innerHTML=href
        $.get(href,function(response, state){
        content_node.innerHTML=state
        })
    }
}
mdui.setColorScheme('#ffff00');

var animation_duration = 0.35

var progress_passage;

function removeChildWithAnimation(node, callback){
    const id = setInterval(animateRemovingChild, 5);
    const count_all = animation_duration*200;
    const change = 1/count_all;
    let count = 0;
    function animateRemovingChild(){
        count++;
        node.style.opacity = 1-count*change;
        if(count == count_all){
            node.parentNode.removeChild(node);
            clearInterval(id);
            callback();
        }
    }
}

function addChildWithAnimation(node, callback){
    const id = setInterval(animateAddingChild, 5);
    const count_all = animation_duration*200;
    const change = 1/count_all;
    let count = 0;
    function animateAddingChild(){
        count++;
        node.style.opacity = count*change;
        if(count == count_all){
            clearInterval(id);
            callback();
        }
    }
}

function freshContent(progress, host){
    removeChildWithAnimation(progress);
}

window.onload = function(event){
    {
        progress_passage = document.getElementById("progress-passage");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "host.txt");
        xhr.onload = function(){
            if(xhr.status == 200){
                console.log(xhr.responseText);
                freshContent(progress_passage);
            }else{
                console.error(`err, ${xhr.status}`);
            }
        }
        xhr.send();
    }
}
"use strict";
const file = {
    init:function(){
        file.filecreator();
    },
    filecreator:function(){
        const file = document.getElementById("files");
        file.onchange = function(event){
            const filereader = new FileReader();
            filereader.onload = function(){
               names.init(JSON.parse(filereader.result));
            };
            filereader.readAsText(file.files[0]);
        };
    },
};
window.onload = file.init();
"use strict";
const names = {
    init:function(object){
        names.getnames(object); 
    },
    getnames:function(object){
        const array = [];
        const orgname = object.organization;
        for(var i = 0; i < object.usernames.length; i++){
            array.push(object.usernames[i]["username"]);
        }
        names.urlnames(array,orgname);
    },
    urlnames:function(array,orgname){
        var url = "users/";
        for(var i = 0; i < array.length; i++){
            url += array[i] + "+";
        }
        url = url.slice(0,-1);
        names.getnamesfromurl(url,orgname);
    },
    getnamesfromurl:function(url,orgname){
        //makes the request towards api. in real life
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                names.passiton(response,orgname);
            }
        };
        xhr.open("GET", "names.json", true);
        xhr.send(null);
    },
    passiton:function(response,orgname){
        gettemplates.init(response,orgname);
    }
};

"use strict";
const gettemplates = {
    init: function(names,orgname){
        console.log(names);
        gettemplates.gettemplates(orgname,names);
    },
    gettemplates:function(orgname,names){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                gettemplates.changetemplate(response,names,orgname);
            }
        };
        xhr.open("GET", "template.json", true);
        xhr.send(null);
    },
    changetemplate:function(response,names,orgname){
        const responses = response;
        let obj = {};
        let newarray = [];
        for(var i = 0; i < names.length; i++){
            obj = {};
            responses.repos.forEach(function (repo) {
                repo['nameFormat'] = repo.nameFormat.replace('{username}',names[i].services.github);
                repo['description'] = repo.description.replace('{firstname}',names[i].firstname);
                repo['description'] = repo.description.replace('{class}',orgname);
                repo['description'] = repo.description.replace('{lastname}',names[i].lastname);
            });
            obj = responses;
            newarray.push(obj);
        }
        console.log(newarray);
    }
    
};
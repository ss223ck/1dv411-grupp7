"use strict";
const request = require("request");
const Collect_Templates = {
    produceTemplates:function(usernameAPIresponse,templateAPIurl){
        request("../resources/UsernameAPIresponse.json", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var response = JSON.parse(body);
                Collect_Templates.modifyTemplates(response, usernameAPIresponse, templateAPIurl);
            }
        });

    },
    modifyTemplates:function(templateResponse,usernameAPIresponse,orgNumber){
        const templateForm = templateResponse;
        var completeTemplate = {};
        var displayArray = [];
        for(var i = 0; i < usernameAPIresponse.length; i++){
            completeTemplate = {};
            templateForm.repos.forEach(function (repo) {
                repo['nameFormat'] = repo.nameFormat.replace('{username}',usernameAPIresponse[i].services.github);
                repo['description'] = repo.description.replace('{firstname}',usernameAPIresponse[i].firstname);
                repo['description'] = repo.description.replace('{class}',orgNumber);
                repo['description'] = repo.description.replace('{lastname}',usernameAPIresponse[i].lastname);
            });
            completeTemplate = templateForm;
            displayArray.push(completeTemplate);
        }
        console.log(displayArray);
    }
    
};
module.exports = Collect_Templates;
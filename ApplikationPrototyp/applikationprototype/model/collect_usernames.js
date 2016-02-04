"use strict";
const request = require("request");

const Collect_Usernames = {
    produceUrl:function(courseNames){
        courseNames = JSON.parse(courseNames);
        //const templateAPIurl = courseNames["organization"];
        var usernameAPIurl = "users/";
        for(var i = 0; i < courseNames.usernames.length; i++){
            usernameAPIurl += courseNames.usernames[i]["username"];
            if(i+1 != courseNames.usernames.length )
            {
                usernameAPIurl += "+";
            }
        }
        return usernameAPIurl;
        //Collect_Usernames.gatherUsernamesFromUrl(usernameAPIurl, templateAPIurl);
    },
    gatherUsernamesFromUrl:function(usernameAPIurl,templateAPIurl){
        //makes the request towards api. in real life

        /*request("../resources/UsernameAPIresponse.json", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var response = JSON.parse(body);
                Collect_Usernames.Next(response, templateAPIurl);
            }
        });*/
        //the url should be the url that we send as a args but in this case we mock with a json file
        //A usernameAPIurl could be "http://localhost:5000/" + usernameAPIurl this translate to "http://localhost:5000/users/kalle+kalle...


        var myvar = require("../resources/UsernameAPIresponse.json");
        Collect_Usernames.Next(myvar, templateAPIurl);
        //For demo version^
    },
    Next:function(response,templateAPIurl){
        const collect_template = require("collect_templates");

        collect_template.produceTemplates(response,templateAPIurl);
    }
};
module.exports = Collect_Usernames;
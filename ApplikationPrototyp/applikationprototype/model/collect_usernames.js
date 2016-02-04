"use strict";
const request = require("request");

const Collect_Usernames = {
    produceUrl:function(courseNames){
        courseNames = JSON.parse(courseNames);
        //const templateAPIurl = courseNames["organization"];
        var usernameAPIurl = "users/";
        for(var i = 0; i < courseNames.usernames.length; i++){
            usernameAPIurl += courseNames.usernames[i]["username"];
            //At the last format do not add a plus mark at the end of the url
            if(i+1 != courseNames.usernames.length )
            {
                usernameAPIurl += "+";
            }
        }
        return usernameAPIurl;
        //Collect_Usernames.gatherUsernamesFromUrl(usernameAPIurl, templateAPIurl);
    },
    gatherUsernamesFromUrl:function(usernameAPIurl){
        //makes the request towards api. in real life

        /*request("usernameAPIurl", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                return body;
            }
            else
            {
                throw new Error("Something went wrong when fetching data from API");
            }
        });*/
        //the url should be the url that we send as a args but in this case we mock with a json file
        //A usernameAPIurl could be "http://localhost:5000/" + usernameAPIurl this translate to "http://localhost:5000/users/kalle+kalle...


        var myvar = require("../resources/UsernameAPIresponse.json");
        return JSON.stringify(myvar);
        //Collect_Usernames.Next(myvar, templateAPIurl);
        //For demo version^
    }/*,
    Next:function(response,templateAPIurl){
        const collect_template = require("collect_templates");

        collect_template.produceTemplates(response,templateAPIurl);
    }*/
};
module.exports = Collect_Usernames;
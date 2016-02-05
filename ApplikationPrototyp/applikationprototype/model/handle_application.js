"use strict"

const Handle_Applikation = {
    init: function(){
        const collect_usernames = require("../model/collect_usernames");
        const collect_template = require("../model/collect_templates");
        const names = require("../resources/NamesOfCourseAttendant.json");

        var url = collect_usernames.produceUrl(names);
        var usernames = collect_usernames.gatherUsernamesFromUrl(url);
        var templateResponse =  collect_template.produceTemplates(names["organization"]);
        var readyTemplates = collect_template.modifyTemplates(templateResponse,usernames,names["organization"]);

        console.log(readyTemplates);
        return readyTemplates;
    }
}

module.exports = Handle_Applikation;
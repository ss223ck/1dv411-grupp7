/**
 * Created by User on 2016-02-01.
 */
var assert = require('assert');
describe('Test Suite express and middleware', function() {

    const httpMocks = require('node-mocks-http');
        chai = require('chai'),
        chai_assert = chai.assert,
        chaiAsPromised = require('chai-as-promised'),
        expect = require('chai').expect;

    chai.use(chaiAsPromised);

    var req, res;

    describe('Middleware index', function() {

        beforeEach(function(done){
            req = httpMocks.createRequest();
            res = httpMocks.createResponse();
            done();
        });
        afterEach(function(done){
            req = null;
            res = null;
            done();
        });
        it('Test index middleware is not null and is defined', function (  ) {
            const index = require('../express_middleware/index_middleware.js');

            chai_assert.isNotNull(index);
            chai_assert.isDefined(index);
        });
        it('Test index middleware for response function', function (  ) {
            const index = require('../express_middleware/index_middleware.js');

            chai_assert.isFunction(index.renderResponse);
        });
        it('Test index middleware responde with status 200', function (  ) {
            const index = require('../express_middleware/index_middleware.js');

            return index.renderResponse(req, res)
                .then(function (response){
                    expect(response.statusCode).to.equal(200);
                });
        });

    });

    describe('Model', function() {
        it('Test collect_usernames is not null and is defined', function (  ) {
            const collect_usernames = require('../model/collect_usernames.js');

            chai_assert.isNotNull(collect_usernames);
            chai_assert.isDefined(collect_usernames);
        });
        it('Test collect_templates is not null and is defined', function (  ) {
            const collect_templates = require('../model/collect_templates.js');

            chai_assert.isNotNull(collect_templates);
            chai_assert.isDefined(collect_templates);
        });
        it("Test collect_usernames: produceUrl", function () {
            const collect = require('../model/collect_usernames.js');
            const names = require("../resources/NamesOfCourseAttendant");

            chai_assert.strictEqual(collect.produceUrl(JSON.stringify(names)), "users/Kalle+Olle+Magnus");
        });
        it("Test collect_usernames: gatherUsernamesFromUrl", function () {
            const collect = require('../model/collect_usernames.js');
            const names = require("../resources/NamesOfCourseAttendant");

            chai_assert.strictEqual(collect.produceUrl(JSON.stringify(names)), "users/Kalle+Olle+Magnus");
        });
        it("Test collect_templates: modifyTemplates", function () {
            const collect_usernames = require('../model/collect_usernames.js');
            const collect_templates = require('../model/collect_templates.js');
            const names = require("../resources/NamesOfCourseAttendant");

            var url = collect_usernames.produceUrl(names);
            var usernames = collect_usernames.gatherUsernamesFromUrl(url);

            var
        });
        it("Test handle_application is not null and is defined", function(){
            const handle_application = require('../model/handle_application.js');

            chai_assert.isNotNull(handle_application);
            chai_assert.isDefined(handle_application);
        });
    });
});

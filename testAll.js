"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("./index");
var fs = require("fs");
var dir = 'examples-json';
var files = fs.readdirSync('./examples-json');
function JSONgrabber(files, dir) {
    var examples = [];
    var resource;
    var content;
    for (var i = 0; i < files.length; i++) {
        var data = fs.readFileSync(dir + '\\' + files[i], 'utf-8');
        data = JSON.stringify(JSON.parse(data));
        var file = files[i];
        //console.log(file);
        resource = data;
        examples.push(resource);
    }
    return examples;
}
var foo = JSONgrabber(files, dir);
function testJSON(jstring) {
    it('should return valid fhir resource in json\n Problem with file ', function () {
        var result = index_1.tester(jstring);
        chai_1.expect(result).to.equal(jstring);
    });
}
describe('fhir json cast into ts observation', function () {
    describe('main()', function () {
        foo.forEach(testJSON);
    });
});

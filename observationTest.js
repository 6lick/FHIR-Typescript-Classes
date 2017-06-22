"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("./index");
var foo = "{\n                    \"resourceType\": \"Observation\",\n                    \"id\": \"SMART-Observation-445-systolic\",\n                    \"meta\": {\n                        \"versionId\": \"1\",\n                        \"lastUpdated\": \"2016-07-06T12:48:24.000+00:00\"\n                    },\n                    \"text\": {\n                        \"status\": \"generated\",\n                        \"div\": \"<div xmlns=http://www.w3.org/1999/xhtml>2007-09-13: Systolic blood pressure = 167 mm[Hg]</div>\"\n                    },\n                    \"status\": \"final\",\n                    \"category\": {\n                        \"coding\": [\n                            {\n                                \"system\": \"http://hl7.org/fhir/observation-category\",\n                                \"code\": \"vital-signs\",\n                                \"display\": \"Vital Signs\"\n                            }\n                        ],\n                        \"text\": \"Vital Signs\"\n                    },\n                    \"code\": {\n                        \"coding\": [\n                            {\n                                \"system\": \"http://loinc.org\",\n                                \"code\": \"8480-6\",\n                                \"display\": \"Systolic blood pressure\"\n                            }\n                        ],\n                        \"text\": \"Systolic blood pressure\"\n                    },\n                    \"subject\": {\n                        \"reference\": \"Patient/SMART-1482713\"\n                    },\n                    \"effectiveDateTime\": \"2007-09-13\",\n                    \"valueQuantity\": {\n                        \"value\": 167,\n                        \"unit\": \"mm[Hg]\",\n                        \"system\": \"http://unitsofmeasure.org\",\n                        \"code\": \"mm[Hg]\"\n                    }\n             }";
var JSONobs = JSON.parse(foo);
JSONobs = JSON.stringify(JSONobs);
console.log(JSONobs);
describe('fhir json cast into ts observation', function () {
    it('should return valid fhir observation in json', function () {
        var result = index_1.tester(JSONobs);
        chai_1.expect(result).to.equal(JSONobs);
    });
});

import { expect } from 'chai';
import { tester } from './index';

var foo = `{
                    "resourceType": "Observation",
                    "id": "SMART-Observation-445-systolic",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2016-07-06T12:48:24.000+00:00"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=http://www.w3.org/1999/xhtml>2007-09-13: Systolic blood pressure = 167 mm[Hg]</div>"
                    },
                    "status": "final",
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8480-6",
                                "display": "Systolic blood pressure"
                            }
                        ],
                        "text": "Systolic blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/SMART-1482713"
                    },
                    "effectiveDateTime": "2007-09-13",
                    "valueQuantity": {
                        "value": 167,
                        "unit": "mm[Hg]",
                        "system": "http://unitsofmeasure.org",
                        "code": "mm[Hg]"
                    }
             }`;
let JSONobs = JSON.parse(foo);
JSONobs = JSON.stringify(JSONobs);

console.log(JSONobs);

describe('fhir json cast into ts observation', () =>{
    it('should return valid fhir observation in json',()=>{
        const result = tester(JSONobs);
        expect(result).to.equal(JSONobs);
    });
});


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = "{\n                    \"resourceType\": \"Observation\",\n                    \"id\": \"SMART-Observation-445-systolic\",\n                    \"meta\": {\n                        \"versionId\": \"1\",\n                        \"lastUpdated\": \"2016-07-06T12:48:24.000+00:00\"\n                    },\n                    \"text\": {\n                        \"status\": \"generated\",\n                        \"div\": \"<div xmlns=http://www.w3.org/1999/xhtml>2007-09-13: Systolic blood pressure = 167 mm[Hg]</div>\"\n                    },\n                    \"status\": \"final\",\n                    \"category\": {\n                        \"coding\": [\n                            {\n                                \"system\": \"http://hl7.org/fhir/observation-category\",\n                                \"code\": \"vital-signs\",\n                                \"display\": \"Vital Signs\"\n                            }\n                        ],\n                        \"text\": \"Vital Signs\"\n                    },\n                    \"code\": {\n                        \"coding\": [\n                            {\n                                \"system\": \"http://loinc.org\",\n                                \"code\": \"8480-6\",\n                                \"display\": \"Systolic blood pressure\"\n                            }\n                        ],\n                        \"text\": \"Systolic blood pressure\"\n                    },\n                    \"subject\": {\n                        \"reference\": \"Patient/SMART-1482713\"\n                    },\n                    \"effectiveDateTime\": \"2007-09-13\",\n                    \"valueQuantity\": {\n                        \"value\": 167,\n                        \"unit\": \"mm[Hg]\",\n                        \"system\": \"http://unitsofmeasure.org\",\n                        \"code\": \"mm[Hg]\"\n                    }\n             }   \n            ";
function tester(test) {
    //console.log(test);
    var fhirObs = JSON.parse(test);
    var type_ = fhirObs.resourceType;
    var foo;
    switch (type_) {
        case 'DataElement':
            foo = fhirObs;
            break;
        case 'Period':
            foo = fhirObs;
            break;
        case 'Coding':
            foo = fhirObs;
            break;
        case 'Range':
            foo = fhirObs;
            break;
        case 'Quantity':
            foo = fhirObs;
            break;
        case 'Attachment':
            foo = fhirObs;
            break;
        case 'Ratio':
            foo = fhirObs;
            break;
        case 'Annotation':
            foo = fhirObs;
            break;
        case 'SampledData':
            foo = fhirObs;
            break;
        case 'Reference':
            foo = fhirObs;
            break;
        case 'CodeableConcept':
            foo = fhirObs;
            break;
        case 'Identifier':
            foo = fhirObs;
            break;
        case 'Signature':
            foo = fhirObs;
            break;
        case 'fhirElementDefinition':
            foo = fhirObs;
            break;
        case 'Timing':
            foo = fhirObs;
            break;
        case 'Address':
            foo = fhirObs;
            break;
        case 'HumanName':
            foo = fhirObs;
            break;
        case 'Meta':
            foo = fhirObs;
            break;
        case 'ContactPoint':
            foo = fhirObs;
            break;
        case 'Extension':
            foo = fhirObs;
            break;
        case 'BackbonefhirElement':
            foo = fhirObs;
            break;
        case 'Narrative':
            foo = fhirObs;
            break;
        case 'Resource':
            foo = fhirObs;
            break;
        case 'Parameters':
            foo = fhirObs;
            break;
        case 'DomainResource':
            foo = fhirObs;
            break;
        case 'Condition':
            foo = fhirObs;
            break;
        case 'ProcedureRequest':
            foo = fhirObs;
            break;
        case 'DeviceComponent':
            foo = fhirObs;
            break;
        case 'DeviceMetric':
            foo = fhirObs;
            break;
        case 'Communication':
            foo = fhirObs;
            break;
        case 'Organization':
            foo = fhirObs;
            break;
        case 'ProcessRequest':
            foo = fhirObs;
            break;
        case 'Group':
            foo = fhirObs;
            break;
        case 'ValueSet':
            foo = fhirObs;
            break;
        case 'Coverage':
            foo = fhirObs;
            break;
        case 'ImmunizationRecommendation':
            foo = fhirObs;
            break;
        case 'Appointment':
            foo = fhirObs;
            break;
        case 'MedicationDispense':
            foo = fhirObs;
            break;
        case 'DetectedIssue':
            foo = fhirObs;
            break;
        case 'Slot':
            foo = fhirObs;
            break;
        case 'PaymentNotice':
            foo = fhirObs;
            break;
        case 'AppointmentResponse':
            foo = fhirObs;
            break;
        case 'MedicationStatement':
            foo = fhirObs;
            break;
        case 'ImplementationGuide':
            foo = fhirObs;
            break;
        case 'EpisodeOfCare':
            foo = fhirObs;
            break;
        case 'Questionnaire':
            foo = fhirObs;
            break;
        case 'Composition':
            foo = fhirObs;
            break;
        case 'OperationOutcome':
            foo = fhirObs;
            break;
        case 'Conformance':
            foo = fhirObs;
            break;
        case 'FamilyMemberHistory':
            foo = fhirObs;
            break;
        case 'NamingSystem':
            foo = fhirObs;
            break;
        case 'Media':
            foo = fhirObs;
            break;
        case 'Binary':
            foo = fhirObs;
            break;
        case 'HealthcareService':
            foo = fhirObs;
            break;
        case 'VisionPrescription':
            foo = fhirObs;
            break;
        case 'DocumentReference':
            foo = fhirObs;
            break;
        case 'Immunization':
            foo = fhirObs;
            break;
        case 'Bundle':
            foo = fhirObs;
            break;
        case 'Subscription':
            foo = fhirObs;
            break;
        case 'OrderResponse':
            foo = fhirObs;
            break;
        case 'ConceptMap':
            foo = fhirObs;
            break;
        case 'ImagingStudy':
            foo = fhirObs;
            break;
        case 'Practitioner':
            foo = fhirObs;
            break;
        case 'CarePlan':
            foo = fhirObs;
            break;
        case 'Provenance':
            foo = fhirObs;
            break;
        case 'Device':
            foo = fhirObs;
            break;
        case 'StructureDefinition':
            foo = fhirObs;
            break;
        case 'Account':
            foo = fhirObs;
            break;
        case 'Order':
            foo = fhirObs;
            break;
        case 'Procedure':
            foo = fhirObs;
            break;
        case 'Substance':
            foo = fhirObs;
            break;
        case 'QuestionnaireResponse':
            foo = fhirObs;
            break;
        case 'DeviceUseRequest':
            foo = fhirObs;
            break;
        case 'DiagnosticReport':
            foo = fhirObs;
            break;
        case 'Medication':
            foo = fhirObs;
            break;
        case 'MessageHeader':
            foo = fhirObs;
            break;
        case 'SupplyDelivery':
            foo = fhirObs;
            break;
        case 'Schedule':
            foo = fhirObs;
            break;
        case 'DocumentManifest':
            foo = fhirObs;
            break;
        case 'DatafhirElement':
            foo = fhirObs;
            break;
        case 'EligibilityRequest':
            foo = fhirObs;
            break;
        case 'MedicationAdministration':
            foo = fhirObs;
            break;
        case 'Encounter':
            foo = fhirObs;
            break;
        case 'PaymentReconciliation':
            foo = fhirObs;
            break;
        case 'TestScript':
            foo = fhirObs;
            break;
        case 'List':
            foo = fhirObs;
            break;
        case 'DeviceUseStatement':
            foo = fhirObs;
            break;
        case 'OperationDefinition':
            foo = fhirObs;
            break;
        case 'ImagingObjectSelection':
            foo = fhirObs;
            break;
        case 'Goal':
            foo = fhirObs;
            break;
        case 'SearchParameter':
            foo = fhirObs;
            break;
        case 'NutritionOrder':
            foo = fhirObs;
            break;
        case 'ClaimResponse':
            foo = fhirObs;
            break;
        case 'ReferralRequest':
            foo = fhirObs;
            break;
        case 'ClinicalImpression':
            foo = fhirObs;
            break;
        case 'BodySite':
            foo = fhirObs;
            break;
        case 'Flag':
            foo = fhirObs;
            break;
        case 'CommunicationRequest':
            foo = fhirObs;
            break;
        case 'Claim':
            foo = fhirObs;
            break;
        case 'RiskAssessment':
            foo = fhirObs;
            break;
        case 'EnrollmentRequest':
            foo = fhirObs;
            break;
        case 'Location':
            foo = fhirObs;
            break;
        case 'ExplanationOfBenefit':
            foo = fhirObs;
            break;
        case 'AllergyIntolerance':
            foo = fhirObs;
            break;
        case 'Observation':
            foo = fhirObs;
            break;
        case 'Contract':
            foo = fhirObs;
            break;
        case 'RelatedPerson':
            foo = fhirObs;
            break;
        case 'Basic':
            foo = fhirObs;
            break;
        case 'ProcessResponse':
            foo = fhirObs;
            break;
        case 'Specimen':
            foo = fhirObs;
            break;
        case 'AuditEvent':
            foo = fhirObs;
            break;
        case 'EnrollmentResponse':
            foo = fhirObs;
            break;
        case 'SupplyRequest':
            foo = fhirObs;
            break;
        case 'Patient':
            foo = fhirObs;
            break;
        case 'EligibilityResponse':
            foo = fhirObs;
            break;
        case 'MedicationOrder':
            foo = fhirObs;
            break;
        case 'Person':
            foo = fhirObs;
            break;
        case 'DiagnosticOrder':
            foo = fhirObs;
            break;
    }
    return JSON.stringify(foo);
}
exports.tester = tester;
exports.default = tester;
console.log(tester(test));

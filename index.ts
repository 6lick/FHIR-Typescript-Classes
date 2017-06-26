//import { Observation, FHIRAccount, ValueSet } from './tsInterfaces'
//import * as resources from './tsInterfaces'
import * as resources from './tmp'

let test = `{
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
             }   
            `;


export function tester(test){
    //console.log(test);
    let fhirObs =JSON.parse(test);
    var type_ =fhirObs.resourceType;
   
    var foo;
    switch(type_){
        
                     case 'DataElement':
                         foo = fhirObs as resources.DataElement;
                         break;
                     case 'Period':
                        foo = fhirObs as resources.Period;
                    break;
                    case 'Coding':
                        foo = fhirObs as resources.Coding;
                    break;
                    case 'Range':
                        foo = fhirObs as resources.FHIRRange;
                    break;
                    case 'Quantity':
                        foo = fhirObs as resources.Quantity;
                    break;
                    case 'Attachment':
                        foo = fhirObs as resources.Attachment;
                    break;
                    case 'Ratio':
                        foo = fhirObs as resources.Ratio;
                    break;
                    case 'Annotation':
                        foo = fhirObs as resources.Annotation;
                    break;
                    case 'SampledData':
                        foo = fhirObs as resources.SampledData;
                    break;
                    case 'Reference':
                        foo = fhirObs as resources.Reference;
                    break;
                    case 'CodeableConcept':
                        foo = fhirObs as resources.CodeableConcept;
                    break;
                    case 'Identifier':
                        foo = fhirObs as resources.Identifier;
                    break;
                    case 'Signature':
                        foo = fhirObs as resources.Signature;
                    break;
                    case 'ElementDefinition':
                        foo = fhirObs as resources.ElementDefinition;
                    break;
                    case 'Timing':
                        foo = fhirObs as resources.Timing;
                    break;
                    case 'Address':
                        foo = fhirObs as resources.Address;
                    break;
                    case 'HumanName':
                        foo = fhirObs as resources.HumanName;
                    break;
                    case 'Meta':
                        foo = fhirObs as resources.Meta;
                    break;
                    case 'ContactPoint':
                        foo = fhirObs as resources.ContactPoint;
                    break;
                    case 'Extension':
                        foo = fhirObs as resources.Extension;
                    break;
                    case 'BackboneElement':
                        foo = fhirObs as resources.BackboneElement;
                    break;
                    case 'Narrative':
                        foo = fhirObs as resources.Narrative;
                    break;
                    case 'Resource':
                        foo = fhirObs as resources.Resource;
                    break;
                    case 'Parameters':
                        foo = fhirObs as resources.Parameters;
                    break;
                    case 'DomainResource':
                        foo = fhirObs as resources.DomainResource;
                    break;
                    case 'Condition':
                        foo = fhirObs as resources.Condition;
                    break;
                    case 'ProcedureRequest':
                        foo = fhirObs as resources.ProcedureRequest;
                    break;
                    case 'DeviceComponent':
                        foo = fhirObs as resources.DeviceComponent;
                    break;
                    case 'DeviceMetric':
                        foo = fhirObs as resources.DeviceMetric;
                    break;
                    case 'Communication':
                        foo = fhirObs as resources.Communication;
                    break;
                    case 'Organization':
                        foo = fhirObs as resources.Organization;
                    break;
                    case 'ProcessRequest':
                        foo = fhirObs as resources.ProcessRequest;
                    break;
                    case 'Group':
                        foo = fhirObs as resources.Group;
                    break;
                    case 'ValueSet':
                        foo = fhirObs as resources.ValueSet;
                    break;
                    case 'Coverage':
                        foo = fhirObs as resources.Coverage;
                    break;
                    case 'ImmunizationRecommendation':
                        foo = fhirObs as resources.ImmunizationRecommendation;
                    break;
                    case 'Appointment':
                        foo = fhirObs as resources.Appointment;
                    break;
                    case 'MedicationDispense':
                        foo = fhirObs as resources.MedicationDispense;
                    break;
                    case 'DetectedIssue':
                        foo = fhirObs as resources.DetectedIssue;
                    break;
                    case 'Slot':
                        foo = fhirObs as resources.Slot;
                    break;
                    case 'PaymentNotice':
                        foo = fhirObs as resources.PaymentNotice;
                    break;
                    case 'AppointmentResponse':
                        foo = fhirObs as resources.AppointmentResponse;
                    break;
                    case 'MedicationStatement':
                        foo = fhirObs as resources.MedicationStatement;
                    break;
                    case 'ImplementationGuide':
                        foo = fhirObs as resources.ImplementationGuide;
                    break;
                    case 'EpisodeOfCare':
                        foo = fhirObs as resources.EpisodeOfCare;
                    break;
                    case 'Questionnaire':
                        foo = fhirObs as resources.Questionnaire;
                    break;
                    case 'Composition':
                        foo = fhirObs as resources.Composition;
                    break;
                    case 'OperationOutcome':
                        foo = fhirObs as resources.OperationOutcome;
                    break;
                    case 'Conformance':
                        foo = fhirObs as resources.Conformance;
                    break;
                    case 'FamilyMemberHistory':
                        foo = fhirObs as resources.FamilyMemberHistory;
                    break;
                    case 'NamingSystem':
                        foo = fhirObs as resources.NamingSystem;
                    break;
                    case 'Media':
                        foo = fhirObs as resources.Media;
                    break;
                    case 'Binary':
                        foo = fhirObs as resources.Binary;
                    break;
                    case 'HealthcareService':
                        foo = fhirObs as resources.HealthcareService;
                    break;
                    case 'VisionPrescription':
                        foo = fhirObs as resources.VisionPrescription;
                    break;
                    case 'DocumentReference':
                        foo = fhirObs as resources.DocumentReference;
                    break;
                    case 'Immunization':
                        foo = fhirObs as resources.Immunization;
                    break;
                    case 'Bundle':
                        foo = fhirObs as resources.Bundle;
                    break;
                    case 'Subscription':
                        foo = fhirObs as resources.Subscription;
                    break;
                    case 'OrderResponse':
                        foo = fhirObs as resources.OrderResponse;
                    break;
                    case 'ConceptMap':
                        foo = fhirObs as resources.ConceptMap;
                    break;
                    case 'ImagingStudy':
                        foo = fhirObs as resources.ImagingStudy;
                    break;
                    case 'Practitioner':
                        foo = fhirObs as resources.Practitioner;
                    break;
                    case 'CarePlan':
                        foo = fhirObs as resources.CarePlan;
                    break;
                    case 'Provenance':
                        foo = fhirObs as resources.Provenance;
                    break;
                    case 'Device':
                        foo = fhirObs as resources.Device;
                    break;
                    case 'StructureDefinition':
                        foo = fhirObs as resources.StructureDefinition;
                    break;
                    case 'Account':
                        foo = fhirObs as resources.FHIRAccount;
                    break;
                    case 'Order':
                        foo = fhirObs as resources.Order;
                    break;
                    case 'Procedure':
                        foo = fhirObs as resources.Procedure;
                    break;
                    case 'Substance':
                        foo = fhirObs as resources.Substance;
                    break;
                    case 'QuestionnaireResponse':
                        foo = fhirObs as resources.QuestionnaireResponse;
                    break;
                    case 'DeviceUseRequest':
                        foo = fhirObs as resources.DeviceUseRequest;
                    break;
                    case 'DiagnosticReport':
                        foo = fhirObs as resources.DiagnosticReport;
                    break;
                    case 'Medication':
                        foo = fhirObs as resources.Medication;
                    break;
                    case 'MessageHeader':
                        foo = fhirObs as resources.MessageHeader;
                    break;
                    case 'SupplyDelivery':
                        foo = fhirObs as resources.SupplyDelivery;
                    break;
                    case 'Schedule':
                        foo = fhirObs as resources.Schedule;
                    break;
                    case 'DocumentManifest':
                        foo = fhirObs as resources.DocumentManifest;
                    break;
                    case 'DataElement':
                        foo = fhirObs as resources.DataElement;
                    break;
                    case 'EligibilityRequest':
                        foo = fhirObs as resources.EligibilityRequest;
                    break;
                    case 'MedicationAdministration':
                        foo = fhirObs as resources.MedicationAdministration;
                    break;
                    case 'Encounter':
                        foo = fhirObs as resources.Encounter;
                    break;
                    case 'PaymentReconciliation':
                        foo = fhirObs as resources.PaymentReconciliation;
                    break;
                    case 'TestScript':
                        foo = fhirObs as resources.TestScript;
                    break;
                    case 'List':
                        foo = fhirObs as resources.List;
                    break;
                    case 'DeviceUseStatement':
                        foo = fhirObs as resources.DeviceUseStatement;
                    break;
                    case 'OperationDefinition':
                        foo = fhirObs as resources.OperationDefinition;
                    break;
                    case 'ImagingObjectSelection':
                        foo = fhirObs as resources.ImagingObjectSelection;
                    break;
                    case 'Goal':
                        foo = fhirObs as resources.Goal;
                    break;
                    case 'SearchParameter':
                        foo = fhirObs as resources.SearchParameter;
                    break;
                    case 'NutritionOrder':
                        foo = fhirObs as resources.NutritionOrder;
                    break;
                    case 'ClaimResponse':
                        foo = fhirObs as resources.ClaimResponse;
                    break;
                    case 'ReferralRequest':
                        foo = fhirObs as resources.ReferralRequest;
                    break;
                    case 'ClinicalImpression':
                        foo = fhirObs as resources.ClinicalImpression;
                    break;
                    case 'BodySite':
                        foo = fhirObs as resources.BodySite;
                    break;
                    case 'Flag':
                        foo = fhirObs as resources.Flag;
                    break;
                    case 'CommunicationRequest':
                        foo = fhirObs as resources.CommunicationRequest;
                    break;
                    case 'Claim':
                        foo = fhirObs as resources.Claim;
                    break;
                    case 'RiskAssessment':
                        foo = fhirObs as resources.RiskAssessment;
                    break;
                    case 'EnrollmentRequest':
                        foo = fhirObs as resources.EnrollmentRequest;
                    break;
                    case 'Location':
                        foo = fhirObs as resources.FHIRLocation;
                    break;
                    case 'ExplanationOfBenefit':
                        foo = fhirObs as resources.ExplanationOfBenefit;
                    break;
                    case 'AllergyIntolerance':
                        foo = fhirObs as resources.AllergyIntolerance;
                    break;
                    case 'Observation':
                        foo = fhirObs as resources.Observation;
                    break;
                    case 'Contract':
                        foo = fhirObs as resources.Contract;
                    break;
                    case 'RelatedPerson':
                        foo = fhirObs as resources.RelatedPerson;
                    break;
                    case 'Basic':
                        foo = fhirObs as resources.Basic;
                    break;
                    case 'ProcessResponse':
                        foo = fhirObs as resources.ProcessResponse;
                    break;
                    case 'Specimen':
                        foo = fhirObs as resources.Specimen;
                    break;
                    case 'AuditEvent':
                        foo = fhirObs as resources.AuditEvent;
                    break;
                    case 'EnrollmentResponse':
                        foo = fhirObs as resources.EnrollmentResponse;
                    break;
                    case 'SupplyRequest':
                        foo = fhirObs as resources.SupplyRequest;
                    break;
                    case 'Patient':
                        foo = fhirObs as resources.Patient;
                    break;
                    case 'EligibilityResponse':
                        foo = fhirObs as resources.EligibilityResponse;
                    break;
                    case 'MedicationOrder':
                        foo = fhirObs as resources.MedicationOrder;
                    break;
                    case 'Person':
                        foo = fhirObs as resources.Person;
                    break;
                    case 'DiagnosticOrder':
                        foo = fhirObs as resources.DiagnosticOrder;
                    break;
                        }

   

    return JSON.stringify(foo)

}
export default tester;
console.log(tester(test));


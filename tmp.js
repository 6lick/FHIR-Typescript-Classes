"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Element = (function () {
    function Element() {
    }
    return Element;
}());
exports.Element = Element;
var Resource = (function () {
    function Resource() {
    }
    return Resource;
}());
exports.Resource = Resource;
/*The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has a end value of 2012-02-03.*/
var Period = (function (_super) {
    __extends(Period, _super);
    function Period() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Period;
}(Element));
exports.Period = Period;
/*Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).
Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.*/
var Coding = (function (_super) {
    __extends(Coding, _super);
    function Coding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coding;
}(Element));
exports.Coding = Coding;
/*The high limit. The boundary is inclusive.
If the high element is missing, the high boundary is not known.*/
var FHIRRange = (function (_super) {
    __extends(FHIRRange, _super);
    function FHIRRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FHIRRange;
}(Element));
exports.FHIRRange = FHIRRange;
/*A computer processable form of the unit in some unit representation system.
The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.*/
var Quantity = (function (_super) {
    __extends(Quantity, _super);
    function Quantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Quantity;
}(Element));
exports.Quantity = Quantity;
/*The number of bytes of data that make up this attachment.
The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.*/
var Attachment = (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Attachment;
}(Element));
exports.Attachment = Attachment;
/*May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Ratio = (function (_super) {
    __extends(Ratio, _super);
    function Ratio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ratio;
}(Element));
exports.Ratio = Ratio;
/*May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Annotation = (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Annotation;
}(Element));
exports.Annotation = Annotation;
/*The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).*/
var SampledData = (function (_super) {
    __extends(SampledData, _super);
    function SampledData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SampledData;
}(Element));
exports.SampledData = SampledData;
/*Plain text narrative that identifies the resource in addition to the resource reference.
This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.*/
var Reference = (function (_super) {
    __extends(Reference, _super);
    function Reference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Reference;
}(Element));
exports.Reference = Reference;
/*A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
Very often the text is the same as a displayName of one of the codings.*/
var CodeableConcept = (function (_super) {
    __extends(CodeableConcept, _super);
    function CodeableConcept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CodeableConcept;
}(Element));
exports.CodeableConcept = CodeableConcept;
/*Organization that issued/manages the identifier.
The reference may be just a text description of the assigner.*/
var Identifier = (function (_super) {
    __extends(Identifier, _super);
    function Identifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Identifier;
}(Element));
exports.Identifier = Identifier;
/*The base64 encoding of the Signature content.
Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.*/
var Signature = (function (_super) {
    __extends(Signature, _super);
    function Signature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Signature;
}(Element));
exports.Signature = Signature;
/*Identifies a concept from an external specification that roughly corresponds to this element.
Mappings are not necessarily specific enough for safe translation.*/
var ElementDefinition = (function (_super) {
    __extends(ElementDefinition, _super);
    function ElementDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementDefinition;
}(Element));
exports.ElementDefinition = ElementDefinition;
/*A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.
A repeat should always be defined except for the common codes BID, TID, QID, AM and PM, which all systems are required to understand.*/
var Timing = (function (_super) {
    __extends(Timing, _super);
    function Timing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Timing;
}(Element));
exports.Timing = Timing;
/*Country - a nation as commonly understood or generally accepted.
ISO 3166 3 letter codes can be used in place of a full country name.*/
var Address = (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Address;
}(Element));
exports.Address = Address;
/*Given name.
If only initials are recorded, they may be used in place of the full name.  Not called "first name" since given names do not always come first.*/
var HumanName = (function (_super) {
    __extends(HumanName, _super);
    function HumanName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HumanName;
}(Element));
exports.HumanName = HumanName;
/*Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.*/
var Meta = (function (_super) {
    __extends(Meta, _super);
    function Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Meta;
}(Element));
exports.Meta = Meta;
/*Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
Note that rank does not necessarily follow the order in which the contacts are represented in the instance.*/
var ContactPoint = (function (_super) {
    __extends(ContactPoint, _super);
    function ContactPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContactPoint;
}(Element));
exports.ContactPoint = ContactPoint;
/*Source of the definition for the extension code - a logical name or a URL.
The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition should be version specific.  This will ideally be the URI for the Resource Profile defining the extension, with the code for the extension after a #.*/
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Extension;
}(Element));
exports.Extension = Extension;
/*May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var BackboneElement = (function (_super) {
    __extends(BackboneElement, _super);
    function BackboneElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BackboneElement;
}(Element));
exports.BackboneElement = BackboneElement;
/*The actual narrative content, a stripped down version of XHTML.
The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained stylesheets. The XHTML content may not contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.*/
var Narrative = (function (_super) {
    __extends(Narrative, _super);
    function Narrative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Narrative;
}(Element));
exports.Narrative = Narrative;
/*The base language in which the resource is written.
Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource  Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).*/
var Parameters = (function (_super) {
    __extends(Parameters, _super);
    function Parameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Parameters;
}(Resource));
exports.Parameters = Parameters;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var DomainResource = (function (_super) {
    __extends(DomainResource, _super);
    function DomainResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DomainResource;
}(Resource));
exports.DomainResource = DomainResource;
/*The anatomical location where this condition manifests itself.
May be a summary code, or a reference to a very precise definition of the location, or both.*/
var Condition = (function (_super) {
    __extends(Condition, _super);
    function Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Condition;
}(DomainResource));
exports.Condition = Condition;
/*Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).
Only used if not implicit in the code found in ProcedureRequest.type.*/
var ProcedureRequest = (function (_super) {
    __extends(ProcedureRequest, _super);
    function ProcedureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProcedureRequest;
}(DomainResource));
exports.ProcedureRequest = ProcedureRequest;
/*Indicates current operational status of the device. For example: On, Off, Standby, etc.
OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.*/
var DeviceComponent = (function (_super) {
    __extends(DeviceComponent, _super);
    function DeviceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeviceComponent;
}(DomainResource));
exports.DeviceComponent = DeviceComponent;
/*Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
DeviceMetric.unit can be referred to either UCUM or preferable RTMMS coding system.*/
var DeviceMetric = (function (_super) {
    __extends(DeviceMetric, _super);
    function DeviceMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeviceMetric;
}(DomainResource));
exports.DeviceMetric = DeviceMetric;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Communication = (function (_super) {
    __extends(Communication, _super);
    function Communication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Communication;
}(DomainResource));
exports.Communication = Communication;
/*Contact for the organization for a certain purpose.
Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.*/
var Organization = (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Organization;
}(DomainResource));
exports.Organization = Organization;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var ProcessRequest = (function (_super) {
    __extends(ProcessRequest, _super);
    function ProcessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProcessRequest;
}(DomainResource));
exports.ProcessRequest = ProcessRequest;
/*Identifies the traits shared by members of the group.
All the identified characteristics must be true for an entity to a member of the group.*/
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Group;
}(DomainResource));
exports.Group = Group;
/*A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
Expansion is performed to produce a collection of codes that are ready to use for data entry or validation.*/
var ValueSet = (function (_super) {
    __extends(ValueSet, _super);
    function ValueSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValueSet;
}(DomainResource));
exports.ValueSet = ValueSet;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Coverage = (function (_super) {
    __extends(Coverage, _super);
    function Coverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coverage;
}(DomainResource));
exports.Coverage = Coverage;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var ImmunizationRecommendation = (function (_super) {
    __extends(ImmunizationRecommendation, _super);
    function ImmunizationRecommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImmunizationRecommendation;
}(DomainResource));
exports.ImmunizationRecommendation = ImmunizationRecommendation;
/*Additional comments about the appointment.
Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"

Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.*/
var Appointment = (function (_super) {
    __extends(Appointment, _super);
    function Appointment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Appointment;
}(DomainResource));
exports.Appointment = Appointment;
/*Indicates how the medication is to be used by the patient.
When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.*/
var MedicationDispense = (function (_super) {
    __extends(MedicationDispense, _super);
    function MedicationDispense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MedicationDispense;
}(DomainResource));
exports.MedicationDispense = MedicationDispense;
/*A textual explanation of the detected issue.
Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.*/
var DetectedIssue = (function (_super) {
    __extends(DetectedIssue, _super);
    function DetectedIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DetectedIssue;
}(DomainResource));
exports.DetectedIssue = DetectedIssue;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Slot = (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Slot;
}(DomainResource));
exports.Slot = Slot;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var PaymentNotice = (function (_super) {
    __extends(PaymentNotice, _super);
    function PaymentNotice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaymentNotice;
}(DomainResource));
exports.PaymentNotice = PaymentNotice;
/*Additional comments about the appointment.
This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.*/
var AppointmentResponse = (function (_super) {
    __extends(AppointmentResponse, _super);
    function AppointmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppointmentResponse;
}(DomainResource));
exports.AppointmentResponse = AppointmentResponse;
/*Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
If only a code is specified, then it needs to be a code for a specific product.  If more information is required, then the use of the medication resource is recommended.  Note: do not use Medication.name to describe the medication this statement concerns. When the only available information is a text description of the medication, Medication.code.text should be used.*/
var MedicationStatement = (function (_super) {
    __extends(MedicationStatement, _super);
    function MedicationStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MedicationStatement;
}(DomainResource));
exports.MedicationStatement = MedicationStatement;
/*A page / section in the implementation guide. The root page is the implementation guide home page.
Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.*/
var ImplementationGuide = (function (_super) {
    __extends(ImplementationGuide, _super);
    function ImplementationGuide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImplementationGuide;
}(DomainResource));
exports.ImplementationGuide = ImplementationGuide;
/*A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.*/
var EpisodeOfCare = (function (_super) {
    __extends(EpisodeOfCare, _super);
    function EpisodeOfCare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EpisodeOfCare;
}(DomainResource));
exports.EpisodeOfCare = EpisodeOfCare;
/*A collection of related questions (or further groupings of questions).
The Questionnaire itself has one "root" group with the actual contents of the Questionnaire.  Information on this root group applies to the questionnaire as a whole.*/
var Questionnaire = (function (_super) {
    __extends(Questionnaire, _super);
    function Questionnaire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Questionnaire;
}(DomainResource));
exports.Questionnaire = Questionnaire;
/*The clinical service, such as a colonoscopy or an appendectomy, being documented.
The event needs to be consistent with the type element, though can provide further information if desired.*/
var Composition = (function (_super) {
    __extends(Composition, _super);
    function Composition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Composition;
}(DomainResource));
exports.Composition = Composition;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var OperationOutcome = (function (_super) {
    __extends(OperationOutcome, _super);
    function OperationOutcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperationOutcome;
}(DomainResource));
exports.OperationOutcome = OperationOutcome;
/*A description of the messaging capabilities of the solution.
Multiple repetitions allow the documentation of multiple endpoints per solution.*/
var Conformance = (function (_super) {
    __extends(Conformance, _super);
    function Conformance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conformance;
}(DomainResource));
exports.Conformance = Conformance;
/*The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.*/
var FamilyMemberHistory = (function (_super) {
    __extends(FamilyMemberHistory, _super);
    function FamilyMemberHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FamilyMemberHistory;
}(DomainResource));
exports.FamilyMemberHistory = FamilyMemberHistory;
/*Indicates how the system may be identified when referenced in electronic exchange.
Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.*/
var NamingSystem = (function (_super) {
    __extends(NamingSystem, _super);
    function NamingSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NamingSystem;
}(DomainResource));
exports.NamingSystem = NamingSystem;
/*The actual content of the media - inline or by direct reference to the media source file.
Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.*/
var Media = (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Media;
}(DomainResource));
exports.Media = Media;
/*The actual content, base64 encoded.
If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.*/
var Binary = (function (_super) {
    __extends(Binary, _super);
    function Binary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Binary;
}(Resource));
exports.Binary = Binary;
/*A collection of times that the Service Site is available.
More detailed availability information may be provided in associated Schedule/Slot resources.*/
var HealthcareService = (function (_super) {
    __extends(HealthcareService, _super);
    function HealthcareService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HealthcareService;
}(DomainResource));
exports.HealthcareService = HealthcareService;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var VisionPrescription = (function (_super) {
    __extends(VisionPrescription, _super);
    function VisionPrescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VisionPrescription;
}(DomainResource));
exports.VisionPrescription = VisionPrescription;
/*The clinical context in which the document was prepared.
These values are primarily added to help with searching for interesting/relevant documents.*/
var DocumentReference = (function (_super) {
    __extends(DocumentReference, _super);
    function DocumentReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DocumentReference;
}(DomainResource));
exports.DocumentReference = DocumentReference;
/*Categorical data indicating that an adverse event is associated in time to an immunization.
A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [[[AllergyIntolerance]]] resource instance as most systems will not query against  past Immunization.reaction elements.*/
var Immunization = (function (_super) {
    __extends(Immunization, _super);
    function Immunization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Immunization;
}(DomainResource));
exports.Immunization = Immunization;
/*Digital Signature - base64 encoded. XML DigSIg or a JWT.
The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.*/
var Bundle = (function (_super) {
    __extends(Bundle, _super);
    function Bundle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bundle;
}(Resource));
exports.Bundle = Bundle;
/*A tag to add to any resource that matches the criteria, after the subscription is processed.
So that other systems can tell which resources have been the subject of a notification.*/
var Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Subscription;
}(DomainResource));
exports.Subscription = Subscription;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var OrderResponse = (function (_super) {
    __extends(OrderResponse, _super);
    function OrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderResponse;
}(DomainResource));
exports.OrderResponse = OrderResponse;
/*Mappings for an individual concept in the source to one or more concepts in the target.
Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.*/
var ConceptMap = (function (_super) {
    __extends(ConceptMap, _super);
    function ConceptMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConceptMap;
}(DomainResource));
exports.ConceptMap = ConceptMap;
/*Type of procedure performed.
For the Procedure.code, LOINC radiology orderables would be a good value set to use.*/
var ImagingStudy = (function (_super) {
    __extends(ImagingStudy, _super);
    function ImagingStudy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImagingStudy;
}(DomainResource));
exports.ImagingStudy = ImagingStudy;
/*A language the practitioner is able to use in patient communication.
The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.*/
var Practitioner = (function (_super) {
    __extends(Practitioner, _super);
    function Practitioner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Practitioner;
}(DomainResource));
exports.Practitioner = Practitioner;
/*Describes the intended objective(s) of carrying out the care plan.
Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.*/
var CarePlan = (function (_super) {
    __extends(CarePlan, _super);
    function CarePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarePlan;
}(DomainResource));
exports.CarePlan = CarePlan;
/*An entity used in this activity.
Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.*/
var Provenance = (function (_super) {
    __extends(Provenance, _super);
    function Provenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Provenance;
}(DomainResource));
exports.Provenance = Provenance;
/*A network address on which the device may be contacted directly.
If the device is running a FHIR server, the network address should  be the root URL from which a conformance statement may be retrieved.*/
var Device = (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Device;
}(DomainResource));
exports.Device = Device;
/*An absolute URI that is the base structure from which this set of constraints is derived.
If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.*/
var StructureDefinition = (function (_super) {
    __extends(StructureDefinition, _super);
    function StructureDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StructureDefinition;
}(DomainResource));
exports.StructureDefinition = StructureDefinition;
/*Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
It is possible for transactions relevant to a coverage period to be posted to the account before or after the coverage period.*/
var FHIRAccount = (function (_super) {
    __extends(FHIRAccount, _super);
    function FHIRAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FHIRAccount;
}(DomainResource));
exports.FHIRAccount = FHIRAccount;
/*Patient this order is about.
May be left blank if the request reference identifies the patient, or if the request is not associated with a patient.*/
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Order;
}(DomainResource));
exports.Order = Order;
/*Identifies medications, devices and any other substance used as part of the procedure.
For devices actually implanted or removed, use Procedure.device.*/
var Procedure = (function (_super) {
    __extends(Procedure, _super);
    function Procedure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Procedure;
}(DomainResource));
exports.Procedure = Procedure;
/*A code (or set of codes) that identify this substance.
This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.*/
var Substance = (function (_super) {
    __extends(Substance, _super);
    function Substance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Substance;
}(DomainResource));
exports.Substance = Substance;
/*A group of questions to a possibly similarly grouped set of questions in the questionnaire response.
The Questionnaire itself has one "root" group with the actual contents of the Questionnaire.*/
var QuestionnaireResponse = (function (_super) {
    __extends(QuestionnaireResponse, _super);
    function QuestionnaireResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QuestionnaireResponse;
}(DomainResource));
exports.QuestionnaireResponse = QuestionnaireResponse;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var DeviceUseRequest = (function (_super) {
    __extends(DeviceUseRequest, _super);
    function DeviceUseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeviceUseRequest;
}(DomainResource));
exports.DeviceUseRequest = DeviceUseRequest;
/*Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
"application/pdf" is recommended as the most reliable and interoperable in this context.*/
var DiagnosticReport = (function (_super) {
    __extends(DiagnosticReport, _super);
    function DiagnosticReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DiagnosticReport;
}(DomainResource));
exports.DiagnosticReport = DiagnosticReport;
/*A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) should be marked as "primary". Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).*/
var Medication = (function (_super) {
    __extends(Medication, _super);
    function Medication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Medication;
}(DomainResource));
exports.Medication = Medication;
/*The actual data of the message - a reference to the root/focus class of the event.
The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.*/
var MessageHeader = (function (_super) {
    __extends(MessageHeader, _super);
    function MessageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageHeader;
}(DomainResource));
exports.MessageHeader = MessageHeader;
/*Identifier assigned by the dispensing facility when the item(s) is dispensed.
This is assigned by the dispenser, and used to refer to this order in other external standards.*/
var SupplyDelivery = (function (_super) {
    __extends(SupplyDelivery, _super);
    function SupplyDelivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SupplyDelivery;
}(DomainResource));
exports.SupplyDelivery = SupplyDelivery;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Schedule = (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Schedule;
}(DomainResource));
exports.Schedule = Schedule;
/*Related identifiers or resources associated with the DocumentManifest.
May be identifiers or resources that caused the DocumentManifest to be created.*/
var DocumentManifest = (function (_super) {
    __extends(DocumentManifest, _super);
    function DocumentManifest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DocumentManifest;
}(DomainResource));
exports.DocumentManifest = DocumentManifest;
/*Defines the structure, type, allowed values and other constraining characteristics of the data element.
For simple data types there will only be one repetition.  For complex data types, multiple repetitions will be present defining a nested structure using the "path" element.*/
var DataElement = (function (_super) {
    __extends(DataElement, _super);
    function DataElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataElement;
}(DomainResource));
exports.DataElement = DataElement;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var EligibilityRequest = (function (_super) {
    __extends(EligibilityRequest, _super);
    function EligibilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EligibilityRequest;
}(DomainResource));
exports.EligibilityRequest = EligibilityRequest;
/*Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
If only a code is specified, then it needs to be a code for a specific product.  If more information is required, then the use of the medication resource is recommended.  Note: do not use Medication.name to describe the administered medication. When the only available information is a text description of the medication, Medication.code.text should be used.*/
var MedicationAdministration = (function (_super) {
    __extends(MedicationAdministration, _super);
    function MedicationAdministration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MedicationAdministration;
}(DomainResource));
exports.MedicationAdministration = MedicationAdministration;
/*List of locations where  the patient has been during this encounter.
Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".*/
var Encounter = (function (_super) {
    __extends(Encounter, _super);
    function Encounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Encounter;
}(DomainResource));
exports.Encounter = Encounter;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var PaymentReconciliation = (function (_super) {
    __extends(PaymentReconciliation, _super);
    function PaymentReconciliation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaymentReconciliation;
}(DomainResource));
exports.PaymentReconciliation = PaymentReconciliation;
/*Variable is set based either on element value in response body or on header field value in the response headers.
Variables would be set based either on XPath/JsonPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.*/
var TestScript = (function (_super) {
    __extends(TestScript, _super);
    function TestScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestScript;
}(DomainResource));
exports.TestScript = TestScript;
/*If the list is empty, why the list is empty.
The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.*/
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return List;
}(DomainResource));
exports.List = List;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var DeviceUseStatement = (function (_super) {
    __extends(DeviceUseStatement, _super);
    function DeviceUseStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeviceUseStatement;
}(DomainResource));
exports.DeviceUseStatement = DeviceUseStatement;
/*The parameters for the operation/query.
Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.*/
var OperationDefinition = (function (_super) {
    __extends(OperationDefinition, _super);
    function OperationDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperationDefinition;
}(DomainResource));
exports.OperationDefinition = OperationDefinition;
/*Study identity and locating information of the DICOM SOP instances in the selection.
Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierachical identification of the instances.*/
var ImagingObjectSelection = (function (_super) {
    __extends(ImagingObjectSelection, _super);
    function ImagingObjectSelection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImagingObjectSelection;
}(DomainResource));
exports.ImagingObjectSelection = ImagingObjectSelection;
/*Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.
Note that this should not duplicate the goal status.*/
var Goal = (function (_super) {
    __extends(Goal, _super);
    function Goal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Goal;
}(DomainResource));
exports.Goal = Goal;
/*An XPath expression that returns a set of elements for the search parameter.
Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.*/
var SearchParameter = (function (_super) {
    __extends(SearchParameter, _super);
    function SearchParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchParameter;
}(DomainResource));
exports.SearchParameter = SearchParameter;
/*This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patientΓÇÖs diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
Information on a patient's food allergies and intolerances, and preferences inform healthcare personnel about the type  of foods that the patient should receive or consume.*/
var NutritionOrder = (function (_super) {
    __extends(NutritionOrder, _super);
    function NutritionOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NutritionOrder;
}(DomainResource));
exports.NutritionOrder = NutritionOrder;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var ClaimResponse = (function (_super) {
    __extends(ClaimResponse, _super);
    function ClaimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClaimResponse;
}(DomainResource));
exports.ClaimResponse = ClaimResponse;
/*The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.*/
var ReferralRequest = (function (_super) {
    __extends(ReferralRequest, _super);
    function ReferralRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReferralRequest;
}(DomainResource));
exports.ReferralRequest = ReferralRequest;
/*This a list of the general problems/conditions for a patient.
e.g. The patient is a pregnant, and cardiac congestive failure, ΓÇÄAdenocarcinoma, and is allergic to penicillin.*/
var ClinicalImpression = (function (_super) {
    __extends(ClinicalImpression, _super);
    function ClinicalImpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClinicalImpression;
}(DomainResource));
exports.ClinicalImpression = ClinicalImpression;
/*Description of anatomical location.
This Description  could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.*/
var BodySite = (function (_super) {
    __extends(BodySite, _super);
    function BodySite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BodySite;
}(DomainResource));
exports.BodySite = BodySite;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Flag = (function (_super) {
    __extends(Flag, _super);
    function Flag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Flag;
}(DomainResource));
exports.Flag = Flag;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var CommunicationRequest = (function (_super) {
    __extends(CommunicationRequest, _super);
    function CommunicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommunicationRequest;
}(DomainResource));
exports.CommunicationRequest = CommunicationRequest;
/*The category of claim this is.
Affects which fields and value sets are used.*/
var Claim = (function (_super) {
    __extends(Claim, _super);
    function Claim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Claim;
}(DomainResource));
exports.Claim = Claim;
/*Describes the expected outcome for the subject.
Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.*/
var RiskAssessment = (function (_super) {
    __extends(RiskAssessment, _super);
    function RiskAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RiskAssessment;
}(DomainResource));
exports.RiskAssessment = RiskAssessment;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var EnrollmentRequest = (function (_super) {
    __extends(EnrollmentRequest, _super);
    function EnrollmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnrollmentRequest;
}(DomainResource));
exports.EnrollmentRequest = EnrollmentRequest;
/*The organization responsible for the provisioning and upkeep of the location.
This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.*/
var FHIRLocation = (function (_super) {
    __extends(FHIRLocation, _super);
    function FHIRLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FHIRLocation;
}(DomainResource));
exports.FHIRLocation = FHIRLocation;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var ExplanationOfBenefit = (function (_super) {
    __extends(ExplanationOfBenefit, _super);
    function ExplanationOfBenefit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExplanationOfBenefit;
}(DomainResource));
exports.ExplanationOfBenefit = ExplanationOfBenefit;
/*Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the Substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.*/
var AllergyIntolerance = (function (_super) {
    __extends(AllergyIntolerance, _super);
    function AllergyIntolerance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AllergyIntolerance;
}(DomainResource));
exports.AllergyIntolerance = AllergyIntolerance;
/*Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).*/
var Observation = (function (_super) {
    __extends(Observation, _super);
    function Observation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Observation;
}(DomainResource));
exports.Observation = Observation;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var Contract = (function (_super) {
    __extends(Contract, _super);
    function Contract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Contract;
}(DomainResource));
exports.Contract = Contract;
/*A contact detail for the person, e.g. a telephone number or an email address.
Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.*/
var RelatedPerson = (function (_super) {
    __extends(RelatedPerson, _super);
    function RelatedPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RelatedPerson;
}(DomainResource));
exports.RelatedPerson = RelatedPerson;
/*Identifies the patient, practitioner, device or any other resource that is the "focus" of this resource.
Optional as not all resources potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.*/
var Basic = (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Basic;
}(DomainResource));
exports.Basic = Basic;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var ProcessResponse = (function (_super) {
    __extends(ProcessResponse, _super);
    function ProcessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProcessResponse;
}(DomainResource));
exports.ProcessResponse = ProcessResponse;
/*Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
The parent specimen could be the source from which the┬ácurrent specimen is derived by┬ásome processing step┬á(e.g. an┬áaliquot or┬áisolate┬áor extracted nucleic acids┬áfrom clinical┬ásamples)┬áor┬áone of many specimens that┬áwere combined┬áto create a pooled sample.*/
var Specimen = (function (_super) {
    __extends(Specimen, _super);
    function Specimen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Specimen;
}(DomainResource));
exports.Specimen = Specimen;
/*Specific instances of data or objects that have been accessed.
Required unless the values for Event Identification, Active Participant Identification, and Audit Source Identification are sufficient to document the entire auditable event. Because events may have more than one participant object, this group can be a repeating set of values.*/
var AuditEvent = (function (_super) {
    __extends(AuditEvent, _super);
    function AuditEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuditEvent;
}(DomainResource));
exports.AuditEvent = AuditEvent;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var EnrollmentResponse = (function (_super) {
    __extends(EnrollmentResponse, _super);
    function EnrollmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnrollmentResponse;
}(DomainResource));
exports.EnrollmentResponse = EnrollmentResponse;
/*The item that is requested to be supplied.
Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.*/
var SupplyRequest = (function (_super) {
    __extends(SupplyRequest, _super);
    function SupplyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SupplyRequest;
}(DomainResource));
exports.SupplyRequest = SupplyRequest;
/*Link to another patient resource that concerns the same actual patient.
There is no assumption that linked patient records have mutual links.*/
var Patient = (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Patient;
}(DomainResource));
exports.Patient = Patient;
/*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.*/
var EligibilityResponse = (function (_super) {
    __extends(EligibilityResponse, _super);
    function EligibilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EligibilityResponse;
}(DomainResource));
exports.EligibilityResponse = EligibilityResponse;
/*Indicates how the medication is to be used by the patient.
When the dose or rate is intended to change over the entire administration period, e.g. Tapering dose prescriptions, multiple instances of dosage instructions will need to be supplied to convey the different doses/rates. Another common example in institutional settings is 'titration' of an IV medication dose to maintain a specific stated hemodynamic value or range e.g. drug x to be administered to maintain AM (arterial mean) greater than 65.*/
var MedicationOrder = (function (_super) {
    __extends(MedicationOrder, _super);
    function MedicationOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MedicationOrder;
}(DomainResource));
exports.MedicationOrder = MedicationOrder;
/*One or more addresses for the person.
Person may have multiple addresses with different uses or applicable periods.*/
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Person;
}(DomainResource));
exports.Person = Person;
/*The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
There would always be at least one item in normal usage, but this is optional so that a workflow can quote order details without having to list the items.*/
var DiagnosticOrder = (function (_super) {
    __extends(DiagnosticOrder, _super);
    function DiagnosticOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DiagnosticOrder;
}(DomainResource));
exports.DiagnosticOrder = DiagnosticOrder;

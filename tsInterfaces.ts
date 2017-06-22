
export class fhirElement  {
	resourceType: string;
	id: string;
	extension:Extension;
}
export class Period extends fhirElement{
	value:fhirElement;
	id:string;
	extension:Extension;
	start:Date;
	end:Date;
}

export class Coding extends fhirElement {
	end:fhirElement;
	id:string;
	extension:Extension;
	system:string;
	version:string;
	code:string;
	display:string;
	userSelected:boolean;
}

export class FHIRRange extends fhirElement{
	userSelected:fhirElement;
	id:string;
	extension:Extension;
	low:Quantity;
	high:Quantity;
}

export class Quantity extends fhirElement{
	high:fhirElement;
	id:string;
	extension:Extension;
	value:number;
	comparator:string;
	unit:string;
	system:string;
	code:string;
}

export class Attachment extends fhirElement{
	code:fhirElement;
	id:string;
	extension:Extension;
	contentType:string;
	language:string;
	data:string;
	url:string;
	size:number;
	hash:string;
	title:string;
	creation:Date;
}

export class Ratio extends fhirElement{
	creation:fhirElement;
	id:string;
	extension:Extension;
	numerator:Quantity;
	denominator:Quantity;
}

export class Annotation extends fhirElement{
	denominator:fhirElement;
	id:string;
	extension:Extension;
	authorX:Reference;
	time:Date;
	text:string;
}

export class SampledData extends fhirElement{
	text:fhirElement;
	id:string;
	extension:Extension;
	origin:Quantity;
	period:number;
	factor:number;
	lowerLimit:number;
	upperLimit:number;
	dimensions:number;
	data:string;
}

export class Reference extends fhirElement{
	data:fhirElement;
	id:string;
	extension:Extension;
	reference:string;
	display:string;
}

export class CodeableConcept extends fhirElement{
	display:fhirElement;
	id:string;
	extension:Extension;
	coding:Coding;
	text:string;
}

export class Identifier extends fhirElement{
	text:fhirElement;
	id:string;
	extension:Extension;
	use:string;
	type:CodeableConcept;
	system:string;
	value:string;
	period:Period;
	assigner:Reference;
}

export class Signature extends fhirElement{
	assigner:fhirElement;
	id:string;
	extension:Extension;
	type:Coding;
	when:string;
	whoX:string;
	contentType:string;
	blob:string;
}

export class fhirElementDefinition extends fhirElement{
	blob:fhirElement;
	id:string;
	extension:Extension;
	path:string;
	representation:string;
	name:string;
	label:string;
	code:Coding;
	slicing:fhirElement;
	short:string;
	definition:string;
	comments:string;
	requirements:string;
	alias:string;
	min:number;
	max:string;
	base:fhirElement;
	type:fhirElement;
	nameReference:string;
	defaultValueX:boolean;
	meaningWhenMissing:string;
	fixedX:boolean;
	patternX:boolean;
	exampleX:boolean;
	minValueX:boolean;
	maxValueX:boolean;
	maxLength:number;
	condition:string;
	constraint:fhirElement;
	mustSupport:boolean;
	isModifier:boolean;
	isSummary:boolean;
	binding:fhirElement;
	mapping:fhirElement;
}

export class Timing extends fhirElement{
	mapping:fhirElement;
	id:string;
	extension:Extension;
	event:Date;
	repeat:fhirElement;
	code:CodeableConcept;
}

export class Address extends fhirElement{
	code:fhirElement;
	id:string;
	extension:Extension;
	use:string;
	type:string
	text:string;
	line:string;
	city:string;
	district:string;
	state:string;
	postalCode:string;
	country:string;
	period:Period;
}

export class HumanName extends fhirElement{
	
	id:string;
	extension:Extension;
	use:string;
	text:string;
	family:string;
	given:string;
	prefix:string;
	suffix:string;
	period:Period;
}

export class Meta extends fhirElement{
	period:fhirElement;
	id:string;
	extension:Extension;
	versionId:string;
	lastUpdated:string;
	profile:string;
	security:Coding;
	tag:Coding;
}

export class ContactPoint extends fhirElement{
	tag:fhirElement;
	id:string;
	extension:Extension;
	system:string;
	value:string;
	use:string;
	rank:number;
	period:Period;
}

export class Extension extends fhirElement{
	period:fhirElement;
	id:string;
	extension:Extension;
	url:string;
	valueX:boolean;
}

export class BackbonefhirElement extends fhirElement{
	valueX:fhirElement;
	id:string;
	extension:Extension;
	modifierExtension:Extension;
}

export class Narrative extends fhirElement{
	modifierExtension:fhirElement;
	id:string;
	extension:Extension;
	status:string;
	div:string;
}

export class Resource {
	resourceType: string;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
}

export class Parameters extends Resource{
	extension:Resource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	parameter:BackbonefhirElement;
}



export class DomainResource extends Resource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
}

export class Condition extends DomainResource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	patient:Reference;
	encounter:Reference;
	asserter:Reference;
	dateRecorded:Date;
	code:CodeableConcept;
	category:CodeableConcept;
	clinicalStatus:string;
	verificationStatus:string;
	severity:CodeableConcept;
	onsetX:Date;
	abatementX:Date;
	stage:BackbonefhirElement;
	evidence:BackbonefhirElement;
	bodySite:CodeableConcept;
	notes:string;
}

export class ProcedureRequest extends DomainResource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	subject:Reference;
	code:CodeableConcept;
	bodySite:CodeableConcept;
	reasonX:CodeableConcept;
	scheduledX:Date;
	encounter:Reference;
	performer:Reference;
	status:string;
	notes:Annotation;
	asNeededX:boolean;
	orderedOn:Date;
	orderer:Reference;
	priority:string;
}

export class DeviceComponent extends DomainResource{
	priority:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	type:CodeableConcept;
	identifier:Identifier;
	lastSystemChange:string;
	source:Reference;
	parent:Reference;
	operationalStatus:CodeableConcept;
	parameterGroup:CodeableConcept;
	measurementPrinciple:string;
	productionSpecification:BackbonefhirElement;
	languageCode:CodeableConcept;
}

export class DeviceMetric extends DomainResource{
	languageCode:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	type:CodeableConcept;
	identifier:Identifier;
	unit:CodeableConcept;
	source:Reference;
	parent:Reference;
	operationalStatus:string;
	color:string;
	category:string;
	measurementPeriod:Timing;
	calibration:BackbonefhirElement;
}

export class Communication extends DomainResource{
	calibration:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	category:CodeableConcept;
	sender:Reference;
	recipient:Reference;
	payload:BackbonefhirElement;
	medium:CodeableConcept;
	status:string;
	encounter:Reference;
	sent:Date;
	received:Date;
	reason:CodeableConcept;
	subject:Reference;
	requestDetail:Reference;
}

export class Organization extends DomainResource{
	requestDetail:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	active:boolean;
	type:CodeableConcept;
	name:string;
	telecom:ContactPoint;
	address:Address;
	partOf:Reference;
	contact:BackbonefhirElement;
}

export class ProcessRequest extends DomainResource{
	contact:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	action:string;
	identifier:Identifier;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	target:Reference;
	provider:Reference;
	organization:Reference;
	request:Reference;
	response:Reference;
	nullify:boolean;
	reference:string;
	item:BackbonefhirElement;
	include:string;
	exclude:string;
	period:Period;
}

export class Group extends DomainResource{
	period:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	type:string;
	actual:boolean;
	code:CodeableConcept;
	name:string;
	quantity:number;
	characteristic:BackbonefhirElement;
	member:BackbonefhirElement;
}

export class ValueSet extends DomainResource{
	member:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	identifier:Identifier;
	version:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	lockedDate:Date;
	description:string;
	useContext:CodeableConcept;
	immutable:boolean;
	requirements:string;
	copyright:string;
	extensible:boolean;
	codeSystem:BackbonefhirElement;
	compose:BackbonefhirElement;
	expansion:BackbonefhirElement;
}

export class Coverage extends DomainResource{
	expansion:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	issuer:Reference;
	bin:Identifier;
	period:Period;
	type:Coding;
	subscriberId:Identifier;
	identifier:Identifier;
	group:string;
	plan:string;
	subPlan:string;
	dependent:number;
	sequence:number;
	subscriber:Reference;
	network:Identifier;
	contract:Reference;
}

export class ImmunizationRecommendation extends DomainResource{
	contract:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	patient:Reference;
	recommendation:BackbonefhirElement;
}

export class Appointment extends DomainResource{
	recommendation:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	type:CodeableConcept;
	reason:CodeableConcept;
	priority:number;
	description:string;
	start:string;
	end:string;
	minutesDuration:number;
	slot:Reference;
	comment:string;
	participant:BackbonefhirElement;
}

export class MedicationDispense extends DomainResource{
	participant:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	patient:Reference;
	dispenser:Reference;
	authorizingPrescription:Reference;
	type:CodeableConcept;
	quantity:Quantity;
	daysSupply:Quantity;
	medicationX:CodeableConcept;
	whenPrepared:Date;
	whenHandedOver:Date;
	destination:Reference;
	receiver:Reference;
	note:string;
	dosageInstruction:BackbonefhirElement;
	substitution:BackbonefhirElement;
}

export class DetectedIssue extends DomainResource{
	substitution:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	patient:Reference;
	category:CodeableConcept;
	severity:string;
	implicated:Reference;
	detail:string;
	date:Date;
	author:Reference;
	identifier:Identifier;
	reference:string;
	mitigation:BackbonefhirElement;
}

export class Slot extends DomainResource{
	mitigation:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	type:CodeableConcept;
	schedule:Reference;
	freeBusyType:string;
	start:string;
	end:string;
	overbooked:boolean;
	comment:string;
}

export class PaymentNotice extends DomainResource{
	comment:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	target:Reference;
	provider:Reference;
	organization:Reference;
	request:Reference;
	response:Reference;
	paymentStatus:Coding;
}

export class AppointmentResponse extends DomainResource{
	paymentStatus:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	appointment:Reference;
	start:string;
	end:string;
	participantType:CodeableConcept;
	actor:Reference;
	participantStatus:string;
	comment:string;
}

export class MedicationStatement extends DomainResource{
	comment:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	patient:Reference;
	informationSource:Reference;
	dateAsserted:Date;
	status:string;
	wasNotTaken:boolean;
	reasonNotTaken:CodeableConcept;
	reasonForUseX:CodeableConcept;
	effectiveX:Date;
	note:string;
	supportingInformation:Reference;
	medicationX:CodeableConcept;
	dosage:BackbonefhirElement;
}

export class ImplementationGuide extends DomainResource{
	dosage:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	version:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	useContext:CodeableConcept;
	copyright:string;
	fhirVersion:string;
	dependency:BackbonefhirElement;
	package:BackbonefhirElement;
	global:BackbonefhirElement;
	binary:string;
	page:BackbonefhirElement;
}

export class EpisodeOfCare extends DomainResource{
	page:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	statusHistory:BackbonefhirElement;
	type:CodeableConcept;
	condition:Reference;
	patient:Reference;
	managingOrganization:Reference;
	period:Period;
	referralRequest:Reference;
	careManager:Reference;
	careTeam:BackbonefhirElement;
}

export class Questionnaire extends DomainResource{
	careTeam:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	version:string;
	status:string;
	date:Date;
	publisher:string;
	telecom:ContactPoint;
	subjectType:string;
	group:BackbonefhirElement;
}

export class Composition extends DomainResource{
	group:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	date:Date;
	type:CodeableConcept;
	class :CodeableConcept;
	title:string;
	status:string;
	confidentiality:string;
	subject:Reference;
	author:Reference;
	attester:BackbonefhirElement;
	custodian:Reference;
	event:BackbonefhirElement;
	encounter:Reference;
	section:BackbonefhirElement;
}

export class OperationOutcome extends DomainResource{
	section:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	issue:BackbonefhirElement;
}

export class Conformance extends DomainResource{
	issue:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	version:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	requirements:string;
	copyright:string;
	kind:string;
	software:BackbonefhirElement;
	implementation:BackbonefhirElement;
	fhirVersion:string;
	acceptUnknown:string;
	format:string;
	profile:Reference;
	rest:BackbonefhirElement;
	messaging:BackbonefhirElement;
	document:BackbonefhirElement;
}

export class FamilyMemberHistory extends DomainResource{
	document:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	patient:Reference;
	date:Date;
	status:string;
	name:string;
	relationship:CodeableConcept;
	gender:string;
	bornX:Period;
	ageX:Quantity;
	deceasedX:boolean;
	note:Annotation;
	condition:BackbonefhirElement;
}

export class NamingSystem extends DomainResource{
	condition:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	name:string;
	status:string;
	kind:string;
	publisher:string;
	contact:BackbonefhirElement;
	responsible:string;
	date:Date;
	type:CodeableConcept;
	description:string;
	useContext:CodeableConcept;
	usage:string;
	uniqueId:BackbonefhirElement;
	replacedBy:Reference;
}

export class Media extends DomainResource{
	replacedBy:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	type:string;
	subtype:CodeableConcept;
	identifier:Identifier;
	subject:Reference;
	operator:Reference;
	view:CodeableConcept;
	deviceName:string;
	height:number;
	width:number;
	frames:number;
	duration:number;
	content:Attachment;
}

export class Binary extends Resource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	contentType:string;
	content:string;
}

export class HealthcareService extends DomainResource{
	content:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	providedBy:Reference;
	serviceCategory:CodeableConcept;
	serviceType:BackbonefhirElement;
	location:Reference;
	serviceName:string;
	comment:string;
	extraDetails:string;
	photo:Attachment;
	telecom:ContactPoint;
	coverageArea:Reference;
	serviceProvisionCode:CodeableConcept;
	eligibility:CodeableConcept;
	eligibilityNote:string;
	programName:string;
	characteristic:CodeableConcept;
	referralMethod:CodeableConcept;
	publicKey:string;
	appointmentRequired:boolean;
	availableTime:BackbonefhirElement;
	notAvailable:BackbonefhirElement;
	availabilityExceptions:string;
}

export class VisionPrescription extends DomainResource{
	availabilityExceptions:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	dateWritten:Date;
	patient:Reference;
	prescriber:Reference;
	encounter:Reference;
	reasonX:CodeableConcept;
	dispense:BackbonefhirElement;
}

export class DocumentReference extends DomainResource{
	dispense:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	masterIdentifier:Identifier;
	identifier:Identifier;
	subject:Reference;
	type:CodeableConcept;
	class :CodeableConcept;
	author:Reference;
	custodian:Reference;
	authenticator:Reference;
	created:Date;
	indexed:string;
	status:string;
	docStatus:CodeableConcept;
	relatesTo:BackbonefhirElement;
	description:string;
	securityLabel:CodeableConcept;
	content:BackbonefhirElement;
	context:BackbonefhirElement;
}

export class Immunization extends DomainResource{
	context:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	date:Date;
	vaccineCode:CodeableConcept;
	patient:Reference;
	wasNotGiven:boolean;
	reported:boolean;
	performer:Reference;
	requester:Reference;
	encounter:Reference;
	manufacturer:Reference;
	location:Reference;
	lotNumber:string;
	expirationDate:Date;
	site:CodeableConcept;
	route:CodeableConcept;
	doseQuantity:Quantity;
	note:Annotation;
	explanation:BackbonefhirElement;
	reaction:BackbonefhirElement;
	vaccinationProtocol:BackbonefhirElement;
}

export class Bundle extends Resource{
	vaccinationProtocol:Resource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	type:string;
	total:number;
	link:BackbonefhirElement;
	entry:BackbonefhirElement;
	signature:Signature;
}

export class Subscription extends DomainResource{
	signature:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	criteria:string;
	contact:ContactPoint;
	reason:string;
	status:string;
	error:string;
	channel:BackbonefhirElement;
	end:string;
	tag:Coding;
}

export class OrderResponse extends DomainResource{
	tag:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	date:Date;
	who:Reference;
	orderStatus:string;
	description:string;
	fulfillment:Reference;
}

export class ConceptMap extends DomainResource{
	fulfillment:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	identifier:Identifier;
	version:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	useContext:CodeableConcept;
	requirements:string;
	copyright:string;
	sourceX:string;
	targetX:string;
	fhirElement:BackbonefhirElement;
}

export class ImagingStudy extends DomainResource{
	fhirElement:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	started:Date;
	patient:Reference;
	uid:string;
	accession:Identifier;
	identifier:Identifier;
	order:Reference;
	modalityList:Coding;
	referrer:Reference;
	availability:string;
	url:string;
	numberOfSeries:number;
	numberOfInstances:number;
	procedure:Reference;
	interpreter:Reference;
	description:string;
	series:BackbonefhirElement;
}

export class Practitioner extends DomainResource{
	series:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	active:boolean;
	name:HumanName;
	telecom:ContactPoint;
	address:Address;
	gender:string;
	birthDate:Date;
	photo:Attachment;
	practitionerRole:BackbonefhirElement;
	qualification:BackbonefhirElement;
	communication:CodeableConcept;
}

export class CarePlan extends DomainResource{
	communication:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	subject:Reference;
	status:string;
	context:Reference;
	period:Period;
	author:Reference;
	modified:Date;
	category:CodeableConcept;
	description:string;
	addresses:Reference;
	support:Reference;
	relatedPlan:BackbonefhirElement;
	participant:BackbonefhirElement;
	goal:Reference;
	activity:BackbonefhirElement;
	note:Annotation;
}

export class Provenance extends DomainResource{
	note:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	target:Reference;
	period:Period;
	recorded:string;
	reason:CodeableConcept;
	activity:CodeableConcept;
	location:Reference;
	policy:string;
	agent:BackbonefhirElement;
	entity:BackbonefhirElement;
	signature:Signature;
}

export class Device extends DomainResource{
	signature:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	type:CodeableConcept;
	note:Annotation;
	status:string;
	manufacturer:string;
	model:string;
	version:string;
	manufactureDate:Date;
	expiry:Date;
	udi:string;
	lotNumber:string;
	owner:Reference;
	location:Reference;
	patient:Reference;
	contact:ContactPoint;
	url:string;
}

export class StructureDefinition extends DomainResource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	identifier:Identifier;
	version:string;
	name:string;
	display:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	useContext:CodeableConcept;
	requirements:string;
	copyright:string;
	code:Coding;
	fhirVersion:string;
	mapping:BackbonefhirElement;
	kind:string;
	constrainedType:string;
	abstract:boolean;
	contextType:string;
	context:string;
	base:string;
	snapshot:BackbonefhirElement;
	differential:BackbonefhirElement;
}

export class FHIRAccount extends DomainResource{
	differential:DomainResource;
	id: string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	name:string;
	type:CodeableConcept;
	status:string;
	activePeriod:Period;
	currency:Coding;
	balance:Quantity;
	coveragePeriod:Period;
	subject:Reference;
	owner:Reference;
	description:string;
}

export class Order extends DomainResource{
	description:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	date:Date;
	subject:Reference;
	source:Reference;
	target:Reference;
	reasonX:CodeableConcept;
	when:BackbonefhirElement;
	detail:Reference;
}

export class Procedure extends DomainResource{
	detail:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	subject:Reference;
	status:string;
	category:CodeableConcept;
	code:CodeableConcept;
	notPerformed:boolean;
	reasonNotPerformed:CodeableConcept;
	bodySite:CodeableConcept;
	reasonX:CodeableConcept;
	performer:BackbonefhirElement;
	performedX:Date;
	encounter:Reference;
	location:Reference;
	outcome:CodeableConcept;
	report:Reference;
	complication:CodeableConcept;
	followUp:CodeableConcept;
	request:Reference;
	notes:Annotation;
	focalDevice:BackbonefhirElement;
	used:Reference;
}

export class Substance extends DomainResource{
	used:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	category:CodeableConcept;
	code:CodeableConcept;
	description:string;
	instance:BackbonefhirElement;
	ingredient:BackbonefhirElement;
}

export class QuestionnaireResponse extends DomainResource{
	ingredient:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	questionnaire:Reference;
	status:string;
	subject:Reference;
	author:Reference;
	authored:Date;
	source:Reference;
	encounter:Reference;
	group:BackbonefhirElement;
}

export class DeviceUseRequest extends DomainResource{
	group:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	bodySiteX:CodeableConcept;
	status:string;
	device:Reference;
	encounter:Reference;
	identifier:Identifier;
	indication:CodeableConcept;
	notes:string;
	prnReason:CodeableConcept;
	orderedOn:Date;
	recordedOn:Date;
	subject:Reference;
	timingX:Timing;
	priority:string;
}

export class DiagnosticReport extends DomainResource{
	priority:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	category:CodeableConcept;
	code:CodeableConcept;
	subject:Reference;
	encounter:Reference;
	effectiveX:Date;
	issued:string;
	performer:Reference;
	request:Reference;
	specimen:Reference;
	result:Reference;
	imagingStudy:Reference;
	image:BackbonefhirElement;
	conclusion:string;
	codedDiagnosis:CodeableConcept;
	presentedForm:Attachment;
}

export class Medication extends DomainResource{
	presentedForm:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	code:CodeableConcept;
	isBrand:boolean;
	manufacturer:Reference;
	product:BackbonefhirElement;
	package:BackbonefhirElement;
}

export class MessageHeader extends DomainResource{
	package:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	timestamp:string;
	event:Coding;
	response:BackbonefhirElement;
	source:BackbonefhirElement;
	destination:BackbonefhirElement;
	enterer:Reference;
	author:Reference;
	receiver:Reference;
	responsible:Reference;
	reason:CodeableConcept;
	data:Reference;
}

export class SupplyDelivery extends DomainResource{
	data:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	patient:Reference;
	type:CodeableConcept;
	quantity:Quantity;
	suppliedItem:Reference;
	supplier:Reference;
	whenPrepared:Period;
	time:Date;
	destination:Reference;
	receiver:Reference;
}

export class Schedule extends DomainResource{
	receiver:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	type:CodeableConcept;
	actor:Reference;
	planningHorizon:Period;
	comment:string;
}

export class DocumentManifest extends DomainResource{
	comment:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	masterIdentifier:Identifier;
	identifier:Identifier;
	subject:Reference;
	recipient:Reference;
	type:CodeableConcept;
	author:Reference;
	created:Date;
	source:string;
	status:string;
	description:string;
	content:BackbonefhirElement;
	related:BackbonefhirElement;
}

export class DatafhirElement extends DomainResource{
	related:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	identifier:Identifier;
	version:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	useContext:CodeableConcept;
	copyright:string;
	stringency:string;
	mapping:BackbonefhirElement;
	fhirElement:fhirElementDefinition;
}

export class EligibilityRequest extends DomainResource{
	fhirElement:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	target:Reference;
	provider:Reference;
	organization:Reference;
}

export class MedicationAdministration extends DomainResource{
	organization:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	patient:Reference;
	practitioner:Reference;
	encounter:Reference;
	prescription:Reference;
	wasNotGiven:boolean;
	reasonNotGiven:CodeableConcept;
	reasonGiven:CodeableConcept;
	effectiveTimeX:Date;
	medicationX:CodeableConcept;
	device:Reference;
	note:string;
	dosage:BackbonefhirElement;
}

export class Encounter extends DomainResource{
	dosage:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	statusHistory:BackbonefhirElement;
	class :string;
	type:CodeableConcept;
	priority:CodeableConcept;
	patient:Reference;
	episodeOfCare:Reference;
	incomingReferral:Reference;
	participant:BackbonefhirElement;
	appointment:Reference;
	period:Period;
	length:Quantity;
	reason:CodeableConcept;
	indication:Reference;
	hospitalization:BackbonefhirElement;
	location:BackbonefhirElement;
	serviceProvider:Reference;
	partOf:Reference;
}

export class PaymentReconciliation extends DomainResource{
	partOf:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	outcome:string;
	disposition:string;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	period:Period;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
	detail:BackbonefhirElement;
	form:Coding;
	total:Quantity;
	note:BackbonefhirElement;
}

export class TestScript extends DomainResource{
	note:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	version:string;
	name:string;
	status:string;
	identifier:Identifier;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	useContext:CodeableConcept;
	requirements:string;
	copyright:string;
	metadata:BackbonefhirElement;
	multiserver:boolean;
	fixture:BackbonefhirElement;
	profile:Reference;
	variable:BackbonefhirElement;
	setup:BackbonefhirElement;
	test:BackbonefhirElement;
	teardown:BackbonefhirElement;
}

export class List extends DomainResource{
	teardown:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	title:string;
	code:CodeableConcept;
	subject:Reference;
	source:Reference;
	encounter:Reference;
	status:string;
	date:Date;
	orderedBy:CodeableConcept;
	mode:string;
	note:string;
	entry:BackbonefhirElement;
	emptyReason:CodeableConcept;
}

export class DeviceUseStatement extends DomainResource{
	emptyReason:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	bodySiteX:CodeableConcept;
	whenUsed:Period;
	device:Reference;
	identifier:Identifier;
	indication:CodeableConcept;
	notes:string;
	recordedOn:Date;
	subject:Reference;
	timingX:Timing;
}

export class OperationDefinition extends DomainResource{
	timingX:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	version:string;
	name:string;
	status:string;
	kind:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	description:string;
	requirements:string;
	idempotent:boolean;
	code:string;
	notes:string;
	base:Reference;
	system:boolean;
	type:string;
	instance:boolean;
	parameter:BackbonefhirElement;
}

export class ImagingObjectSelection extends DomainResource{
	parameter:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	uid:string;
	patient:Reference;
	title:CodeableConcept;
	description:string;
	author:Reference;
	authoringTime:Date;
	study:BackbonefhirElement;
}

export class Goal extends DomainResource{
	study:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	subject:Reference;
	startX:Date;
	targetX:Date;
	category:CodeableConcept;
	description:string;
	status:string;
	statusDate:Date;
	statusReason:CodeableConcept;
	author:Reference;
	priority:CodeableConcept;
	addresses:Reference;
	note:Annotation;
	outcome:BackbonefhirElement;
}

export class SearchParameter extends DomainResource{
	outcome:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	url:string;
	name:string;
	status:string;
	experimental:boolean;
	publisher:string;
	contact:BackbonefhirElement;
	date:Date;
	requirements:string;
	code:string;
	base:string;
	type:string;
	description:string;
	xpath:string;
	xpathUsage:string;
	target:string;
}

export class NutritionOrder extends DomainResource{
	target:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	patient:Reference;
	orderer:Reference;
	identifier:Identifier;
	encounter:Reference;
	dateTime:Date;
	status:string;
	allergyIntolerance:Reference;
	foodPreferenceModifier:CodeableConcept;
	excludeFoodModifier:CodeableConcept;
	oralDiet:BackbonefhirElement;
	supplement:BackbonefhirElement;
	enteralFormula:BackbonefhirElement;
}

export class ClaimResponse extends DomainResource{
	enteralFormula:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
	outcome:string;
	disposition:string;
	payeeType:Coding;
	item:BackbonefhirElement;
	addItem:BackbonefhirElement;
	error:BackbonefhirElement;
	totalCost:Quantity;
	unallocDeductable:Quantity;
	totalBenefit:Quantity;
	paymentAdjustment:Quantity;
	paymentAdjustmentReason:Coding;
	paymentDate:Date;
	paymentAmount:Quantity;
	paymentRef:Identifier;
	reserved:Coding;
	form:Coding;
	note:BackbonefhirElement;
	coverage:BackbonefhirElement;
}

export class ReferralRequest extends DomainResource{
	coverage:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	status:string;
	identifier:Identifier;
	date:Date;
	type:CodeableConcept;
	specialty:CodeableConcept;
	priority:CodeableConcept;
	patient:Reference;
	requester:Reference;
	recipient:Reference;
	encounter:Reference;
	dateSent:Date;
	reason:CodeableConcept;
	description:string;
	serviceRequested:CodeableConcept;
	supportingInformation:Reference;
	fulfillmentTime:Period;
}

export class ClinicalImpression extends DomainResource{
	fulfillmentTime:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	patient:Reference;
	assessor:Reference;
	status:string;
	date:Date;
	description:string;
	previous:Reference;
	problem:Reference;
	triggerX:CodeableConcept;
	investigations:BackbonefhirElement;
	protocol:string;
	summary:string;
	finding:BackbonefhirElement;
	resolved:CodeableConcept;
	ruledOut:BackbonefhirElement;
	prognosis:string;
	plan:Reference;
	action:Reference;
}

export class BodySite extends DomainResource{
	action:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	patient:Reference;
	identifier:Identifier;
	code:CodeableConcept;
	modifier:CodeableConcept;
	description:string;
	image:Attachment;
}

export class Flag extends DomainResource{
	image:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	category:CodeableConcept;
	status:string;
	period:Period;
	subject:Reference;
	encounter:Reference;
	author:Reference;
	code:CodeableConcept;
}

export class CommunicationRequest extends DomainResource{
	code:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	category:CodeableConcept;
	sender:Reference;
	recipient:Reference;
	payload:BackbonefhirElement;
	medium:CodeableConcept;
	requester:Reference;
	status:string;
	encounter:Reference;
	scheduledX:Date;
	reason:CodeableConcept;
	requestedOn:Date;
	subject:Reference;
	priority:CodeableConcept;
}

export class Claim extends DomainResource{

	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	type:string;
	identifier:Identifier;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	target:Reference;
	provider:Reference;
	organization:Reference;
	use:string;
	priority:Coding;
	fundsReserve:Coding;
	enterer:Reference;
	facility:Reference;
	prescription:Reference;
	originalPrescription:Reference;
	payee:BackbonefhirElement;
	referral:Reference;
	diagnosis:BackbonefhirElement;
	condition:Coding;
	patient:Reference;
	coverage:BackbonefhirElement;
	exception:Coding;
	school:string;
	accident:Date;
	accidentType:Coding;
	interventionException:Coding;
	item:BackbonefhirElement;
	additionalMaterials:Coding;
	missingTeeth:BackbonefhirElement;
}

export class RiskAssessment extends DomainResource{
	missingTeeth:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	subject:Reference;
	date:Date;
	condition:Reference;
	encounter:Reference;
	performer:Reference;
	identifier:Identifier;
	method:CodeableConcept;
	basis:Reference;
	prediction:BackbonefhirElement;
	mitigation:string;
}

export class EnrollmentRequest extends DomainResource{
	mitigation:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	target:Reference;
	provider:Reference;
	organization:Reference;
	subject:Reference;
	coverage:Reference;
	relationship:Coding;
}

export class FHIRlocation extends DomainResource{
	relationship:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	name:string;
	description:string;
	mode:string;
	type:CodeableConcept;
	telecom:ContactPoint;
	address:Address;
	physicalType:CodeableConcept;
	position:BackbonefhirElement;
	managingOrganization:Reference;
	partOf:Reference;
}

export class ExplanationOfBenefit extends DomainResource{
	partOf:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	outcome:string;
	disposition:string;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
}

export class AllergyIntolerance extends DomainResource{
	requestOrganization:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	onset:Date;
	recordedDate:Date;
	recorder:Reference;
	patient:Reference;
	reporter:Reference;
	substance:CodeableConcept;
	status:string;
	criticality:string;
	type:string;
	category:string;
	lastOccurence:Date;
	note:Annotation;
	reaction:BackbonefhirElement;
}

export class Observation extends DomainResource{
	reaction:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	category:CodeableConcept;
	code:CodeableConcept;
	subject:Reference;
	encounter:Reference;
	effectiveX:Date;
	issued:string;
	performer:Reference;
	valueX:Quantity;
	dataAbsentReason:CodeableConcept;
	interpretation:CodeableConcept;
	comments:string;
	bodySite:CodeableConcept;
	method:CodeableConcept;
	specimen:Reference;
	device:Reference;
	referenceRange:BackbonefhirElement;
	related:BackbonefhirElement;
	component:BackbonefhirElement;
}

export class Contract extends DomainResource{
	component:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	issued:Date;
	applies:Period;
	subject:Reference;
	authority:Reference;
	domain:Reference;
	type:CodeableConcept;
	subType:CodeableConcept;
	action:CodeableConcept;
	actionReason:CodeableConcept;
	actor:BackbonefhirElement;
	valuedItem:BackbonefhirElement;
	signer:BackbonefhirElement;
	term:BackbonefhirElement;
	bindingX:Attachment;
	friendly:BackbonefhirElement;
	legal:BackbonefhirElement;
	rule:BackbonefhirElement;
}

export class RelatedPerson extends DomainResource{
	rule:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	patient:Reference;
	relationship:CodeableConcept;
	name:HumanName;
	telecom:ContactPoint;
	gender:string;
	birthDate:Date;
	address:Address;
	photo:Attachment;
	period:Period;
}

export class Basic extends DomainResource{
	period:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	code:CodeableConcept;
	subject:Reference;
	author:Reference;
	created:Date;
}

export class ProcessResponse extends DomainResource{
	
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	outcome:Coding;
	disposition:string;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
	form:Coding;
	notes:BackbonefhirElement;
	error:Coding;
}

export class Specimen extends DomainResource{
	error:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	status:string;
	type:CodeableConcept;
	parent:Reference;
	subject:Reference;
	accessionIdentifier:Identifier;
	receivedTime:Date;
	collection:BackbonefhirElement;
	treatment:BackbonefhirElement;
	container:BackbonefhirElement;
}

export class AuditEvent extends DomainResource{
	container:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	event:BackbonefhirElement;
	participant:BackbonefhirElement;
	source:BackbonefhirElement;
	object:BackbonefhirElement;
}

export class EnrollmentResponse extends DomainResource{
	object:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	outcome:string;
	disposition:string;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
}

export class SupplyRequest extends DomainResource{
	requestOrganization:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	patient:Reference;
	source:Reference;
	date:Date;
	identifier:Identifier;
	status:string;
	kind:CodeableConcept;
	orderedItem:Reference;
	supplier:Reference;
	reasonX:CodeableConcept;
	when:BackbonefhirElement;
}

export class Patient extends DomainResource{
	when:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	active:boolean;
	name:HumanName;
	telecom:ContactPoint;
	gender:string;
	birthDate:Date;
	deceasedX:boolean;
	address:Address;
	maritalStatus:CodeableConcept;
	multipleBirthX:boolean;
	photo:Attachment;
	contact:BackbonefhirElement;
	animal:BackbonefhirElement;
	communication:BackbonefhirElement;
	careProvider:Reference;
	managingOrganization:Reference;
	link:BackbonefhirElement;
}

export class EligibilityResponse extends DomainResource{
	link:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	request:Reference;
	outcome:string;
	disposition:string;
	ruleset:Coding;
	originalRuleset:Coding;
	created:Date;
	organization:Reference;
	requestProvider:Reference;
	requestOrganization:Reference;
}

export class MedicationOrder extends DomainResource{
	requestOrganization:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	dateWritten:Date;
	status:string;
	dateEnded:Date;
	reasonEnded:CodeableConcept;
	patient:Reference;
	prescriber:Reference;
	encounter:Reference;
	reasonX:CodeableConcept;
	note:string;
	medicationX:CodeableConcept;
	dosageInstruction:BackbonefhirElement;
	dispenseRequest:BackbonefhirElement;
	substitution:BackbonefhirElement;
	priorPrescription:Reference;
}

export class Person extends DomainResource{
	priorPrescription:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	identifier:Identifier;
	name:HumanName;
	telecom:ContactPoint;
	gender:string;
	birthDate:Date;
	address:Address;
	photo:Attachment;
	managingOrganization:Reference;
	active:boolean;
	link:BackbonefhirElement;
}

export class DiagnosticOrder extends DomainResource{
	link:DomainResource;
	id:string;
	meta:Meta;
	implicitRules:string;
	language:string;
	text:Narrative;
	contained:Resource;
	extension:Extension;
	modifierExtension:Extension;
	subject:Reference;
	orderer:Reference;
	identifier:Identifier;
	encounter:Reference;
	reason:CodeableConcept;
	supportingInformation:Reference;
	specimen:Reference;
	status:string;
	priority:string;
	event:BackbonefhirElement;
	item:BackbonefhirElement;
	note:Annotation

}







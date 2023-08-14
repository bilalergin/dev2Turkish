import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';

const FIELDS = [EMAIL_FIELD, PHONE_FIELD, NAME_FIELD, TITLE_FIELD];

export default class GetContactInfo extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;

    get email() {
        return this.contact.data.fields.Email.value;
    }

    get phone() {
        return this.contact.data.fields.MobilePhone.value;
    }

    get fullName() {
        return this.contact.data.fields.Name.value;
    }

    get title() {
        return this.contact.data.fields.Title.value;
    }
}

import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource';
import TITLE from '@salesforce/schema/Contact.Title';
import { LightningElement, api } from 'lwc';
//! 05.08.2023
export default class ViewFormContact extends LightningElement {
    @api objectApiName;
    @api recordId;

    fields={
        firstName:FIRSTNAME,
        lastName:LASTNAME,
        leadSource:LEADSOURCE,
        title:TITLE
    }

}
import getCasesByContactId from '@salesforce/apex/CaseController.getCasesByContactId';
import CONTACT_FIELD from '@salesforce/schema/Candidate__c.Contact__c';
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

const fields =[CONTACT_FIELD];

export default class CaseByContactForCandidate extends NavigationMixin(LightningElement)  {
    @api recordId;
    cases;
    contactId;
    caseId;
    
    @wire(getRecord, { recordId: '$recordId', fields: fields } )
    getContactId ({error, data}) {
        if (error) {
            // TODO: Error handling
            console.error(error);
        } else if (data) {
            // TODO: Data handling
            console.log('data 1 = ' , data);
            this.contactId = data.fields.Contact__c.value;
        }
    }

    @wire(getCasesByContactId, {contId: '$contactId'})
    wiredData ({error, data}) {
        if (error) {
            // TODO: Error handling
            console.error(error);
        } else if (data) {
            // TODO: Data handling
            console.log('data 2 = ' , data);
            this.cases = data;
            this.caseId = data.id;
        }
    }

    getCase(event){
        console.log('case id : ' , event.target.value);
        this.caseId = event.target.value;
        console.log(this.caseId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId : this.caseId,
                objectApiName : 'Case',
                actionName: 'view'
            }
        })

    }
}
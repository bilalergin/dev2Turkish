import OBJ_CONTACT from '@salesforce/schema/Contact';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import MOBILEPHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//! 05.08.2023
export default class RecordFormContact extends LightningElement {
    objectApiName=OBJ_CONTACT;
    recordId="003Hu00003PYsONIA1";
    fields=[FIRSTNAME_FIELD,
        LASTNAME_FIELD,
        EMAIL_FIELD,
        MOBILEPHONE_FIELD];

        changeHandler(){
            const evt=new ShowToastEvent({
                title:'Contact status',
                message:'İşleminiz başarılı bir şekilde gerçekleşti.',
                variant:'success'
            });
            this.dispatchEvent(evt);
        }

}
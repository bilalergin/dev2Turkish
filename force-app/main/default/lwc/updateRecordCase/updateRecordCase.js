import SUBJECT from '@salesforce/schema/Case.Subject';
import CASEID from '@salesforce/schema/Case.Id';
import { updateRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordCase extends LightningElement {
    subject;
    caseId="500Hu000024kYVmIAM"
    subjectHandler(event){
        this.subject=event.target.value
    }

    handleClick(){
 const fields={};
fields[CASEID.fieldApiName]=this.caseId;
fields[SUBJECT.fieldApiName]=this.subject;
const recordInput={fields}
        updateRecord(recordInput).then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Case Updated',
                    variant: 'success'
                })
            );
        }).catch(error=>{
            console.log(error);
        })

           
    }
}
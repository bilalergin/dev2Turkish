import FAX from '@salesforce/schema/Account.Fax';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import NAME from '@salesforce/schema/Account.Name';
import OWNERSHIP from '@salesforce/schema/Account.Ownership';
import RATING from '@salesforce/schema/Account.Rating';
import { LightningElement, api } from 'lwc';
//! 05.08.2023
export default class RecordEditFormAccount extends LightningElement {
@api objectApiName;
@api recordId;
isIndustry=false;
isFax=false;
isOwnership=false;

fields={
    fax:FAX,
    name:NAME,
    industry:INDUSTRY,
    ownerShip:OWNERSHIP,
    rating:RATING
}
changeHandler(event){
    if(event.target.value === 'Hot'){
        this.isIndustry=true;
        this.isFax=false;
        this.isOwnership=false;
    }else if(event.target.value === 'Cold'){
        this.isIndustry=false;
        this.isFax=true;
        this.isOwnership=false;
    }else if(event.target.value === 'Warm'){
        this.isIndustry=false;
        this.isFax=false;
        this.isOwnership=true;
    }else if(event.target.value === ''){
        this.isIndustry=false;
        this.isFax=false;
        this.isOwnership=false;
    }



}

}
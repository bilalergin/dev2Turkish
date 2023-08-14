import FAX from '@salesforce/schema/Account.Fax';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import NAME from '@salesforce/schema/Account.Name';
import OWNERSHIP from '@salesforce/schema/Account.Ownership';
import RATING from '@salesforce/schema/Account.Rating';
import { LightningElement, api } from 'lwc';
//! 05.08.2023
//? name field ı readonly olan ,rating fieldı Hot olarak seçildiğinde industry fieldı görünen,rating Warm seçildiğinde ownership fieldı görünen,rating cold seçildiğinde fax fieldi görünen ,Rating none seçildiğinde hiç bir field görünmeyen bir form create edin.
export default class 
//!custom rendering: fieldların belli şartlara göre görünmesi

RecordEditFormAccount extends LightningElement {
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
changeHandler(event){//? inputlarda bir değişiklik olunca browser bize event objesi create ediyor. bu nedenle bu değişiklikler bu eventte yapıyoruz
    if(event.target.value === 'Hot'){ //! ===: hem typeın hem de valuenin eşit olup olmadığını kontrol eder
        this.isIndustry=true; //*if else, if true: bunlar direktiflerdir ve html ye dinamiklik katar
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
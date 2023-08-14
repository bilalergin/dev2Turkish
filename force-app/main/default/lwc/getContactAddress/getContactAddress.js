import CITY_FIELD from '@salesforce/schema/Contact.MailingCity';
import COUNTRY_FIELD from '@salesforce/schema/Contact.MailingCountry';
import POSTALCODE_FIELD from '@salesforce/schema/Contact.MailingPostalCode';
import STATE_FIELD from '@salesforce/schema/Contact.MailingState';//province de demek
import STREET_FIELD from '@salesforce/schema/Contact.MailingStreet';//büyük yazarak usera veya developera bunlar değişmeyecek,sabit,silme diyoruz
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';

const FIELDS = [CITY_FIELD,COUNTRY_FIELD,POSTALCODE_FIELD,STATE_FIELD,STREET_FIELD];//sabit bir depişken create edeceksek ya burada(class seviyesinde) ya da metodun içinde create etmeliyiz. metodun içinde create edersek sadece o metottan ulaşabiliriz. Bu şekilde her yerden ulaşabiliriz.
export default class GetContactAddress extends LightningElement {
    @api recordId;//bu iki wire ın içine metot olmadan const create edemeyiz
    @wire(getRecord, {recordId:"$recordId", fields: FIELDS })contact;//contact:burada property dir. eğer (data, error) ile yapsaydık funciton ile yapmış olacaktık
    get street (){
        return this.contact.data.fields.MailingStreet.value;
    }
    get city (){
        return this.contact.data.fields.MailingCity.value;
    }
    get country (){
        return this.contact.data.fields.MailingCountry.value;
    }
    get state (){
        return this.contact.data.fields.MailingState.value;
    }
    get postalCode (){
        return this.contact.data.fields.MailingPostalCode.value;
    }
}
    

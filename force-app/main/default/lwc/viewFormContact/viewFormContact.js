import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource';
import TITLE from '@salesforce/schema/Contact.Title';
import { LightningElement, api } from 'lwc';
//! 05.08.2023
export default class ViewFormContact extends LightningElement {
    @api objectApiName;//bu şekilde yaparsak object import etmesek de sonuç gelir.Bunu ancak record page de gösterebiliriz
    @api recordId;//bu şekilde yaptığımızda id göndermesek de hangi recordun üzerindeysek onun id sini alarak çalışır.Bunu ancak record page de gösterebiliriz
    //! @api nin görevi 1. eklendiği ifadeyi public yapmak. 2.ifadeyi reactive yani değişiklikleri anında göstermek
    //? @api ile yazdığımız için app page'de değil record page de gösterebiliyoruz

    fields={// bu bir objedir. alttaki satırlara constant deniyor
        firstName:FIRSTNAME,
        lastName:LASTNAME,
        leadSource:LEADSOURCE,
        title:TITLE
    }

}
import CONTACT_OBJECT from '@salesforce/schema/Contact';//silinirse uyarı gelsin diye objeyi import ediyoruz.referencial integrity: objeyi import ederek kullanmak
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

//! 10.08.2023
export default class GetObjectInfoContact extends LightningElement {


    //getobjectInfo ile objeye ait tüm metadatayı getiriyoruz
    defaultRtId;
    musicRtId;
    @wire(getObjectInfo, {objectApiName: CONTACT_OBJECT})
    contactHandler({data, error}){
        if (data) {
            console.log("Contact info:", data);
            this.defaultRtId = data.defaultRecordTypeId;
            const rtIds = data.recordTypeInfos;//bu şekilde bir map geldi. değer değişmeyecekse const kullanıyoruz.
            const arryIds = Object.keys(rtIds);//objeye ait keyleri array olarak aldık
            this.musicRtId = arryIds.find(eachId => rtIds[eachId].name === "Music"); //id lere bak name music olanları getir. find bir array metodudur. aradığımıza uygun olan ilk objeyi getirir.Filter metodu ise aradığımız kritere uyan her objeyi getirir
            //arryIds = ["012Hu000001a9GSIAY","012Hu000001a9GcIAI","012Hu000001a9GhIAI"]
        }if (error) {
            console.log("Contact info:", error);//bu hatayı siyah yazdırıyor
            console.error(error);//hatayı kırmızı renkte yazdırır
            
        }
    }
}
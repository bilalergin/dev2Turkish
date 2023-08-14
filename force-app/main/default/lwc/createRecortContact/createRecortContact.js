import CONTACT_OBJ from '@salesforce/schema/Contact';
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';



export default class CreateRecordContact extends LightningElement {
    firstName;
    lastName;
    phone;
    selectedLeadsource;
    leadSourceOptions=[];

    firstnameHandler(event){
        this.firstName=event.target.value;

    }
    lastnameHandler(event){
        this.lastName=event.target.value;
    }
    phoneHandler(event){
        this.phone=event.target.value;
    }
    handleChange(event){
        this.selectedLeadsource=event.target.value;
    }
    createContact(){
        var fields={
            'FirstName':this.firstName,
            'LastName':this.lastName,
            'Phone':this.phone,
            'LeadSource':this.selectedLeadsource
            
        };
        var objRecordInput={
            'apiName':'Contact',
            fields

        };


        createRecord(objRecordInput).then(response=>{
            alert('Contact create edildi'+response.id);
        }).catch(error=>{
            alert('Hata oluştu'+JSON.stringify(error));
        })
    }


    cancelHandler(){
    //    this.template.querySelector("form").reset();
    //    const comboboxArry=this.template.querySelectorAll("lightning-combobox");
    //    comboboxArry.forEach(eachItem=>{
    //     eachItem.value=undefined;
    //    })
 this.refs.conForm1.reset();
 this.refs.combobox.value=undefined;
    }


    @wire(getObjectInfo,{objectApiName:CONTACT_OBJ })contact;
    @wire(getPicklistValues,{fieldApiName: LEADSOURCE, recordTypeId:'$contact.data.defaultRecordTypeId' })leadSourceValue({data,error}){
        if(data){
            this.leadSourceOptions=data.values;
        }
        if(error){
            console.error(error);
        }
    }

}
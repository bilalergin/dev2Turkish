import CONTACT_OBJ from '@salesforce/schema/Contact';
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';



export default class CreateRecordContact extends LightningElement {
    
    leadSourceOptions=[];
    formdata={};

   
    changeHandler(event){
        const {name,value}=event.target;
        this.formdata[name]=value;

    }
    createContact(){

        var objRecordInput={
            apiName:CONTACT_OBJ.objectApiName,
            fields:this.formdata

        };


        createRecord(objRecordInput).then(response=>{
            alert('Contact create edildi'+response.id);
        }).catch(error=>{
            alert('Hata oluştu'+JSON.stringify(error));
        })
    }


    cancelHandler(){
    //    this.template.querySelector("form").reset();
    //     this.formdata={};
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
import Id from '@salesforce/user/Id';
import Manager from '@salesforce/schema/User.Manager.Name';
import Name from '@salesforce/schema/User.Name';
import Profile from '@salesforce/schema/User.Profile.Name';
import UserRole from '@salesforce/schema/User.UserRole.Name';

import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

//orgda bulunan tüm userların bilgilerini getirir

export default class GetUserDetails extends LightningElement {

    Name;
    Manager;
    Profile;
    UserRole;
    Id = Id;


    @wire(getRecord, {recordId: Id, fields: [Manager, Profile, Name, UserRole]})
    userDetails({error, data}){
        if (error) {
           this.error = error; 
        }else if (data) {
            if (data.fields.Name.value != null) {
                this.Name= data.fields.Name.value;

            } if (data.fields.Manager.value!= null) {
                this.Manager= data.fields.Manager.value.fields.Name.value ;

            } if (data.fields.Profile.value != null) {
                this.Profile= data.fields.Profile.value.fields.Name.value ;

            } if (data.fields.UserRole.value != null) {
                this.UserRole= data.fields.UserRole.value.fields.Name.value ;

            
        }
       
    }
}
}
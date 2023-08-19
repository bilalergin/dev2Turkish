import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement,api  } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from "lightning/navigation";

// ÖRNEK 1:Accountun record page'inde bir quick action oluşturun.Tıklandığında bir delete buttonu görünsün ve user o delete butonuna bastığında açık olan sayfadaki record silinsin.

export default class DeleteRecordAccount extends NavigationMixin(LightningElement) {
 @api recordId;
 handleClick(){
        deleteRecord(this.recordId)
        .then(result=>{
            this.createToastMessage('Success','Record başariyla silindi','success');
            this[NavigationMixin.Navigate]({
                type: "standard__objectPage",
                attributes: {
                  objectApiName: "Account",
                  actionName: "home",
                },
              });
           
        })
        .catch(error=>{
            this.createToastMessage('Error',error.body.message,'error');//sistemde bulunan hata mesajını gösteririr

        })
    }
    createToastMessage(title,message,variant){
        const evt=new ShowToastEvent({
            title:title,
            message:message,
            variant:variant
        });
        this.dispatchEvent(evt);

    }
}

        // this[NavigationMixin.Navigate](
        //     {
        //       type: "standard__webPage",
        //       attributes: {
        //         url: "http://salesforce.com",
        //       },
        //     },
        //     true, // Replaces the current page in your browser history with the URL
        //   );
        // }) //sildikten sonra salesforce sitesine gitsin

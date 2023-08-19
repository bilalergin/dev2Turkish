import calculateAmount from '@salesforce/apex/OppController.calculateAmount';
import { LightningElement, api } from 'lwc';
//ÖRNEK 2:Bir accountun record page'inde bir component ekleyelim.Componentte bir buton olsun ve açık olan account recordunun child opportunuty 'lerinin amount toplamını göstersin.

//!Bu bir imperativdir. Wire da sonuç otomatik gelir. İmperativlerde tıklamadan sonra.
//Asenkron (imperative) çağrılarda @AuraEnabled(cacheable=true) ifadesi gerekli değildir.Çübnkü  asenkron çağrılar zaten önbelleğe alınamaz ve her çağrıda gerçek zamanlı veri alınır. Bu nedenle asenkron çağrılar için (cacheable=true)  ifadesini kullanmaya gerek yoktur.  Çünkü  yalnızca önbelleğe alınabilir olarak işaretlenen Apex fonksiyonları için kullanıyrz

export default class CalculateAmountWithApex extends LightningElement {
    @api recordId;
    totalAmount;
    handleClick(){
        calculateAmount({accId:this.recordId})
        .then(result=>{ //then catche promise deniyor
            this.totalAmount=result;
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
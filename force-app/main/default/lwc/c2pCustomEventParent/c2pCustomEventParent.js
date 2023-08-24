import { LightningElement } from 'lwc';
//!24.08.2023
/*
ÖRNEK 1:child componentte cıkarma,toplama,2 ile çarpma ve 10 ile çarpma yapacak 4 buton olusturun .Hangi butona tıklanırsa bir custom event dispatch etsin ve parent parentta bulunan sayıya ilgili işlemi uygulayarak sonucu yansıtsın.
*/

export default class C2pCustomEventParent extends LightningElement {
    counter=0;
    handleSubtraction(){
        this.counter=this.counter-1;
    }
    handleAddition(){
        this.counter=this.counter+1;
    }
    
    handleMultiply(event){
        const multiplyingNumber=event.detail;
        this.counter *= multiplyingNumber;
    }
}
import { LightningElement } from 'lwc';
//! 24.08.2023
/*
ÖRNEK 1:child componentte cıkarma,toplama,2 ile çarpma ve 10 ile çarpma yapacak 4 buton olusturun .Hangi butona tıklanırsa bir custom event dispatch etsin ve parent parentta bulunan sayıya ilgili işlemi uygulayarak sonucu yansıtsın.
*/
export default class C2pCustomEventChild extends LightningElement {
    handleSubtract(){
        const subtractEvent=new CustomEvent('subtraction');
        this.dispatchEvent(subtractEvent);
    }
    handleAdd(){
        const addEvent=new CustomEvent('addition');
        this.dispatchEvent(addEvent);
    }
    handleMultiply(event){
        const valueForMultiply=event.target.value;
        const multiplyEvent=new CustomEvent('multiply',{detail:valueForMultiply});
        this.dispatchEvent(multiplyEvent);

    }
}
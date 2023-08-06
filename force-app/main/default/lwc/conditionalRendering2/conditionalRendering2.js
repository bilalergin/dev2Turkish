import { LightningElement } from 'lwc';
//! 02.08.2023
export default class ConditionalRendering2 extends LightningElement {
    isShowed = false;//burayı true yaparsak metin açık olarak geliyor
    handleChange(event){
        console.log(event);
        his.isShowed = event.detail.checked;//alttaki kodla aynı işlevi yapar
        //this.isShowed =!this.isShowed;//üstteki kodla aynı işlevi yapar. bunda even objesini yazmaya gerek kalmaz
        console.log(this.isShowed);

    }
}
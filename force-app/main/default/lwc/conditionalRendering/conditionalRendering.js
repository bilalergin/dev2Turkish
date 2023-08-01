import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showContent = false;//burayı true yaparsak metin açık olarak geliyor
    handleClick(){
        this.showContent = !this.showContent;
    }
}
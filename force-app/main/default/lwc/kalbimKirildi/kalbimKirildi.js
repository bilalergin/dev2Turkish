import { LightningElement } from 'lwc';
import HEART_RESOURCE from '@salesforce/resourceUrl/Heart';
//! 04.08.2023
export default class KalbimKirildi extends LightningElement {
    isChecked = false; 
    KalbimKirildi=HEART_RESOURCE+`/Kalbim/KalbimKirildi.png` ;
    Kalbim= HEART_RESOURCE+`/Kalbim/Kalbim.png`;
    music= HEART_RESOURCE+`/Kalbim/pepe.mp3`;
    clickHandler(event){
    this.isChecked = event.target.checked;
    const audioPepe = this.template.querySelector('[data-id="musicId"]');
    if(this.isChecked){
        audioPepe.play();
    }else{
        audioPepe.pause();
    }
 }
}
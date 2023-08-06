import { LightningElement, track } from 'lwc';
//! 02.08.2023
export default class TrackDecorator extends LightningElement {
    @track
    user={
        firstName:"John",
        lastName:"Doe"
    }
    
    handleClick(){
        console.log("Fonksiyon çalıştı");
        // this.user = {
        //     firstName:"Ali",
        //     lastName:"Türk"
        // } track annotation eklendiği 1.ifadeyi reaktif yapar. değişiklikler anında görünür.2.eklendiği ifadeyi private yapar
        this.user.firstName="Ali";
        console.log(this.user.firstName);

    //lwc default olarak one way data bindingdir. Controller to template
    //eventlerle ( html icindeki onclick onsuccess vs) two way data binding yani template to js yapabiliriz
}
}
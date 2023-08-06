import { LightningElement } from 'lwc';
//! 02.08.2023
export default class HelloLwc extends LightningElement {
    fullName= "John Doe";
    age=23;
    isCompleted=true;
    names=["Ali","Veli","Selami","Hayati","Memati"];
    location ={
        city:"İstanbul",
        country:"Türkiye"
    }
    num1=23;
    num2=43;
    get sum(){
        return this.num1+this.num2;
    }
    get firstName(){
        return this.names[0];
    }
}
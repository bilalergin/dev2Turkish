import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name;//tanımsız undefined
    age = 25;
    fullName = 'Salesforce LWC';
    chek =true;

    detail = {
        name : "dummy",
        place: "Türkiye"
    }

    birds = ["sparrow","crow","peacock"];
}
import { LightningElement } from 'lwc';

export default class GettersInLwc extends LightningElement {
    fruit =["Elma", "Armut", "Muz"];
    number = 10;
    number2 = 20;

    get firstFruit() { 
        return this.fruit[0];
    }

    get sumOfNum() { 
        return this.number*this.number2;
    }

}
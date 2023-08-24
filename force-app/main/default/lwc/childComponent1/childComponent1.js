import { LightningElement, api } from 'lwc';
//Örnek 1:Bir ülke ve o ülkeye ait 5 şehri display eden bir komponenet create edin.Parent componentte Child componenti 3 farklı ülke ve şehirleri display etmesi için 3 kere çağırın.

export default class ChildComponent1 extends LightningElement {
    @api country;
    @api cities;
    get cityNumber() {
        return this.cities.map((city, index) => `${index + 1}. ${city}`);
    }
}
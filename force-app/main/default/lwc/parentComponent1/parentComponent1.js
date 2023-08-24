import { LightningElement } from 'lwc';
//Örnek 1:Bir ülke ve o ülkeye ait 5 şehri display eden bir komponenet create edin.Parent componentte Child componenti 3 farklı ülke ve şehirleri display etmesi için 3 kere çağırın.
export default class ParentComponent1 extends LightningElement {
    country1 = 'United States';
    cities1 = ["New York", "Washington","California", "Ohio", "Oklahoma"];

    country2 = "Türkiye";
    cities2 = ["Ankara", "İstanbul", "Kütahya", "Bursa", "Uşak"];

    country3 = "İspanya";
    cities3 =["Madrid", "Barselone", "Cordoba", "Toledo", "Granada"];
}
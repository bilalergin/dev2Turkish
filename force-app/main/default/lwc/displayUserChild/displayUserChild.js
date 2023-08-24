import { LightningElement, api } from 'lwc';
//ÖRNEK 2:Userları display eden bir child component create edin .Parentta child componenti çağırıp display edeceği değerleri pass edin.
export default class DisplayUserChild extends LightningElement {

    @api userDetail;
}
import { LightningElement, api } from 'lwc';

export default class NavbarChild extends LightningElement {
    @api navList;
    handleNavSelection(event){
        const playerName=event.target.name;
        const selectEvent=new CustomEvent('selection',{detail:playerName});
        this.dispatchEvent(selectEvent);
    }
}
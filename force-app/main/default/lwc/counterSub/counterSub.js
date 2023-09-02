import { MessageContext, subscribe,APPLICATION_SCOPE } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import CHANNEL from '@salesforce/messageChannel/updatecounter__c';

export default class CounterSub extends LightningElement {
    counter=0;
    @wire(MessageContext)context;
    connectedCallback(){
        this.subscribeToChannel();
    }

    subscribeToChannel(){
        subscribe(
            this.context,
            CHANNEL,
            (message)=>this.handleMessage(message),
            { scope: APPLICATION_SCOPE }

        );
    }
    handleMessage(message){
        if(message.operator=='add'){
            this.counter+=message.constant;
        }else if(message.operator=='subtract'){
            this.counter-=message.constant;
        }else if(message.operator=='multiply'){
            this.counter*=message.constant;
        }


    }
}
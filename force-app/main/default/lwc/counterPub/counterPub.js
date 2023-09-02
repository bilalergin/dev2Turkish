import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import CHANNEL from '@salesforce/messageChannel/updatecounter__c';
export default class CounterPub extends LightningElement {
    @wire(MessageContext)messageContext;
    handleAddition(){
        const payload={//payload yerine mesaj da diyebiliriz. Bu bizim mesajımız olacak
            operator:'add',
            constant:1
        }
        publish(this.messageContext,CHANNEL,payload);
    }
    handleSubtraction(){
        const payload={
            operator:'subtract',
            constant:1
        }
        publish(this.messageContext,CHANNEL,payload);
    }
    handleMultiply(){
        const payload={
            operator:'multiply',
            constant:2
        }
        publish(this.messageContext,CHANNEL,payload);
    }
}



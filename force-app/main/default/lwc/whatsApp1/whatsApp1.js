import { MessageContext, publish ,subscribe,APPLICATION_SCOPE} from 'lightning/messageService';
import { LightningElement, wire,track } from 'lwc';
import CHANNEL1 from '@salesforce/messageChannel/whatsapp__c';
import CHANNEL2 from '@salesforce/messageChannel/whatsapp2__c';
export default class WhatsApp1 extends LightningElement {
    inputValue;
    inputHandler(event){
        this.inputValue=event.target.value;

    }
    @wire(MessageContext)context;
    publishMessage(){
        const message={
            lmsData:this.inputValue
        }
        
        publish(this.context,CHANNEL1,message);
        this.template.querySelector('lightning-input').value=undefined;
        this.inputValue=undefined;

    }

    @track recievedMessage=[];
    @wire(MessageContext)context;
    connectedCallback(){
        this.subscribeMessage()

    }
    subscribeMessage(){
    subscribe(
        this.context,
        CHANNEL2,
        (message)=>{this.handleMessage(message)},
        {scope:APPLICATION_SCOPE}
    )
    }
    handleMessage(message){
        this.recievedMessage.push(message.lmsData?message.lmsData:'No message Published');

    }
}
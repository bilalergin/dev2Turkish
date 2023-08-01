import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    countries = ["İstanbul","Adana","Ankara","İzmir"];
    contacts =[
        {
            id:1,
            firstName:"Steve",
            lastName:"Jobs"

        },
        {
            id:2 ,   
            firstName:"John",
            lastName:"Doe"
        }
    ]
}  
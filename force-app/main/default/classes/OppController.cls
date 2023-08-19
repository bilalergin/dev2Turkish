public with sharing class OppController {
    //ÖRNEK 2:Bir accountun record page'inde bir component ekleyelim.Componentte bir buton olsun ve açık olan account recordunun child opportunuty 'lerinin amount toplamını göstersin.
    @AuraEnabled(cacheable=true)//imperativlerde cacheable kullanmak zorunda değiliz.
    public static decimal calculateAmount(string accId){
     list<opportunity> lstOpp=[select amount from opportunity where AccountId=:accId and amount!=null];
     decimal total=0;
     for(opportunity opp:lstOpp){
         total+=opp.amount;
     }
     return total;
 }
 }
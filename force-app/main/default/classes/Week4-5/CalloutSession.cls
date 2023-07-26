//! name credential url ve passwordleri ve de otorization ve authenticetionu tutar. remote site settings ise sadece url yi tutar
public with sharing class CalloutSession {
public static HttpResponse postUser(){
Http httpObject = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('callout:Reqres_User');
request.setMethod('POST');
request.setHeader('Content-Type','application/json');

Dummy_Users__c dm=[select id,firstname__c,lastname__c,job__c from Dummy_Users__c where job__c!=null limit 1];
UserRequest obj=new UserRequest();
obj.name=dm.firstname__c+' '+dm.lastname__c;
obj.job=dm.job__c;
string jsonbody=JSON.serialize(obj);
request.setbody(jsonbody);
HttpResponse response = httpObject.send(request);
 //String responseBody = response.getBody();
if(response.getstatuscode()==201){
   
    system.debug('başarili bir şekilde create edildi');
    dm.response_detail__c=response.getstatuscode()+' '+response.getBody();
}else {
     dm.response_detail__c=response.getBody()+response.getstatuscode();
      system.debug('Error');
}
update dm;


return response;

}
public class UserRequest{
    public string name;
    public string job;
}

}
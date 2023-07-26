public class DummyPractice {
    public static void dummy(){
        Dummy_Users__c dm = [select name, title__c, body__c, ownerId from Dummy_Users__c order by createddate desc limit 1];
        system.debug(dm);
        string jsonString = generateJsonData(dm);
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://jsonplaceholder.typicode.com/posts');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setBody(jsonString);
        Http http = new Http();
        HttpResponse response = http.send(request);
        if(response.getStatusCode()==201){
            string body = response.getBody();
            system.debug('Kayit basarili bir sekilde post edildi, status: '+response.getStatus()+''+body);
        }else{
            system.debug('Kayit basarisiz oldu, statusCode:'+response.getstatusCode()+''+response.getBody());
        }
       }
       public static string generateJsonData(Dummy_Users__c dm){
        Map<string,object> newMap = new Map<String,Object>();
        newMap.put('userId', dm.name);
        newMap.put('id',dm.ownerId);
        newMap.put('body',dm.body__c);
        newMap.put('title',dm.title__c);
        
        return Json.serialize(newMap);
       }
    }
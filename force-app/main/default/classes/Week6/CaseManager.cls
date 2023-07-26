@RestResource(urlMapping ='/Case/*')
global with sharing class CaseManager {
    //https://dev2-4f-dev-ed.develop.my.salesforce.com/services/apexrest/Case/003Hu00003PYsOUIA1
//    String myBaseUrl= URL.getSalesforceBaseUrl().toExternalForm();
//    System.debug(myBaseUrl);//!Salesforce URL'mizi bu kodla da görebiliriz.
    @HttpGet
    global static Case getCase() {
        RestRequest request = RestContext.request;
        System.debug(request);
        System.debug(request.requestURI);
        System.debug(request.headers);
        System.debug(request.requestBody);
        System.debug(request.httpMethod);

        String uri = request.requestURI;
        Id caseId =uri.substringAfterLast('/');//Pars etmek son slaştan sonrasını al demek.
        Case cs = [SELECT Id, CaseNumber, Subject, Description, Type, Priority, Status FROM Case WHERE id=:caseId];
        return cs;
            
    }
    // @HttpPost
    // global static Id postCase(String Subject, String Description, String Priority, String Status) {
    //     Case cs = new Case();
    //     cs.subject = Subject;
    //     cs.description = Description;
    //     cs.priority = Priority;
    //     cs.status = Status;
    //     insert cs;
    //     return cs.Id;

        
    //}
    @HttpPost    //Üstteki posttun farklı bir yazımı
    global static Id postCase() {
        RestRequest request =RestContext.request;
        String jsonBody = request.requestBody.toString();
        Case cs = (Case)Json.deserialize(jsonBody, Case.class);
        insert cs;
        return cs.Id;
        
    }

    @HttpDelete
    global static String deleteCase(){
        RestRequest request =RestContext.request;
        String uri = request.requestURI;
        Id caseId =uri.substringAfterLast('/');
        Case cs =[SELECT Id from Case WHERE id =:caseId];
        try {
            delete cs;

        } catch (Exception ex) {
            System.debug(ex.getMessage());
            return 'Silme işlemi başarısız oldu.';
            
        }
        return 'Başarılı bir şekilde silindi';
}

@HttpPut
global static Id putCase(String id, String Subject, String Description, String Priority, String Status) {
    Case cs = new Case();
    cs.id = Id;
    cs.subject = Subject;
    cs.description = Description;
    cs.priority = Priority;
    cs.status = Status;
    upsert cs; //Obje varsa update edecek yoksa yeni oluşturacak
    return cs.id;
    
}
@HttpPatch
global static Case patchCase() {
    RestRequest request =RestContext.request;
    String jsonBody = request.requestBody.toString();
    Case cs = (Case)Json.deserialize(jsonBody, Case.class);
    update cs;
    return [SELECT Id, CaseNumber, Subject, Priority, Status FROM CAse WHERE id =:cs.id];  
    
}
}
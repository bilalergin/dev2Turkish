@istest
public class MockClass implements HttpCalloutMock {
    public HTTPResponse respond(HTTPRequest req) {
    if(req.getEndpoint()=='callout:Reqres_User' && req.getmethod()=='POST'){
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"name": "morpheus","job": "leader","id": "74","createdAt": "2023-07-15T14:12:42.764Z"}');
        res.setStatusCode(201);
    
        return res;
    }
    return null;
   }
 
}
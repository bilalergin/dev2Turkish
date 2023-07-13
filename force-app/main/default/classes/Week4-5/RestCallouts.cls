public class RestCallouts {
    public static HttpResponse getUsers(){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/users');
        request.setMethod('GET');
        Http http = new Http();
        HttpResponse response = http.send(request);


    }
}
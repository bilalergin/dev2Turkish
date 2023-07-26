public with sharing class CountryFlag {
    public static HttpResponse getCountryFlag() {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://restcountries.com/v2/all');
        request.setMethod('GET');

        //2. Prepare Internet
        Http httpObject = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = httpObject.send(request);
        if(response.getStatusCode()==200){
            String jsonBody =response.getBody();
            System.debug(jsonBody);
            List<CountryFlagWrapper> cfw = (List<CountryFlagWrapper>)json.deserialize(jsonBody, List<CountryFlagWrapper>.class);
            List<Country_Flag__c> cfl = new List<Country_Flag__c>();
            for (CountryFlagWrapper cf : cfw) {
                Country_Flag__c c = new Country_Flag__c();
                c.Capital__c = cf.Capital;
                c.Flag_URL__c = cf.flags.svg;
                 //obj.Flag_URL__c = '<img src='+eachWrapper.flags.svg+'></img>'; //rich area ile url oluşturursak bu kodu kullanabiliriz.
                c.Native_Name__c =cf.nativeName;
                c.Population__c = cf.Population;
                c.Name = cf.Name;
                c.Region__c = cf.Region;
                cfl.add(c);
                
            }
            if (!cfl.isEmpty()) {
                try {
                    insert cfl;
                } catch (Exception ex) {
                    System.debug(ex.getMessage());
                }
                
            }
        }

        //4. Process the response
        
        return response;
    }
   
    
}
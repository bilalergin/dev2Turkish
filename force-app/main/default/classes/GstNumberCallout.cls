public class GstNumberCallout {
    public static HttpResponse getGstNumber(String num) {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.e-waybill.in/api/gstin/validate' );
        request.setMethod('GET');

        //2. Prepare Internet
        Http httpObject = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = httpObject.send(request);
        if(response.getStatusCode()==200){
            String jsonBody =response.getBody();
            System.debug(jsonBody);
            List<GstNumberWrapper> cfw = (List<GstNumberWrapper>)json.deserialize(jsonBody, List<GstNumberWrapper>.class);
            List<Gst_Record__c> cfl = new List<Gst_Record__c>();
            for (GstNumberWrapper cf : cfw) {
                Gst_Record__c c = new Gst_Record__c();
                c.Name = cf.Name;
                c.Gst_Number__c = cf.gstNumber;
                c.Address__c = cf.address;
                c.Pin_Code__c = cf.pinCode;
                c.Valid__c = cf.valid;

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
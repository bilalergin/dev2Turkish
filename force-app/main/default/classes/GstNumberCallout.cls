public class GstNumberCallout {
    
    public static HttpResponse getGstRecord(string gstNumber) {
     //request hazırla
     httpRequest request=new HttpRequest();
     request.setEndpoint('https://api.e-waybill.in/api/gstin/validate?gstin='+gstNumber);
     request.setMethod('GET');
     //internet create et
     Http http=new Http();
     //requesti internet aracılığıyla external sisteme gönder
     HttpResponse response=http.send(request);
     
     //Gelen datayı işle
     if(response.getStatusCode()==200){
         system.debug(response.getbody());
         string jsonString=response.getbody();
         GstWrapper 
 gst=(GstWrapper)JSON.deserialize(jsonString,GstWrapper.class);
         GST_Record__c rcd=new GST_Record__c();
         rcd.Name=gst.name;
         rcd.Gst_Number__c=gst.gstNumber;
         rcd.Address__c=gst.address;
         rcd.Pin_Code__c=gst.pinCode;
         rcd.State__c=gst.state;
         rcd.Valid__c=gst.valid;
         insert rcd;
     }
     return response;
    }
    public class GstWrapper{
     public string name;
     public string gstNumber;
     public string address;
     public string pinCode;
     public string state;
     public boolean valid;
     
    }
 }
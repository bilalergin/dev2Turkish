public with sharing class ExchangeRestCallout {
    @InvocableMethod(label='Exchange Callout' description='Bu metot kur değerlerinin güncel değerlerini getirir' category= 'Exchange Callout')//flowda görmek için bu metodu ekliyoruz
            public static void getExchangeRate(List<Id> exchangeIds) {
            List<Exchange__c> listExchange = [select To__c, From__c, Amount__c, Rate__c, Total__c, Date__c from Exchange__c WHERE ID IN : exchangeIds];
            List<Exchange__c> listExchangeUpdate = new List<Exchange__c>();
    
            for (Exchange__c ex : listExchange) {
                // "https://api.apilayer.com/exchangerates_data/convert?to=to&from=from&amount=100"
                string to = ex.To__c;
                string fromm = ex.From__c;
                decimal amount = ex.Amount__c;
    
                // string to = 'TRY';
                // string fromm = 'USD';
                // decimal amount = 200;
                
                HttpRequest request = new HttpRequest();
                request.setEndpoint('https://api.apilayer.com/exchangerates_data/convert?to='+to+'&from='+fromm+'&amount='+amount);
                request.setMethod('GET');
                request.setHeader('apikey', 'XPfoZ8JO0diNXnoRf9P6wWOJwQIQYiAe');
    
                Http http = new Http();
                HttpResponse response = http.send(request);
                System.debug(response);
                System.debug(response.getBody());
    
                if (response.getStatusCode() == 200) {
                    string responseBody = response.getBody();
    
                    responseBody = responseBody.replaceAll('date', 'tarih');
                    ExchangeWrapper exchangeRate = (ExchangeWrapper)JSON.deserialize(responseBody, ExchangeWrapper.class);
                    ex.Total__c = exchangeRate.result;
                    ex.Rate__c = exchangeRate.info.rate;
                    ex.Date__c = date.valueOf(exchangeRate.tarih);
                    listExchangeUpdate.add(ex);
                    try {
                        update listExchangeUpdate;
                    }
                    catch (Exception exp) {
                        System.debug(exp);
                    }
    
                } else {
                    //Handle Error
                }
            }
            
        }
    }
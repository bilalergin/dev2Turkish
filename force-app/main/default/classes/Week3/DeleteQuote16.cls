public class DeleteQuote16 {
    //Soru :  Quote objesinde bir recordda statu accepted yapildiginda o recordun bagli oldugu opportunitiniye bagli olan tum Quote recordlarindan statusu accepted olmayanlarin hepsi silinsin.. islem bitince ownera bir mail ile haber verilsin..
    @InvocableMethod //! 06.07.2023
    public static void deleteQuoteStatusNotAccepted(List<Requests> listRequest) {
        // 1. asama gelen listeden opportunity idlerini cekelim.
        set<id> oppIds = new set<id>();
        for (Requests req : listRequest) {
            oppIds.add(req.opp_Record_Id);
        }
        // 2. asama bu opportunitylere bagli olan ve statusu accepted olmayan quote recordlarini Soql ile getirelim
        if (!oppIds.isEmpty()) {
            List<Quote> listQuote = [select id from Quote where OpportunityId in:oppIds and status != 'Accepted'];
            // 3. asama bu quote recordlarini silelim..
            delete listQuote;
            // 4. asama bu recordlarin sahiplerine(owner) bilgilendirme maili atalim.. 
            for (Requests req : listRequest) {
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                mail.setTargetObjectId(req.owner_Id);
                mail.setSaveAsActivity(false);
                mail.setSubject('kabul edilen teklif ile ilgili...');
                mail.setPlainTextBody(req.opp_Record_Id + ' id li opportunitye ait Quote recordlarindan biri Accepted yapilinca ayni opportunitye bagli olan statusu Accepted olmayan diger Quotelar silindi..');
                Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
            }
        }
        
        
    }

    public class Requests{
        @invocableVariable
        public Id opp_Record_Id;
        @invocableVariable
        public Id owner_Id;
    }
    //List = {(oppId1, ownerId1), (oppId2, ownerId2), (oppId3, ownerId3)}
}
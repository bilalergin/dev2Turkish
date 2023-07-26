@istest
public  class CalloutSessionTest {
    @istest
   private static void postUserTest() {
    Dummy_Users__c dm=new Dummy_Users__c();
    dm.firstname__c='John';
    dm.lastname__c='Doe';
    dm.job__c='Salesforce developer';
    insert dm;
    
    Test.startTest();
    MockClass mock=new MockClass();
    Test.setmock(HttpCalloutMock.class,mock);

    HttpResponse response=CalloutSession.postUser();

    //! testStart ve Stopu asencronus metotları hemen çalıştırmak ve governor limitleri aşmak için kullanıyoruz.
    //! bunları yazmazsak asencronus metotların ne zaman çalışacağını bilmiyoruz.
    Test.stopTest(); 
    assert.areequal(201,response.getstatuscode());
    
}
}
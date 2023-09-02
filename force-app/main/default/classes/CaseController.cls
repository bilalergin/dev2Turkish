public with sharing class CaseController {
    @AuraEnabled(cacheable = true)
    public static List<Case> getCasesByContactId(string contId){//case list return ettiği için metodun adı list<case> oldu
        List<Case> caseList = [select id, CaseNumber, Type, Status, ClosedDate, CreatedDate FROM Case WHERE ContactId =:contId AND (isClosed = False OR Closeddate = LAST_N_DAYS:14) WITH SECURITY_ENFORCED order by CreatedDate Desc];//bugünle son 15 gün oluyor
        return caseList;
    }
}


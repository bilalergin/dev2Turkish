
account acc=new account();
acc.name='Ali';
acc.annualrevenue=100000;
acc.phone='212457896';
system.debug(acc);

account acc1=new account();
acc1.name='Veli';
acc1.annualrevenue=200000;
acc1.phone='212457896';
system.debug(acc1);

list<account> lstacc=new list<account>{acc,acc1};
string strJson1=JSON.serialize(lstacc);//! seriliaze ile apex kodunu JSON olarak görüyoruz
// string strJson1=JSON.serializePretty(lstacc); seriliaze pretty yazarsak outputta doğrudan json formatında görüyoruz
system.debug(strJson1);

list<account> lstacc1=(list<account>)JSON.deserialize(strJson1,list<account>.class);
System.debug(lstacc1);//! deseriliaze ile JSON kodunu Apex olarak görüyoruz

account acc=new account();
acc.name='Ali';
acc.annualrevenue=100000;
acc.phone='212457896';
system.debug(acc);
string strJson=JSON.serialize(acc);//seriliaze ile apex kodunu JSON olarak görüyoruz
system.debug(strJson);


Account:{Name=Ali,
AnnualRevenue=100000, 
Phone=212457896}

case cs=[Select id,caseNumber,Subject,description,contact.FirstName,contact.name,account.name from case where contactId!=null and accountId!=null limit 1];
string str=JSON.serialize(cs);
system.debug(str);


list<case> cs1=[Select id,caseNumber,Subject,description,contact.FirstName,contact.name,account.name from case where contactId!=null and accountId!=null limit 2];
string str1=JSON.serialize(cs1);
system.debug(str1);
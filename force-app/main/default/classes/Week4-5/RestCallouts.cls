public class RestCallouts {
    public static HttpResponse getUsers(){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/users');
        request.setMethod('GET');
        Http http = new Http();
        HttpResponse response = http.send(request);
        if(response.getStatusCode()==200){
            String jsonString = response.getBody();
            System.debug(jsonString);

           users usr = (users)JSON.deserialize(jsonString, users.class);//! Bu işleme type casting deniyor. Gelen json clasını kendi user calsımıza çevirdik.
           List<Dummy_Users__c> lstUser = new List<Dummy_Users__c>();
            for (UserWrapper us : usr.users){//wrapper class 2us' oldu artık
                Dummy_Users__c user = new Dummy_Users__c();
                user.Name = String.valueOf(us.id);
                user.FirstName__c = us.firstName;
                user.LastName__c = us.lastName;
                user.Age__c = us.age;
                user.Gender__c = us.gender;
                user.Email__c = us.email;
                user.Phone__c = us.phone;
                user.Password__c = us.password;
                user.UserName__c = us.username;
                user.BirthDate__c = Date.valueOf(us.birthDate);
                user.Image__c = us.image;
                lstUser.add(user);
            }
            insert lstUser;
        }
        
        return response;
    }

    public class users{
            public list<UserWrapper> users;
        }
        public class UserWrapper{
            public integer id;
            public string firstName;
            public string lastName;
            public integer age;
            public string gender;
            public string phone;
            public string email;
            public string password;
            public string username;
            public string birthDate;
            public string image ;
        }


}
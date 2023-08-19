import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

export default class GetObjectDynamic extends LightningElement {
/*Soru:
Salesforce Lightning Web Components (LWC) kullanarak bir bileşen geliştiriyorsunuz. Bu bileşen, kullanıcının bir nesne adını girmesine ve ardından "Get Object" düğmesine tıklamasına olanak tanır. Ardından, belirtilen nesnenin bilgilerini dinamik olarak çekerek sonuçları görüntüler. Aşağıdaki özellikleri içeren kodlarınızı yazınız

Kullanıcıya nesne adını girebileceği bir metin girişi alanı sunulmalıdır.
"Get Object" düğmesi ile nesne bilgileri çekilmelidir.
Nesne bilgileri JSON formatında görüntülenmeli ve görünüm düzenlemeleri yapılmalıdır.
Eğer bir hata oluşursa, hata mesajı görüntülenmelidir.
Bileşeninizi tasarlayın ve HTML ve JavaScript kodlarınızı yazın. Ayrıca, bu kodları analiz ederek bileşenin nasıl çalıştığını ve her bir kod parçasının ne amaçla kullanıldığını açıklayınız.
Salesforce Lightning Web Components (LWC) kullanarak bir bileşen geliştiriyorsunuz. Bu bileşen, kullanıcının bir nesne adını girmesine ve ardından "Get Object" düğmesine tıklamasına olanak tanır. Ardından, belirtilen nesnenin bilgilerini dinamik olarak çekerek sonuçları görüntüler. Aşağıdaki özellikleri içeren kodlarınızı yazınız

Kullanıcıya nesne adını girebileceği bir metin girişi alanı sunulmalıdır.
"Get Object" düğmesi ile nesne bilgileri çekilmelidir.
Nesne bilgileri JSON formatında görüntülenmeli ve görünüm düzenlemeleri yapılmalıdır.
Eğer bir hata oluşursa, hata mesajı görüntülenmelidir.
Bileşeninizi tasarlayın ve HTML ve JavaScript kodlarınızı yazın. Ayrıca, bu kodları analiz ederek bileşenin nasıl çalıştığını ve her bir kod parçasının ne amaçla kullanıldığını açıklayınız.
*/
searchInfo;
result;

    @wire(getObjectInfo, {objectApiName:"$searchInfo"})
    objectHandler({data, error}){
        if (data) {
            this.result = JSON.stringify(data, null, 2);
            
        }if (error) {
            this.result= error.body.message;
            console.error(error);
            
        }
    }

    handleClick() {
        this.searchInfo = this.refs.ObjectInfo.value;
        console.log(this.searchInfo);
    }
}
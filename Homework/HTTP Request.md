## HTTP Request Methods

# HTTP Nedir?
HTTP ya da uzun uzun Hypertext Transfer Protocol istemci ile host için ihtiyaç duyulan protokolleri sağlar. Bu protokoller bilgiye nasıl erişileceğini, bilginin nasıl transfer edileceğini, gösterileceğini ve belirli bir komut geldiğinde nasıl hareket edileceğini belirler.

* GET :  Get Metodu sunucudaki kaynaklara erişmek için kullanılır. GET metodu ile URL üzerinden verileri gönderilebilir. Avantjlı yanı; URL üzerinden veriler arasında gezinilebilir, veriler üzerinde değişiklik yapılıp tekrar gönderebilir, hatta “geri” tuşuna basılarak önceki sorgular tekrar gönderilebilir.URL’lerin ekranda görüntüleniyor olması güvenlik açısından problem yaratmaktadır. Bu yüzden hassas bilgiler GET ile gönderilmemelidir.

* POST : Bu metod ile sunucuya veri yazdırabiliriz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.

* PUT : Bu metodu kullanarak servis sağlayıcı üzerindeki kaynağı (kaynağın ID’sini göndermek şartıyla) güncelleyebilirsiniz veya yeni bir kaynak oluşturabilirsiniz.

* HEAD : Bu metod, servis sağlayıcısı hakkında bilgi almak için kullanılabilir. GET metoduna benzer, fakat bu metodu kullanarak istek yaptığımız zaman dönen cevapta mesaj gövdesi bulunmaz.

* DELETE : Bu metod ile sunucu üzerindeki herhangi bir veri silinebilir. Bu sebeple, Delete Metod’nun kullanılabilir olması güvenlik açısından problem oluşturabilir.

* CONNECT : Bu metod ile sunucu üzerindeki herhangi bir veri silinebilir. Bu sebeple, Delete Metod’nun kullanılabilir olması güvenlik açısından problem oluşturabilir.

* OPTIONS : Bu metod, iletişim kurmuş olduğumuz bir kaynağın, kullanılabilecek http metodlarını sunucudan sorgulamak ve kaynağın iletim seçeneklerini tanımlamak için kullanılır.

* TRACE : Sunucuya gönderilen isteğin istemciden sunucuya ulaşana kadar uğradığı tüm noktaları ve eğer sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve istek üzerinde yapılan değişikliklerin tespitini sağlamak için kullanılır.

* PATCH : Bu metod kısmi kaynakları güncellemek için kullanılabilir. Örneğin, kaynağın yalnızca bir alanını güncellemeniz gerektiğinde, PUT yöntemiyle eksiksiz bir kaynak gösterimi göndermek yavaş olabilir ve daha fazla bant genişliği kullanır.
 
*  SEARCH : Bir dizinin altındaki kaynakları sorgulamak için kullanılır.
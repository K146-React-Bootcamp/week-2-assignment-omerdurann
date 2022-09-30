## Homework

## HTTP Status
HTTP 1990 yılından beri dünya çapında ağ üzerinde kullanılan bir iletişim protokolüdür. HTTP‘nin açılımı “Hyper Text Transfer Protocol” yani “Hiper Metin Transfer Protokolü“dür. HTTP protokolü ağ üzerinden web sayfalarının görüntülenmesini sağlayan protokoldür. HTTP protokolü istemci (PC) ile sunucu (server) arasındaki alışveriş kurallarını belirler. 

HTTP durum kodları ise bir cevabın başarılı mı yoksa başarısız mı olduğunu anlamamıza yardımcı olan kodlardır.HTTP durum kodları 5 farklı grup içerisinde toplanabilir. 

# Bilgilendirici HTTP Durum Kodları (100-199) ;

* HTTP 100 Continue (Devam) : Tarayıcının sunucuya gönderdiği istek başlığının sunucu tarafından alındığını ve istek gövdesinin de alınmaya hazır olduğu anlamına gelir.

* HTTP 101 Switching Protocol (Anahtarlama Protokolü) : Tarayıcının sunucudan protokol değiştirmesini istediği ve sunucunun da bu isteği kabul ettiği anlamına gelir.

* HTTP 102 Processing "WebDAV" (İşleme) : Bu HTTP durum kodu , sunucunun isteği aldığını ve işlediğini, ancak henüz bir yanıt olmadığını gösterir. 

* HTTP 103 Early Hits (Erken İpuçları) : Son istek iletisinden önce bazı yanıt başlıklarını döndürdüğü anlamına gelir.

# Başarılı HTTP Durum Kodları (200-299) 

* HTTP 200 OK (Tamam) : Tarayıcı ve sunucu tarafında her şeyin yolunda olduğu anlamına gelen ideal durum kodudur.

* HTTP 201 Created (Oluşturuldu) : Sunucu tarafından isteğin yerine getirildiği ve yeni bir kaynak oluşturulduğu anlamına gelir.

* HTTP 202 Accepted (Kabul Edildi) : Sunucunun tarayıcıdan gelen isteği kabul ettiği ve işleme koyduğu anlamına gelir. İstek olumlu ya da olumsuz sonuçlanabilir.

* HTTP 203 Non-Authoritative Information ( Yetkili Olmayan Bilgiler) : Kaynak sunucudan 200 durum kodu alınmasına rağmen işlem sırasında kaynağın yanıtı değiştirdiği anlamına gelir.

* HTTP 204 No Content (İçerik Yok) : Sunucunun isteği başarıyla işlediği fakat herhangi bir içerik döndürmeyeceğini ifade eder.

* HTTP 205 Reset Content (İçeriği Sıfırla) : 204 durum kodu gibi isteğin başarıyla işlendiği fakat herhangi bir içeriğin döndürülmeyeceği anlamına gelir. Ancak tarayıcının belge görünümünü sıfırlaması gerekir.

* HTTP 206 Partial Content (Kısmi İçerik): Tarayıcının durdurulmuş indirmelere devam etmesini ve indirmeleri birden fazla akışa ayırmasını sağlayan durum kodudur.

# Yönlendirme HTTP Durum Kodları (300-399)

* HTTP 300 Multiple Choice (Çoklu Seçenek): Tarayıcının isteğini yerine getirmek için sunucunun birden fazla olası kaynağa sahip olduğu ve bu kaynaklar arasında seçim yapması gerektiği anlamına gelir.

* HTTP 301 Moved Permanently (Kalıcı Olarak Taşındı) : Bir web sayfası ya da bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.

* HTTP 302 (Found) Previously[Moved Temporarily] (Bulundu): Bir web sayfası ya da bir kaynağın geçici olarak fa rklı bir kaynağa taşındığını ifade eden durum kodudur.

* HTTP 303 See Other (Diğerlerini Gör) : POST, PUT ya da DELETE aracılığıyla tarayıcının talep ettiği kaynağın bulunduğu anlamına gelir. GET kullanarak kaynağı almak için farklı bir URL’ye istekte bulunulması gerekir.

* HTTP 304 Not Modified (Değiştirilmedi) : Tarayıcıya önbelleğinde depolanan kaynakların değişmediğini belirten durum kodudur.

* HTTP 307 Temporary Redirect (Geçici Yönlendirme) : Bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 302 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.

* HTTP 308 Permanent Redirect (Kalıcı Yönlendirme) : Bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 301 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.

# İstemci Hata HTTP Durum Kodları (400-499)

* HTTP 400 Bad Request (Hatalı İstek) : Sunucunun tarayıcıdaki hata nedeniyle isteği işleyemediği anlamına gelen durum kodudur.

* HTTP 401 Unauthorized (Yetkisiz) : Kullanıcının erişmek istediği kaynak için geçerli kimlik doğrulama bilgilerine sahip olmadığında döndürülen durum kodudur.

* HTTP 403 Forbidden (Yasak): İlgili kaynağa erişimin yasak olduğu durumlarda döndürülen durum kodudur.

* HTTP 404 Not Found (Bulunamadı) : İstenen kaynağın sunucuda bulunmadığını ifade eden durum kodudur. En sık görülen HTTP durum kodlarının başında gelmektedir.

* HTTP 405 Method Not Allowed (Yönetme İzin Vermiyor) : İstenilen kaynak için gerçekleştirilen istek yöntemi desteklenmediğinde döndürülen durum kodudur.

* HTTP 409 Conflict (Çatışma): Bir uyuşmazlık ya da çakışma olması nedeniyle isteğin tamamlanamadığı anlamına gelen durum kodudur.

* HTTP 410 Gone (Gitti) : İstenen kaynağın kalıcı olarak o sunucuda bulunmadığı anlamına gelen durum kodudur.

* HTTP 429 Too Many Requests (Çok Fazla İstek) : Kullanıcı belirli  bir süre içerisinde çok fazla istek gönderdiğinde sunucu tarafından hız sınırlayıcı oluşturulduğu anlamına gelen durum kodudur.

# Sunucu Hata HTTP Durum Kodları (500-599)

* HTTP 500 Internal Server Error (Dahili Sunucu Hatası) : Sunucudaki sorun nedeniyle isteğin tamamlanamadığı durumlarda görülen durum kodudur.

* HTTP 501 Not Implemented (Uygulanmadı) : Sunucunun isteği yönetemediği ya da işlevleri destekleyemediği anlamında gelen durum kodudur.
 
* HTTP 502 Bad Gateway (Sunucu Hatası): Sunucunun başka bir sunucuya istek gönderdikten sonra geçersiz yanıt aldığı anlamına gelen durum kodudur.

* HTTP 503 Service Unavailable (Hizmet Kullanılamıyor) : Sunucunun geçici olarak hizmet veremediği ve istekleri işleyemediği durumlarda görülen durum kodudur.

* HTTP 504 Gateway Timeout (Geçici Zaman Aşımı) : Bir isteği işlerken bir sunucunun diğer sunucudan yanıt beklerken isteğin zaman aşımına uğraması durumunda görülen durum kodudur.

# Bazı kodlar ve anlamları bu şekildeydi daha detaylı bilgiler için aşağıdaki linkleri ziyaret edebiliriz. :D
 
* https://www.restapitutorial.com/httpstatuscodes.html

* https://zeo.org/tr/kaynaklar/blog/http-durum-kodlari-rehberi

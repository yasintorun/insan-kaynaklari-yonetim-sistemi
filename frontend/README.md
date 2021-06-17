# HRMS Projesinin Frontend kısmı

<li>Kayıt ol, giriş yap, iş ilanı oluştur sayfaları eklendi.</li>
<li>Kullanıcı iş ilanı oluşturabilir ve yayınlayabilir.</li>
<li>Şuanlık herhangi bir kontrol yapılmıyor.</li>
<li>İş ilanları listenebilir durumda.</li>


<br><br><br>
## Zengin Metin Editörü
Projeye Zengin metin eklemeye yarayan editör eklendi.<br><br>
Editör [Draft.js](https://draftjs.org/) kullanılarak oluşturulmuştur.
Ayrıca draftjs den html dosyasına dönüştürebilmek için [Draft export Html](https://www.npmjs.com/package/draft-js-export-html) eklentisi kullanılmıştır.

<br><br>

<strong>İş ilanı oluşturma sayfası</strong>
![ui](https://raw.githubusercontent.com/yasintorun/insan-kaynaklari-yonetim-sistemi/Dev3/frontend/editor.PNG)

<br><br>
<strong>İş ilanının detay sayfası</strong>
![ui](https://raw.githubusercontent.com/yasintorun/insan-kaynaklari-yonetim-sistemi/Dev3/frontend/output.PNG)

<br><br>

### ToDo
<li>Kullanıcı Fotograf yükleyebilsin.</li>
<li>Butonlar kelimenin özelliklerine göre aktifliğini değiştirsin.(Kullanıcı <strong>bold</strong> kelime içerisinde ise <strong>bold butonu</strong> aktif durumda olsun.)</li>

<br><br><br><br>

# Projeye Editörü Nasıl Eklerim?

Öncelikle aşağıdaki paketleri projeye kuralım 

    	npm install draft-js
    	npm install draft-js-export-html


<strong>Src</strong> klasörü içerisine <strong>component</strong> klasörü ve <strong>component</strong> klasörü içerisinede <strong>RichTextEditor</strong> klasörü oluşturun.

[Buradaki ](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/tree/Dev3/frontend/src/components/RichTextEditor) <strong>RichTextEditor.jsx</strong> ve <strong>editor.css</strong> dosyalarını indirip editör klasörüne ekleyiniz. 

#### Not: Ben projede semantic + bootstrap kullanıyorum. Siz hangi kütüphaneleri kullanıyorsanız Button kodlarını ona göre değiştirin.

  <br>
Daha sonra kullanmak istediğiniz bileşene bir handle event fonksiyonu eklememiz gerekiyor. Bu event editördeki her değişiklikte çalışacak olan event fonksiyonudur.

```javascript
   const handleRichTextEditorInput = (value) => {
    formik.setFieldValue("description", value)
  }
 ```
 
##### "description" kısmını kendinize göre ayarlayınız. (formik.values - iş ilanı açıklama değeri)


Daha sonra Editörü, eklemek istediğiniz bileşenin uygun yerine şu kodları yazıyoruz.
```javascript
    <RichTextEditor textValue={handleRichTextEditorInput} />
 ```

##### Artık projenize Zengin metin editörü eklenmiş oldu. Herhangi bir bileşene ekleyebilmek için bileşende yukarıdaki 2 kod parçası olmak zorunda. <br>

#### Veritabanı kayırlarına baktığınızda html elementi şeklinde kaydediliyor. Bunu çıktı olarak gösterebilmek için React'ın dangerouslySetInnerHTML özelliğini kullanıcaz.
Html kaydını ekranda gösterebilmek için
```
   <div dangerouslySetInnerHTML={{ __html: jobAdvertisement.description}} />
```
Bu yapıda yazdığınızda, description html olarak okunur. Bizimde istediğimiz bu idi. <br>
<strong>Not:</strong> Bu belkide güvenlik açığına sebep olabilir. Çözümü vardır elbet :)

#### Editörde 6 özellik vardır. Ek olarak Fotograf ekleme olayını yapmaya çalışacağım. Siz editörü kendinize göre düzenleyebilirsiniz.

##### Eğer projeyi beğendiyseniz yıldız verebilirsiniz.

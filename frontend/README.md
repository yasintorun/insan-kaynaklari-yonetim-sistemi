# HRMS Projesinin Frontend kısmı

### Req19 isteri
- Özgeçmiş kısmını tek sayfada oluşturdum. Kullanıcı Bu sayfada bilgilerini girebilir, güncelleyebilir veya silebilir(silme kısmı şuanda yok).

![req19](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/blob/Dev3/frontend/showcase/cv.PNG)
![req19](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/blob/Dev3/frontend/showcase/editCv.PNG)

<br>
<br>

### Req20 isteri
- Özgeçmiş sayfasındaki her bilgi alanını MessageBox olarak component şeklinde yazdım. Bu component sayesinde bilgi gösterme ve düzenleme eklenebliyor.
- Özgeçmiştekine benzer bir durumu req20 isterindeki admin bilgi sayfasına uyguladım.

![req20](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/blob/Dev3/frontend/showcase/Ads%C4%B1z.png)

##### Video: [Kısa işleyiş videosu](https://streamable.com/l5jirf)


<br>
<br>


### Req22, Req23 İş ilanı filtreleme ve Sayfalama
- Bu iki isteri aslında farklı yapmıştım. Fakat sayfalama kısmı filtreleme ile aynı anda çalışmıyor. Yani filtreleme yaptıktan sonra kullanıcı sayfa değiştirdiginde filtreleme işlemleri sıfırlanıyor. Bu durumu çözmek için filtreleme işlemlerini backend tarafına aldım. Hem filtreleme hem sayfalama kısmı aynı metod içerisinde tanımlı.
##### Method:
```java
@Query("Select j from JobAdvertisement j where ((:#{#filter.cityId}) IS NULL OR j.city.id IN (:#{#filter.cityId}))"
			+ "and ((:#{#filter.jobPositionId}) IS NULL OR j.jobPosition.id IN (:#{#filter.jobPositionId}))"
			+ "and ((:#{#filter.workStyleId}) IS NULL OR j.workStyle.id IN (:#{#filter.workStyleId}))"
			+ "and ((:#{#filter.workTimeStyleId}) IS NULL OR j.workTimeStyle.id IN (:#{#filter.workTimeStyleId}))")
	public Page<JobAdvertisement> getFilteringAndPage(@Param("filter") JobAdvertFilterOption filterOption, Pageable pageable);
   ```
   Daha iyi bir yöntem bulundugunda değiştirilecek. Şuanda çözüm olarak bunu üretebildim.
   Method tamamne sql bilgisine dayalı. Eğer filter bilgileri null ise tüm bilgiler seçili gibi işlem yap. Ayrıca filter elemanları array olarak geliyor o yüzden IN operatörü ile çoklu karşılaştırma yapıyoruz.
   <br><br>
   ![req22_23](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/blob/Dev3/frontend/showcase/isilani.PNG)
   ![req22_23](https://github.com/yasintorun/insan-kaynaklari-yonetim-sistemi/blob/Dev3/frontend/showcase/isilani2.PNG)
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Rhenvox",
  description: "Rhenvox Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni",
};

export default function KVKKPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
        <p className="text-rhenvox-muted">Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Veri Sorumlusu</h2>
        <p className="mb-4">
          İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, 
          veri sorumlusu sıfatıyla Rhenvox tarafından, kişisel verilerinizin işlenmesine ilişkin 
          bilgilendirmenizi sağlamak amacıyla hazırlanmıştır.
        </p>
        <div className="bg-rhenvox-surface/50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Şirket Bilgileri:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Şirket Adı:</strong> Rhenvox</li>
            <li><strong>İngiltere Şirket Numarası:</strong> 16423845</li>
            <li><strong>İngiltere Adresi:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Türkiye Ofisi:</strong> İstanbul, Türkiye</li>
            <li><strong>İletişim:</strong> +44 7845 722801</li>
            <li><strong>E-posta:</strong> info@rhenvox.com</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. İşlenen Kişisel Veriler</h2>
        <h3 className="text-lg font-medium mb-3">2.1 Doğrudan Sağladığınız Bilgiler</h3>
        <p className="mb-4">Hizmetlerimizi kullandığınızda veya bizimle iletişime geçtiğinizde topladığımız veriler:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Kimlik Verileri:</strong> Ad, soyad, e-posta adresi, telefon numarası</li>
          <li><strong>İletişim Verileri:</strong> Posta adresi, e-posta adresi, telefon numarası</li>
          <li><strong>Müşteri İşlem Verileri:</strong> Hizmet talepleri, proje gereksinimleri, teknik özellikler</li>
          <li><strong>Mesajlaşma Verileri:</strong> İletişim kayıtları, sorular ve diğer yazışmalar</li>
          <li><strong>Pazarlama Verileri:</strong> Tercihlere ilişkin bilgiler</li>
        </ul>

        <h3 className="text-lg font-medium mb-3">2.2 Otomatik Olarak Toplanan Bilgiler</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri, işletim sistemi</li>
          <li><strong>Kullanım Verileri:</strong> Web sitesi etkileşimleri, ziyaret edilen sayfalar, geçirilen süre</li>
          <li><strong>Çerez Verileri:</strong> Web sitesi performansı ve kullanıcı davranış analizleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Hizmet Sunumu:</strong> Yazılım geliştirme, yapay zeka araştırması ve tasarım hizmetlerinin sağlanması</li>
          <li><strong>İletişim Yönetimi:</strong> Sorularınıza yanıt vermek, destek sağlamak ve iş ilişkilerimizi yönetmek</li>
          <li><strong>Sözleşme Yönetimi:</strong> Sözleşmelerin müzakeresi, imzalanması ve yerine getirilmesi</li>
          <li><strong>İş Geliştirme:</strong> İhtiyaçlarınızı anlamak ve hizmetlerimizi geliştirmek</li>
          <li><strong>Hukuki Yükümlülük:</strong> Yasal yükümlülüklerin yerine getirilmesi</li>
          <li><strong>Pazarlama Faaliyetleri:</strong> Rızanız dahilinde pazarlama iletişimi</li>
          <li><strong>Web Sitesi Geliştirme:</strong> Kullanımın analiz edilmesi ve işlevselliğin iyileştirilmesi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
        <p className="mb-4">Kişisel verileriniz KVKK'nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Açık Rıza:</strong> Belirli işleme faaliyetleri için açık rızanızın alınması</li>
          <li><strong>Sözleşmenin İfası:</strong> Tarafınızla akdedilen sözleşmenin ifası için zorunlu olması</li>
          <li><strong>Hukuki Yükümlülük:</strong> Kanunlarda öngörülen yükümlülüklerin yerine getirilmesi</li>
          <li><strong>Meşru Menfaat:</strong> İş geliştirme, iletişim ve hizmet iyileştirme faaliyetleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Kişisel Verilerin Paylaşılması</h2>
        <p className="mb-4">Kişisel verileriniz aşağıdaki durumlar ve kişilerle paylaşılabilir:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Hizmet Sağlayıcılar:</strong> Bulut hosting, analitik araçlar, iletişim araçları sağlayan üçüncü taraf firmalar</li>
          <li><strong>İş Ortakları:</strong> Ortak projeler için açık rızanız dahilinde</li>
          <li><strong>Kanunen Yetkili Kişi ve Kurumlar:</strong> Mahkemeler, savcılıklar, icra müdürlükleri gibi yetkili makamlar</li>
          <li><strong>Grup Şirketleri:</strong> İş süreçlerinin yürütülmesi amacıyla</li>
        </ul>
        <p className="mb-4">
          <strong>Yurtdışı Aktarımlar:</strong> Verileriniz İngiltere ofisimizde işlenebilir. 
          Yurtdışı veri aktarımları için uygun güvenlik önlemleri alınmaktadır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Kişisel Verilerin Saklanma Süresi</h2>
        <p className="mb-4">Kişisel verileriniz aşağıdaki kriterler doğrultusunda saklanmaktadır:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>İşlenme amacının gerektirdiği süre boyunca</li>
          <li>Yasal, muhasebe veya raporlama gerekliliklerinin zorunlu kıldığı süre boyunca</li>
          <li>Uyuşmazlıkların çözülmesi ve anlaşmaların uygulanması için gerekli süre boyunca</li>
        </ul>
        <p className="mb-4">
          Genel olarak, iş ilişkimizin sona ermesinden sonra 10 yıl süreyle iş iletişim bilgileri saklanmaktadır. 
          Bu süre, ilgili mevzuatta öngörülen saklama yükümlülüklerine göre değişiklik gösterebilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
        <p className="mb-4">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Bilgi Talep Etme:</strong> Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li><strong>Bilgi Talep Etme:</strong> İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li><strong>Öğrenme:</strong> Yurt içi/dışında aktarıldığı üçüncü kişileri bilme</li>
          <li><strong>Düzeltme:</strong> Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
          <li><strong>Silme:</strong> Belirli şartlarda verilerin silinmesini isteme</li>
          <li><strong>Aktarım:</strong> Düzeltme ve silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
          <li><strong>İtiraz:</strong> Otomatik sistemlerle analiz sonucu aleyhte sonuç çıkmasına itiraz etme</li>
          <li><strong>Tazminat:</strong> Zararın giderilmesini talep etme</li>
        </ul>
        <p className="mb-4">
          Bu haklarınızı kullanmak için info@rhenvox.com adresine yazılı olarak başvurabilirsiniz. 
          Başvurunuz en geç 30 gün içinde yanıtlanacaktır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Veri Güvenliği</h2>
        <p className="mb-4">
          Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki teknik ve idari tedbirleri almaktayız:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Verilerin iletim ve depolama esnasında şifrelenmesi</li>
          <li>Düzenli güvenlik değerlendirmeleri ve güncellemeleri</li>
          <li>Erişim kontrolleri ve kimlik doğrulama mekanizmaları</li>
          <li>Personel eğitimleri ve gizlilik sözleşmeleri</li>
          <li>Olay müdahale prosedürleri</li>
          <li>Fiziksel güvenlik önlemleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Çerezler (Cookies)</h2>
        <p className="mb-4">
          Web sitemiz, işlevselliği geliştirmek ve kullanımı analiz etmek için çerezler kullanmaktadır. 
          Çerez ayarlarını tarayıcı tercihleriniz üzerinden kontrol edebilirsiniz. 
          Çerez kullanımımız hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Üçüncü Taraf Bağlantıları</h2>
        <p className="mb-4">
          Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. 
          Bu harici sitelerin gizlilik uygulamalarından sorumlu değiliz. 
          Kişisel bilgi vermeden önce gizlilik politikalarını incelemenizi öneririz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Çocukların Gizliliği</h2>
        <p className="mb-4">
          Hizmetlerimiz 18 yaş altındaki kişilere yönelik değildir. 
          18 yaş altındaki kişilerden bilerek kişisel veri toplamıyoruz. 
          Bu tür verileri topladığımızı fark edersek, derhal silme adımları atarız.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Aydınlatma Metninde Değişiklikler</h2>
        <p className="mb-4">
          Bu aydınlatma metnini zaman zaman uygulamalarımızdaki değişiklikleri veya yürürlükteki 
          yasaları yansıtmak için güncelleyebiliriz. Önemli değişiklikler olduğunda, 
          güncellenmiş politikayı web sitemizde yayınlayarak ve "Son Güncelleme" tarihini 
          değiştirerek size bildirimde bulunacağız.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. İletişim</h2>
        <p className="mb-4">
          Bu aydınlatma metni veya veri işleme uygulamalarımız hakkında sorularınız varsa, 
          bizimle iletişime geçin:
        </p>
        <div className="bg-rhenvox-surface/50 p-4 rounded-lg mb-4">
          <ul className="space-y-1 text-sm">
            <li><strong>E-posta:</strong> info@rhenvox.com</li>
            <li><strong>Telefon:</strong> +44 7845 722801</li>
            <li><strong>Adres:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Türkiye Ofisi:</strong> İstanbul, Türkiye</li>
          </ul>
        </div>
        <p className="mb-4">
          Ayrıca, veri koruma haklarınızın ihlal edildiğini düşünüyorsanız, 
          Kişisel Verileri Koruma Kurumu'na (KVKK) şikayette bulunma hakkınız bulunmaktadır. 
          Daha fazla bilgi için www.kvkk.gov.tr adresini ziyaret edebilirsiniz.
        </p>
      </section>

      <section className="bg-rhenvox-surface/30 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">⚖️ Uygulanacak Hukuk</h3>
        <p className="text-sm text-rhenvox-muted">
          Bu aydınlatma metni Türkiye Cumhuriyeti kanunlarına tabidir. 
          Bu metin ile ilgili herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri ve icra müdürlükleri yetkilidir.
        </p>
      </section>
    </div>
  );
} 
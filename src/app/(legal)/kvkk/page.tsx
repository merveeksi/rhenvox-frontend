import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Rhenvox LTD KVKK aydınlatma metni.",
  path: "/kvkk",
});

export default function KVKKPage() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-rhenvox-text">KVKK Aydınlatma Metni</h1>
        <p className="text-rhenvox-muted">Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Veri Sorumlusu</h2>
        <p className="mb-4">
          İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
          veri sorumlusu sıfatıyla Rhenvox LTD tarafından, kişisel verilerinizin işlenmesine ilişkin
          bilgilendirmenizi sağlamak amacıyla hazırlanmıştır.
        </p>
        <div className="mb-4 rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-4">
          <h3 className="font-semibold mb-2">Şirket Bilgileri:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Şirket Adı:</strong> Rhenvox LTD</li>
            <li><strong>İngiltere Şirket Numarası:</strong> 16423845</li>
            <li><strong>Tescilli merkez (Registered Office):</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Faaliyet yeri:</strong> Türkiye&apos;den faaliyet göstermektedir</li>
            <li><strong>İletişim:</strong> +44 7845 722801</li>
            <li><strong>E-posta:</strong> hello@rhenvox.com</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. İşlenen Kişisel Veriler</h2>
        <h3 className="text-lg font-medium mb-3">2.1 Doğrudan Sağladığınız Bilgiler</h3>
        <p className="mb-4">
          Mevcut web sitesinde iletişim formu, üye hesabı veya bülten kaydı bulunmamaktadır.
          Rhenvox ile e-posta, telefon veya WhatsApp üzerinden iletişime geçerseniz, göndermeyi tercih ettiğiniz bilgiler alınabilir. Örneğin:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Kimlik Verileri:</strong> Ad, soyad, e-posta adresi, telefon numarası</li>
          <li><strong>İletişim Verileri:</strong> Posta adresi, e-posta adresi, telefon numarası</li>
          <li><strong>Müşteri İşlem Verileri:</strong> Hizmet talepleri, proje gereksinimleri, teknik özellikler</li>
          <li><strong>Mesajlaşma Verileri:</strong> İletişim kayıtları, sorular ve diğer yazışmalar</li>
        </ul>
        <p className="mb-4">
          Bu yazışmalar ilgili e-posta, telefon veya mesajlaşma sağlayıcısı üzerinden iletilir.
          İşbu metin web sitesinin uyguladığı işlemleri açıklar; söz konusu sağlayıcıların kendi veri işleme faaliyetlerini tanımlamaz.
        </p>

        <h3 className="text-lg font-medium mb-3">2.2 Web Sitesi Uygulaması Tarafından Toplanan Bilgiler</h3>
        <p className="mb-4">
          Mevcut kurumsal web sitesi, uygulama düzeyinde analitik veya reklam izleme teknolojileri kullanmamaktadır.
          Uygulama içinde ziyaret edilen sayfalar, sayfada geçirilen süre veya benzer kullanım metrikleri kaydedilmemektedir.
        </p>
        <p className="mb-4">
          Bu açıklama uygulama ile sınırlıdır. Barındırma sağlayıcısı, içerik dağıtım ağı veya benzer altyapının
          bu siteden bağımsız olarak tutabileceği kayıtlara ilişkin bir beyan içermez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Hizmet Sunumu:</strong> Yazılım geliştirme ve ilgili ürün çalışmalarının sağlanması</li>
          <li><strong>İletişim Yönetimi:</strong> Sorularınıza yanıt vermek, destek sağlamak ve iş ilişkilerimizi yönetmek</li>
          <li><strong>Sözleşme Yönetimi:</strong> Sözleşmelerin müzakeresi, imzalanması ve yerine getirilmesi</li>
          <li><strong>İş Geliştirme:</strong> İhtiyaçlarınızı anlamak ve hizmetlerimizi geliştirmek</li>
          <li><strong>Hukuki Yükümlülük:</strong> Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
        <p className="mb-4">Kişisel verileriniz KVKK&apos;nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
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
          <li><strong>Hizmet Sağlayıcılar:</strong> Sizinle iletişim kurmak veya şirketi işletmek için gerekli olduğu ölçüde e-posta veya telefon gibi sağlayıcılar</li>
          <li><strong>İş Ortakları:</strong> Ortak projeler için açık rızanız dahilinde</li>
          <li><strong>Kanunen Yetkili Kişi ve Kurumlar:</strong> Mahkemeler, savcılıklar, icra müdürlükleri gibi yetkili makamlar</li>
        </ul>
        <p className="mb-4">
          Mevcut kurumsal web sitesi, ziyaretçi verilerini analitik veya reklam tedarikçilerine göndermemektedir.
        </p>
        <p className="mb-4">
          <strong>İşleme yeri:</strong> Bize gönderdiğiniz kişisel veriler, Türkiye&apos;den faaliyet gösteren Rhenvox çalışanları tarafından erişilebilir.
          Şirket Birleşik Krallık&apos;ta tescillidir.
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
        <p className="mb-4">KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
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
          Bu haklarınızı kullanmak için hello@rhenvox.com adresine yazılı olarak başvurabilirsiniz.
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
          <li>Erişim kontrolleri ve kimlik doğrulama mekanizmaları</li>
          <li>Olay müdahale prosedürleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Çerezler (Cookies)</h2>
        <p className="mb-4">
          Mevcut kurumsal web sitesi reklam veya analitik çerezleri uygulamamakta ve çerez onay bandı göstermemektedir.
          Dil ve görünüm tercihleri, uygulama çerezi olarak değil, tarayıcıdaki localStorage ile saklanmaktadır.
        </p>
        <p className="mb-4">
          Ayrı bir Çerez Politikası yayımlanmamaktadır. Bu bölüm, barındırma veya ağ altyapısının uygulamadan bağımsız olarak
          oluşturabileceği çerezler hakkında bir beyan içermez.
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
          güncellenmiş politikayı web sitemizde yayınlayarak ve &quot;Son Güncelleme&quot; tarihini
          değiştirerek size bildirimde bulunacağız.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. İletişim</h2>
        <p className="mb-4">
          Bu aydınlatma metni veya veri işleme uygulamalarımız hakkında sorularınız varsa,
          bizimle iletişime geçin:
        </p>
        <div className="mb-4 rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-4">
          <ul className="space-y-1 text-sm">
            <li><strong>E-posta:</strong> hello@rhenvox.com</li>
            <li><strong>Telefon:</strong> +44 7845 722801</li>
            <li><strong>Adres:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom (tescilli merkez)</li>
            <li><strong>Faaliyet yeri:</strong> Türkiye&apos;den faaliyet göstermektedir</li>
          </ul>
        </div>
        <p className="mb-4">
          Ayrıca, veri koruma haklarınızın ihlal edildiğini düşünüyorsanız,
          Kişisel Verileri Koruma Kurumu&apos;na (KVKK) şikayette bulunma hakkınız bulunmaktadır.
          Daha fazla bilgi için www.kvkk.gov.tr adresini ziyaret edebilirsiniz.
        </p>
      </section>

      <section className="rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-6">
        <h3 className="text-lg font-semibold mb-3">⚖️ Uygulanacak Hukuk</h3>
        <p className="text-sm text-rhenvox-muted">
          Bu aydınlatma metni Türkiye Cumhuriyeti kanunlarına tabidir.
          Bu metin ile ilgili herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri ve icra müdürlükleri yetkilidir.
        </p>
      </section>
    </div>
  );
}
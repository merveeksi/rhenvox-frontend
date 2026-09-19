import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Rhenvox LTD kurumsal internet sitesi ve doğrudan iş iletişimi için KVKK aydınlatma metni.",
  path: "/kvkk",
});

export default function KVKKPage() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-rhenvox-text">KVKK Aydınlatma Metni</h1>
        <p className="text-rhenvox-muted">Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Kapsam</h2>
        <p className="mb-4">
          Bu Aydınlatma Metni, Rhenvox kurumsal internet sitesinin ziyaret edilmesi ve Rhenvox LTD ile doğrudan iş
          iletişimi kurulması kapsamında gerçekleştirilen kişisel veri işleme faaliyetlerine ilişkindir. Rhenvox
          tarafından işletilen ayrı ürünler, müşteri uygulamaları veya ayrı sözleşmeler kapsamında yürütülen hizmetler,
          kendi aydınlatma metinlerine veya veri koruma hükümlerine tabi olabilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Veri Sorumlusu</h2>
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
        <h2 className="text-2xl font-semibold mb-4">3. İşlenen Kişisel Veriler</h2>
        <h3 className="text-lg font-medium mb-3">3.1 Doğrudan iş iletişimi</h3>
        <p className="mb-4">
          Mevcut web sitesinde iletişim formu, üye hesabı veya bülten kaydı bulunmamaktadır.
          Rhenvox ile e-posta, telefon veya WhatsApp üzerinden iletişime geçerseniz, göndermeyi tercih ettiğiniz bilgiler
          alınabilir. Örneğin ad, soyad, e-posta adresi, telefon numarası, şirket adı ve mesaj içeriği.
        </p>
        <p className="mb-4">
          Bu yazışmalar ilgili e-posta, telefon veya mesajlaşma sağlayıcısı üzerinden iletilir.
          İşbu metin web sitesinin uyguladığı işlemleri açıklar; söz konusu sağlayıcıların kendi veri işleme
          faaliyetlerini tanımlamaz.
        </p>

        <h3 className="text-lg font-medium mb-3">3.2 Web sitesi uygulaması</h3>
        <p className="mb-4">
          Mevcut kurumsal web sitesi, uygulama düzeyinde analitik veya reklam izleme teknolojileri kullanmamaktadır.
          Uygulama içinde ziyaret edilen sayfalar, sayfada geçirilen süre veya benzer kullanım metrikleri kaydedilmemektedir.
        </p>
        <p className="mb-4">
          Dil ve görünüm tercihleri tarayıcıdaki localStorage ile saklanabilir. Bu tercihler yalnızca bu sitedeki dil ve
          tema ayarlarının hatırlanması için kullanılır; pazarlama veya reklam izleme amacıyla kullanılmaz.
        </p>
        <p className="mb-4">
          Bu açıklama uygulama ile sınırlıdır. Barındırma sağlayıcısı, içerik dağıtım ağı veya benzer altyapının
          bu siteden bağımsız olarak tutabileceği kayıtlara ilişkin bir beyan içermez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. İşleme Amaçları ve Hukuki Sebepler</h2>
        <p className="mb-4">
          Doğrudan iş iletişimi kapsamında ilettiğiniz kişisel veriler, işlemenin niteliğine göre uygulanabilir hukuki
          sebebe dayanılarak işlenebilir. Bunlar, duruma göre şunları içerebilir:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması;</li>
          <li>veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi;</li>
          <li>bir hakkın tesisi, kullanılması veya korunması;</li>
          <li>ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla Rhenvox&apos;un meşru menfaatleri.</li>
        </ul>
        <p className="mb-4">
          Bu maddeler her işleme faaliyeti için aynı anda geçerli olmayabilir. Ücretli hizmetler ayrı yazılı sözleşmeye
          tabidir; o sözleşmeler kendi veri koruma hükümlerini içerebilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Kişisel Verilerin Paylaşılması</h2>
        <p className="mb-4">
          Kişisel veriler, sizinle iletişim kurmak veya şirketi işletmek için gerekli olduğu ölçüde (örneğin e-posta
          veya telefon sağlayıcıları), kanunların gerektirdiği hâllerde veya bir hakkın tesisi, kullanılması ya da
          korunması için paylaşılabilir.
        </p>
        <p className="mb-4">
          Mevcut kurumsal web sitesi, ziyaretçi verilerini analitik veya reklam tedarikçilerine göndermemektedir.
        </p>
        <p className="mb-4">
          E-posta, telefon, WhatsApp ve bu sitedeki sosyal ağ bağlantıları dâhil harici hizmetler, kendi hüküm ve
          gizlilik bildirimlerine tabidir. Rhenvox bu üçüncü taraf hizmetlerini kontrol etmez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Birleşik Krallık ve Türkiye</h2>
        <p className="mb-4">
          Rhenvox LTD Birleşik Krallık&apos;ta kayıtlıdır ve faaliyetleri Türkiye&apos;den yürütülmektedir. Rhenvox&apos;a
          doğrudan ilettiğiniz bilgiler, iş iletişiminin yürütülmesi kapsamında Birleşik Krallık ve Türkiye&apos;de
          erişilebilir veya işlenebilir. Kişisel verilerin yurt dışına aktarılmasına ilişkin mevzuatın uygulanmasının
          gerektiği durumlarda ilgili işlemler yürürlükteki veri koruma mevzuatına uygun olarak gerçekleştirilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Saklama Süresi</h2>
        <p className="mb-4">
          Kişisel veriler; bu aydınlatma metninde belirtilen amaçlar, iş iletişiminin yürütülmesi, varsa iş ilişkisinin
          yönetilmesi, yürürlükteki hukuki, mali veya raporlama yükümlülüklerinin yerine getirilmesi ile bir hakkın
          tesisi, kullanılması veya korunması için gerekli olduğu süre boyunca saklanır. Saklama süresi, verinin türüne
          ve işlenme sebebine göre değişebilir. Kişisel verinin işlenmesini gerektiren sebepler ortadan kalktığında
          veriler, uygulanabilir mevzuata uygun olarak silinir, yok edilir veya anonim hâle getirilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. KVKK Kapsamındaki Haklarınız</h2>
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
        <h2 className="text-2xl font-semibold mb-4">9. Veri Güvenliği</h2>
        <p className="mb-4">
          Rhenvox, işlenen kişisel verilerin niteliği ve ilgili risklerle orantılı teknik ve idari tedbirler almaya
          yönelik olarak hareket eder. Elektronik iletim veya saklama yöntemlerinin mutlak güvenlik sağladığı garanti
          edilemez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Çerezler ve Yerel Tercihler</h2>
        <p className="mb-4">
          Mevcut kurumsal web sitesi reklam veya analitik çerezleri uygulamamakta ve çerez onay bandı göstermemektedir.
          Dil ve görünüm tercihleri, uygulama çerezi olarak değil, tarayıcıdaki localStorage ile saklanmaktadır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Çocuklara İlişkin Veriler</h2>
        <p className="mb-4">
          Bu kurumsal internet sitesi iş ve profesyonel iletişim amacıyla sunulmakta olup çocuklara yönelik olarak
          tasarlanmamıştır. Rhenvox internet sitesi üzerinden çocuklara ait kişisel verileri özellikle toplamayı
          amaçlamaz. Bir çocuğa ait kişisel verinin, gerekli olduğu hâlde uygun yetkilendirme olmaksızın tarafımıza
          iletildiğini öğrenmemiz durumunda, veriyi silmek veya yürürlükteki mevzuata uygun şekilde işlem yapmak için
          makul adımları atarız.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Değişiklikler</h2>
        <p className="mb-4">
          Bu aydınlatma metnini zaman zaman uygulamalarımızdaki değişiklikleri veya yürürlükteki yasaları yansıtmak için
          güncelleyebiliriz. Güncellenmiş metin bu internet sitesinde yayımlanır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. İletişim</h2>
        <p className="mb-4">
          Bu aydınlatma metni veya kurumsal site ile doğrudan iş iletişimi kapsamındaki veri işleme hakkında
          sorularınız varsa, bizimle iletişime geçin:
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
    </div>
  );
}

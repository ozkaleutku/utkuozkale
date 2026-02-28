const docData = {
    "yatirimci_ozeti": {
        "Neden_Yapay_Zeka_MRP": `# 🚀 Neden Bizim Sistemimiz? Geleneksel MRP'nin Ötesi

Geleneksel MRP (Malzeme İhtiyaç Planlama) sistemleri, dünyadaki değişkenleri hesaba katmayan sığ formüllerle çalışır. Sadece eldeki stoka bakar, sabit teslimat süreleri varsayar ve "eksik varsa sipariş ver" mekaniği ile ilerler. Bu yüzeysellik, depoların ölü stokla şişmesine veya üretim bandının "beklenmedik" krizlerle durmasına yol açar.

Geliştirdiğimiz **Çok Boyutlu Yapay Zeka (AI) Destekli MRP**, olaylara tek boyutlu bakmaz. Tedarik zincirindeki hammadde gecikme varyanslarını, talep oynaklığını ve hedeflenen hizmet seviyesini aynı potada eriterek pürüzsüz bir "Sanal Zırh" oluşturur.

## Rakipsiz Değer Önerimiz

*   **Sermaye Serbestisi:** Sığ formüllerin yarattığı "korku stoklarını" eritir. İhtiyaç olanı, tam ihtiyaç olduğu saniyede depoda bulunduracak akıllı kararlarla atıl sermayeyi nakde çevirir.
*   **Proaktif Kriz Önleme:** Sistem, söz verilen teslimat tarihleri ile gizli tedarikçi risklerini çarpıştırarak yangın çıkmadan haftalar önce tehlikeyi (darboğazı) tespit eder.
*   **Sonsuz Kapasite Dinamiği:** İster 5, ister 50 kademeli karmaşık ürün reçeteleriniz (BOM) olsun; tüm komponent ağacını anlık depo verisi üzerinden saniyeler içinde simüle eder.

\`\`\`mermaid
graph TD
    subgraph Sig_Yapi [Eski Nesil Sığ MRP]
        A[Statik Formül] --> B[Sabit Stok Tut]
        B --> C[Ya Kriz, Ya Ölü Sermaye]
    end
    
    subgraph Derin_Model [Çok Boyutlu AI Analizi]
        D[Tedarikçi Gecikme Varyansı] & E[Talep Belirsizliği] & F[Canlı Rezerv + Yoldaki Mal] --> G{Merkezi Öğrenme Modelleri}
        G --> H[Proaktif Tedarik Uyarısı]
        G --> I[Sıfır İhtimal Bırakan Dinamik Stok Modeli]
        H & I --> J((Minimum Sermaye / Maksimum Hizmet))
    end
    
    style G fill:#8E2DE2,stroke:#4A00E0,stroke-width:2px,color:#fff
\`\`\`
`
    },
    "yapay_zeka_teknolojileri": {
        "Kapsamli_Risk_Analizi": `# 🛡️ Kapsamlı Risk Analizi ve Optimizasyon (Makine Öğrenmesi)

Sistemimizi standart MRP'lerden ayıran en büyük uçurum, **Risk Algısıdır.** Klasik sistemler "Tedarikçi bu malı ortalama 10 günde getirir" varsayımıyla çalışır ve kördürler. Sistemin temeli olan yüksek kapasiteli makine öğrenmesi motoru ise "Ortalamalara" inanmaz, "Sapmalara ve Varyanslara" odaklanır.

## Çok Katmanlı Risk Matrisi

Sistemimiz bir malzemeyi incelerken sadece geçmişe bakmaz, çok boyutlu bir risk profili çıkartır:

1.  **Tedarikçi Güvenilirlik Sapması:** Tedarikçi genelde erken mi getiriyor, yoksa arada bir çok mu geç kalıyor? Sapma frekansı nedir?
2.  **Talep Oynaklığı (Volatility):** Ürünün piyasadaki talebi stabil mi yoksa ani sıçramalara çok mu açık?
3.  **Kritiklik Hedefi:** Yönetimin belirlediği pazar hedefleri (Örn: "Müşterime %98 bulunabilirlik sunmalıyım") matematiksel bir denkleme oturtulur.

Bu matris birleştiğinde, her malzeme için işletmeyi krizden korurken depoyu şişirmeyen **Dinamik Emniyet Stoğu** otomatik yaratılır.

\`\`\`mermaid
graph TD
    A[Tedarikçi Teslimat Varyansı] --> D{AI Çok Boyutlu Risk Matrisi}
    B[Talebin İstatistiksel Oynaklığı] --> D
    C[Yönetimin Kritiklik Hedefi %] --> D
    
    D -- Risk Katsayısı Yüksek --> E[Zırhı Güçlendir: Dinamik Olarak Stok Artır]
    D -- Risk Katsayısı Düşük --> F[Sermayeyi Özgür Bırak: Stok Hedefini Azalt]
    
    style D fill:#e53935,stroke:#b71c1c,stroke-width:2px,color:#fff
\`\`\`
`,
        "Stratejik_Talep_Tahmini": `# 📈 Stratejik Talep Tahminleme Modülü (Makine Öğrenmesi)

Geleceği tahmin etmek sihir değil, verinin doğru yapılandırılmasıdır. 
Dünya standartlarında rüştünü ispatlamış zaman serisi analitiği üzerine kurgulanan makine öğrenmesi (ML) motorumuz, şirketinize aylar öncesinden hedef gösterir.

## Satış Geçmişinin Anatomisi

Sistem veriyi parçalara ayırarak zekice bir öngörü üretir:

*   **Trend Bileşeni:** Şirket genel olarak büyüyor mu, küçülüyor mu? İvme (Momentum) ne yönde?
*   **Mevsimsel Döngüler:** Yıllık, aylık, hatta haftalık rutin satış hareketleri hafızaya kazınır.
*   **Tatil ve Olay Etkileri:** Bayramlar veya kampanyalar gibi dışsal şokların satışa bıraktığı izler ayrıştırılır.

Tüm bu "Gürültüden" arındırılmış modelleme sayesinde, satınalma biriminiz reaktif alımlar yapmak yerine proaktif sözleşmelerin konforunu yaşar.

\`\`\`mermaid
graph LR
    A[Ham Satış Verisi] --> B(Makine Öğrenmesi - Zaman Serisi Modeli)
    B --> C[Mevsimsellik Algısı]
    B --> D[Büyüme İvmesi Analizi]
    B --> X[Aykırı Değer ve Tatil Filtrelemesi]
    C & D & X --> E((Yüksek İsabetli Gelecek Projeksiyonu))
    
    style B fill:#11998e,stroke:#38ef7d,stroke-width:2px,color:#fff
\`\`\`
`
    },
    "sistem_ozellikleri": {
        "Derin_Simulasyon_ve_Dar_Bogaz_Tespiti": `# 🗺️ Dijital İkiz ve Simülasyon Motoru

Sıradan sistemlerde bir sipariş girdiğinizde sadece "Depoda yeterli malzeme var mı?" diye bakılır. Bizim **Dijital İkiz (Digital Twin)** altyapımız, işletmeniz için bir zaman makinesi gibi çalışarak o siparişin üretim sürecini sanal ortamda önceden yaşar.

## Uçtan Uca Sanal Üretim

1.  **Kapsamlı Analiz:** Alınan siparişin tüm alt malzemeleri (ürün ağacı) saniyeler içinde analiz edilir.
2.  **Gelecek Projeksiyonu:** Sadece "Şu an depoda ne var?" denmez;
    *   *Daha önce başka siparişlere rezerve edilmiş miktar*
    *   *Yoldaki satınalma siparişlerinin geliş tarihleri*
    *   *Dinamik emniyet stok ihtiyaçları* 
    tek bir zaman düzleminde eritilir.
3.  **Kusursuz Darboğaz Tespiti:** Sistem tüm değişkenleri hesaba katarak. "Müşteriye 30 gün sonra teslim edeceksin; ancak şu spesifik malzemenin siparişi YARIN verilmezse üretim duracak!" seviyesinde net ve hayat kurtarıcı uyarılar üretir.

\`\`\`mermaid
graph TD
    A[Müşteri Siparişi Girişi] --> B(Dijital İkiz Simülasyonu)
    B --> C{Kapasite ve Takvim Kontrolü}
    C -- Tam Uyumlu --> E[Üretim Takvimi Onaylandı]
    C -- Uyumsuzluk / Darboğaz --> F[Gelecekteki Kriz Noktası Tespit Edildi!]
    F --> G[Sistem Tam Olarak Hangi Gün Aksiyon Alınacağını Raporlar]
    
    style B fill:#f39c12,stroke:#d35400,stroke-width:2px,color:#fff
\`\`\`
`
    }
};
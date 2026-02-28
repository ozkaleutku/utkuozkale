const docData = {
    tr: {
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
    },
    en: {
        "yatirimci_ozeti": {
            "Why_AI_MRP": `# 🚀 Why Our System? Beyond Traditional MRP

Traditional MRP (Material Requirements Planning) systems operate on shallow formulas that ignore real-world variables. They only look at available stock, assume fixed delivery times, and use a simple "order if short" logic. This superficiality leads to warehouses bloated with dead stock or production lines unexpectedly halting due to crises.

Our **Multi-Dimensional AI-Powered MRP** does not look at events linearly. It melts raw material delay variances, demand volatility, and targeted service levels in the same pot to create a seamless "Virtual Armor".

## Untouchable Value Proposition

*   **Capital Freedom:** Melts the "fear stocks" created by rigid formulas. By making smart decisions to stock exactly what is needed right when it's needed, it turns idle capital into cash.
*   **Proactive Crisis Prevention:** The system collides promised delivery dates with hidden supplier risks, detecting bottlenecks weeks before the fire even starts.
*   **Infinite Capacity Dynamics:** Whether you have 5 or 50 level complex Bills of Materials (BOM); it simulates the entire component tree against live warehouse data in seconds.

\`\`\`mermaid
graph TD
    subgraph Shallow_Architecture [Legacy Shallow MRP]
        A[Static Formula] --> B[Keep Fixed Stock]
        B --> C[Either Crisis, Or Dead Capital]
    end
    
    subgraph Deep_Model [Multi-Dimensional AI Analysis]
        D[Supplier Delay Variance] & E[Demand Volatility] & F[Live Reserve + En Route] --> G{Central Learning Models}
        G --> H[Proactive Procurement Warning]
        G --> I[Dynamic Stock Model Leaving Zero Chance]
        H & I --> J((Minimum Capital / Maximum Service))
    end
    
    style G fill:#8E2DE2,stroke:#4A00E0,stroke-width:2px,color:#fff
\`\`\`
`
        },
        "yapay_zeka_teknolojileri": {
            "Comprehensive_Risk_Analysis": `# 🛡️ Comprehensive Risk Analysis and Optimization (Machine Learning)

The biggest gap separating our system from standard MRPs is **Risk Perception.** Classic systems work with the assumption "The supplier brings this item in 10 days on average" and are effectively blind. The high-capacity machine learning engine forming our core does not believe in "Averages"; it focuses on "Deviations and Variances".

## Multi-Layered Risk Matrix

When our system examines a material, it doesn't just look at the past; it generates a multi-dimensional risk profile:

1.  **Supplier Reliability Deviation:** Does the supplier usually deliver early, or occasionally very late? What is the frequency of deviation?
2.  **Demand Volatility:** Is the product demand stable or highly susceptible to sudden unpredictable jumps?
3.  **Criticality Target:** Management's marked market goals (e.g. "I must offer 98% availability to my customer") are seated into a mathematical equation.

When this matrix combines, an automatic **Dynamic Safety Stock** is created for each material that protects the enterprise from crises without bloating the warehouse.

\`\`\`mermaid
graph TD
    A[Supplier Delivery Variance] --> D{AI Multi-Dimensional Risk Matrix}
    B[Statistical Volatility of Demand] --> D
    C[Management Criticality Target %] --> D
    
    D -- High Risk Coefficient --> E[Fortify Armor: Dynamically Increase Stock]
    D -- Low Risk Coefficient --> F[Free Capital: Decrease Stock Target]
    
    style D fill:#e53935,stroke:#b71c1c,stroke-width:2px,color:#fff
\`\`\`
`,
            "Strategic_Demand_Forecasting": `# 📈 Strategic Demand Forecasting Module (Machine Learning)

Predicting the future is not magic; it's the correct structuring of data. 
Our machine learning (ML) engine, built upon globally proven time-series analytics, sets targets for your company months in advance.

## Anatomy of Sales History

The system produces a brilliant prediction by breaking the data into pieces:

*   **Trend Component:** Is the company generally growing or shrinking? In what direction is the momentum?
*   **Seasonal Cycles:** Annual, monthly, or even weekly routine sales patterns are etched into its memory.
*   **Holiday and Event Impacts:** The imprints left on sales by external shocks like holidays or campaigns are isolated.

Thanks to all this "Noise-Free" modeling, your procurement department enjoys the comfort of proactive contracts instead of making reactive purchases.

\`\`\`mermaid
graph LR
    A[Raw Sales Data] --> B(Machine Learning - Time Series Model)
    B --> C[Seasonality Detection]
    B --> D[Growth Momentum Analysis]
    B --> X[Outlier & Holiday Filtering]
    C & D & X --> E((High-Accuracy Future Projection))
    
    style B fill:#11998e,stroke:#38ef7d,stroke-width:2px,color:#fff
\`\`\`
`
        },
        "sistem_ozellikleri": {
            "Deep_Simulation_and_Bottleneck_Detection": `# 🗺️ Digital Twin and Simulation Engine

When you enter an order in ordinary systems, they only check "Is there enough material in the warehouse?". Our **Digital Twin** infrastructure works like a time machine for your enterprise, experiencing that order's production process beforehand in a virtual environment.

## End-to-End Virtual Production

1.  **Comprehensive Analysis:** All sub-materials of the received order (BOM tree) are analyzed in seconds.
2.  **Future Projection:** It doesn't just say "What is in the warehouse right now?";
    *   *Quantities previously reserved for other orders*
    *   *Arrival dates of en-route purchase orders*
    *   *Dynamic safety stock requirements* 
    are blended into a singular timeline.
3.  **Flawless Bottleneck Detection:** The system accounts for all variables and produces clear, life-saving warnings at the level of: "You will deliver to the customer in 30 days; however, if the order for this specific material is not placed TOMORROW, production will halt!"

\`\`\`mermaid
graph TD
    A[Customer Order Entry] --> B(Digital Twin Simulation)
    B --> C{Capacity & Schedule Check}
    C -- Perfect Match --> E[Production Schedule Approved]
    C -- Mismatch / Bottleneck --> F[Future Crisis Point Detected!]
    F --> G[System Reports Exactly Which Day Action Must be Taken]
    
    style B fill:#f39c12,stroke:#d35400,stroke-width:2px,color:#fff
\`\`\`
`
        }
    }
};
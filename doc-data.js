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

Geleceği tahmin etmek sihir değil, verinin doğru yapılandırılmasıdır. Dünya standartlarında rüştünü ispatlamış zaman serisi analitiği üzerine kurgulanan makine öğrenmesi (ML) motorumuz, şirketinize aylar öncesinden hedef gösterir.

## Ürün Bazlı 12 Aylık Drill-Down Analizi

Sistem, tahminleri ürün bazlı **Akıllı Kartlar** altında gruplar. Bir ürüne tıklandığında:
*   **12 Aylık Projeksiyon:** Gelecek bir yılın aylık tahminleri anlık olarak açılır.
*   **Entegre Tahmin Grafiği:** ForecastDetailChart ile geçmiş 4 yılın fiili satışları, AI tahmini ve güven aralıkları (Confidence Intervals) tek bir görsel düzlemde çakıştırılır.
*   **Hücre Bazlı Müdahale:** Uzman, AI'nın her bir ayı için ürettiği rakamı doğrudan tablo üzerinden güncelleyebilir ve onaylayabilir.

\`\`\`mermaid
graph TD
    A[Ham Satış Verisi] --> B(ML Zaman Serisi Modeli)
    B --> C[Ürün Kartları Görünümü]
    C --> D{12 Aylık Detay}
    D --> E[Fiili vs Tahmin Grafiği]
    D --> F[Ay Bazlı Manuel Revize]
    E & F --> G((Onaylanmış Satış Planı))
    
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
`,
            "Urun_Bazli_Analiz_ve_Karar_Destek": `# ⚖️ Ürün Bazlı Analiz ve Karar Destek Mekanizması

Yapay zeka sadece bir rakam üretmez, kararı destekleyecek tüm kanıtları masaya yatırır. Sistemin **Karşılaştırma ve Onay** ekranı, "Kara Kutu" (Black Box) mantığını yıkarak şeffaf ve kontrol edilebilir bir deneyim sunar.

## Ürün Odaklı Gruplanmış Mimari

Sistem, karmaşık listeleri ürün bazlı **Akıllı Kartlar** (Accordion) altında toplar. Talep Tahmini modülüyle aynı mimariyi kullanan bu ekran sayesinde planlama uzmanı ürüne tıklandığında 12 aylık projeksiyonu anlık görür.

## Entegre Tüketim ve Trend Analizi

Her ürünün detayında, AI tarafından üretilen veriler görsel bir hikayeye dönüşür. ConsumptionChart üzerinden:
*   **Fiili Tüketim (Turuncu Area):** Geçmişte ne kadar hammadde harcanmış?
*   **Geçmiş Emniyet Stoğu (Mavi Line):** Eskiden ne kadar stok tutulmuş?
*   **Gelecek AI Önerisi (Yeşil Dashed):** Gelecekte ne kadar tutulmalı?

## Hibrit Karar ve 5 Hane Hassasiyet

Uzman, AI önerilerini (0,00000 hassasiyetiyle) Manuel Girişler veya Sabit Formüllerle karşılaştırır. Tercih (Preference) seçimi yapıldığı an sistem "Nihai Planı" günceller.

\`\`\`mermaid
graph TD
    subgraph Analiz_Katmani [Veri Analiz Katmanı]
        A[Fiili Tüketim] & B[Geçmiş Veri] --> C{AI Trend Analizi}
    end
    
    subgraph Karar_Katmani [Uzman Karar Katmanı]
        C -- Öneri --> D[Karşılaştırma Tablosu]
        E[Manuel Müdahale] --> D
        F[Formül Sonucu] --> D
    end
    
    D --> G((Onaylanmış Nihai Stok))
    
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#3b82f6,stroke:#2563eb,color:#fff
\`\`\`
`
        }
    },
    en: {
        "yatirimci_ozeti": {
            "Why_AI_MRP": `# 🚀 Why Our System? Beyond Traditional MRP

Traditional MRP systems work with shallow formulas that do not account for global variables. They only look at stock on hand, assume fixed lead times, and follow a "place order if missing" mechanic. This superficiality leads to warehouses bloated with dead stock or production lines halted by "unexpected" crises.

Our **Multi-Dimensional AI-Augmented MRP** doesn't view events in a single dimension. By blending raw material delay variances, demand volatility, and target service levels in the same pot, it creates a seamless "Virtual Armor."

## Our Unrivaled Value Proposition

*   **Capital Freedom:** Liquidates "fear stocks" created by shallow formulas. Converts idle capital into cash with smart decisions that ensure what's needed is in the warehouse exactly when it's needed.
*   **Proactive Crisis Prevention:** The system detects crises (bottlenecks) weeks before they happen by clashing promised delivery dates with hidden supplier risks.
*   **Infinite Capacity Dynamics:** Whether you have 5 or 50 level complex Bills of Materials (BOM); it simulates the entire component tree over real-time inventory data in seconds.

\`\`\`mermaid
graph TD
    subgraph Sig_Yapi [Legacy Shallow MRP]
        A[Static Formula] --> B[Keep Fixed Stock]
        B --> C[Either Crisis or Dead Capital]
    end
    
    subgraph Derin_Model [Multi-Dimensional AI Analysis]
        D[Supplier Delay Variance] & E[Demand Volatility] & F[Live Reservation + En-route Goods] --> G{Central Learning Models}
        G --> H[Proactive Supply Alert]
        G --> I[Zero-Probability Dynamic Stock Model]
        H & I --> J((Minimum Capital / Maximum Service))
    end
    
    style G fill:#8E2DE2,stroke:#4A00E0,stroke-width:2px,color:#fff
\`\`\`
`
        },
        "yapay_zeka_technologies": {
            "Comprehensive_Risk_Analysis": `# 🛡️ Comprehensive Risk Analysis and Optimization (Machine Learning)

The biggest chasm separating our system from standard MRPs is **Risk Perception.** Classic systems work with the assumption that "The supplier brings this material in an average of 10 days" and are blind. Our high-capacity machine learning engine does not believe in "Averages"; it focuses on "Deviations and Variances."

## Multi-Layered Risk Matrix

Our system doesn't just look at the past when examining a material; it produces a multi-dimensional risk profile:

1.  **Supplier Reliability Deviation:** Does the supplier usually bring it early, or do they occasionally get very late? What is the deviation frequency?
2.  **Demand Volatility:** Is the market demand for the product stable or highly susceptible to sudden spikes?
3.  **Criticality Target:** Management-defined market targets (e.g., "I must provide 98% availability to my customer") are integrated into a mathematical equation.

When this matrix combines, **Dynamic Safety Stock** is automatically created for each material, protecting the business from crises without bloating the warehouse.

\`\`\`mermaid
graph TD
    A[Supplier Delivery Variance] --> D{AI Multi-Dimensional Risk Matrix}
    B[Statistical Volatility of Demand] --> D
    C[Management Criticality Target %] --> D
    
    D -- High Risk Coefficient --> E[Strengthen Armor: Dynamically Increase Stock]
    D -- Low Risk Coefficient --> F[Free Capital: Reduce Stock Target]
    
    style D fill:#e53935,stroke:#b71c1c,stroke-width:2px,color:#fff
\`\`\`
`,
            "Strategic_Demand_Forecasting": `# 📈 Strategic Demand Forecasting Module (Machine Learning)

Predicting the future is not magic; it's about structured data. Our ML engine, built on world-class time-series analytics, provides targets for your company months in advance.

## Product-Based 12-Month Drill-Down Analysis

The system groups forecasts under product-centric **Smart Cards**. Clicking a product reveals:
*   **12-Month Projection:** Monthly forecasts for the coming year expand instantly.
*   **Integrated Forecasting Chart:** ForecastDetailChart overlays the last 4 years of actual sales, AI predictions, and Confidence Intervals on a single visual plane.
*   **Cell-Based Intervention:** Experts can update and approve specific AI-generated figures for each month directly in the table.

\`\`\`mermaid
graph TD
    A[Raw Sales Data] --> B(ML Time-Series Model)
    B --> C[Product Cards View]
    C --> D{12-Month Detail}
    D --> E[Actual vs Forecast Chart]
    D --> F[Month-Based Manual Revision]
    E & F --> G((Approved Sales Plan))
    
    style B fill:#11998e,stroke:#38ef7d,stroke-width:2px,color:#fff
\`\`\`
`
        },
        "system_capabilities": {
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
`,
            "Product_Based_Analysis_and_Decision_Support": `# ⚖️ Product-Based Analysis and Decision Support Mechanism

AI doesn't just produce a number; it puts all the evidence to support the decision on the table. The system's **Comparison and Approval** screen breaks the "Black Box" logic, offering a transparent and controllable experience.

## Product-Centric Grouped Architecture

The system gathers complex lists under product-based **Smart Cards** (Accordion). Using the same architecture as the Demand Forecast module, this screen allows the planning expert to see the 12-month projection instantly when a product is clicked.

## Integrated Consumption and Trend Analysis

Inside each product detail, AI-generated data turns into a visual story. Via ConsumptionChart:
*   **Actual Consumption (Orange Area):** How much raw material was used in the past?
*   **Historical Safety Stock (Blue Line):** How much stock was kept before?
*   **Future AI Suggestion (Green Dashed):** How much should be kept in the future?

## Hybrid Decision and 5-Decimal Precision

Experts compare AI suggestions (with 0.00000 precision) against Manual Overrides or Fixed Formulas. Once a preference is selected, the system updates the "Final Plan" instantly.

\`\`\`mermaid
graph TD
    subgraph Analysis_Layer [Data Analysis Layer]
        A[Actual Consumption] & B[Historical Data] --> C{AI Trend Analysis}
    end
    
    subgraph Decision_Layer [Expert Decision Layer]
        C -- Suggestion --> D[Comparison Table]
        E[Manual Override] --> D
        F[Formula Result] --> D
    end
    
    D --> G((Approved Final Stock))
    
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#3b82f6,stroke:#2563eb,color:#fff
\`\`\`
`
        }
    }
};
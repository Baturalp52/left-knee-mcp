const reportData = require("../data/reportData.json");

function buildOverview(language, audience) {
  if (language === "tr") {
    if (audience === "doctor") {
      return [
        "Sol diz MRG ozeti (hekim modu):",
        "- ACL orta zonda interstisyel-parsiyel yirtik lehine sinyal degisiklikleri mevcut.",
        "- Medial meniskus arka boynuz posteromedial kosede kompleks yirtik ile uyumlu.",
        "- Lateral meniskus arka boynuzda kompleks yirtik ve 2.5 mm parameniskal kist izleniyor.",
        "- MCL distal yarida zorlanma/dejenerasyon lehine incelme var, kontinuitesi korunmus.",
        "- PCL kontinuitesi korunmus; hafif ondulen gorunum tariflenmis.",
        "- Lateral kompartmanda belirgin hafif anterior tibial translasyon mevcut.",
        "- Hafif posteromedial derin yumusak doku ve medial cilt alti odemi tariflenmis.",
      ].join("\n");
    }
    return [
      "Sol diz raporu ozeti (hasta modu):",
      "- On capraz bagda (ACL) kismi yirtikla uyumlu bulgular var.",
      "- Ic meniskuste (medial meniskus) karmasik yirtik goruluyor.",
      "- Dis meniskuste (lateral meniskus) de yirtik var ve yaninda kucuk bir kist tarif edilmis.",
      "- Ic yan bagda (MCL) zorlanmaya bagli incelme var ama bag kopuk degil.",
      "- Bazi yumusak dokularda hafif odem (sisme/irritasyon) bulgulari var.",
      "- Kikirdak ve eklem sivisi genel olarak normal sinirlar icinde.",
    ].join("\n");
  }

  if (audience === "doctor") {
    return [
      "Left knee MRI summary (doctor mode):",
      "- ACL shows mid-zone interstitial partial tear pattern with increased central signal.",
      "- Medial meniscus posterior horn/posteromedial corner demonstrates a complex tear pattern.",
      "- Lateral meniscus posterior horn has complex tear morphology with a 2.5 mm parameniscal cyst.",
      "- MCL distal half shows thinning compatible with strain/degenerative change; continuity preserved.",
      "- PCL continuity is preserved with mild undulation.",
      "- Mild anterior tibial translation is present, more evident laterally.",
      "- Mild medial subcutaneous and posteromedial deep soft-tissue edema is noted.",
    ].join("\n");
  }

  return [
    "Left knee report summary (patient mode):",
    "- There are findings consistent with a partial ACL tear.",
    "- The inner meniscus (medial meniscus) has a complex tear.",
    "- The outer meniscus (lateral meniscus) also has a tear plus a small nearby cyst.",
    "- The inner side ligament (MCL) looks strained/thinned but is not fully torn.",
    "- Some mild soft-tissue swelling/irritation is present around the knee.",
    "- Cartilage surfaces and joint fluid look generally within normal limits.",
  ].join("\n");
}

function buildStructuredFindings(language) {
  if (language === "tr") {
    const report = reportData.tr;
    return [
      "Yapilandirilmis bulgular:",
      `- Referans: ${report.date_reference}`,
      `- ACL: ${report.acl}`,
      `- Medial meniskus: ${report.medial_meniscus}`,
      `- Lateral meniskus: ${report.lateral_meniscus}`,
      `- MCL: ${report.mcl}`,
      `- PCL: ${report.pcl}`,
      `- Tibial translasyon: ${report.translation}`,
      `- Odem: ${report.edema}`,
      `- Diger: ${report.other}`,
    ].join("\n");
  }

  const report = reportData.en;
  return [
    "Structured findings:",
    `- Reference: ${report.date_reference}`,
    `- ACL: ${report.acl}`,
    `- Medial meniscus: ${report.medial_meniscus}`,
    `- Lateral meniscus: ${report.lateral_meniscus}`,
    `- MCL: ${report.mcl}`,
    `- PCL: ${report.pcl}`,
    `- Tibial translation: ${report.translation}`,
    `- Edema: ${report.edema}`,
    `- Other: ${report.other}`,
  ].join("\n");
}

function buildQuestions(language, audience) {
  if (language === "tr") {
    if (audience === "doctor") {
      return [
        "Kontrol randevusunda sorulabilecek odak sorular (hekim modu):",
        "- ACL bulgularinin klinik instabilite ile korelasyonu nasil degerlendirilmeli?",
        "- Bimeniskal kompleks yirtik paterninde konservatif vs cerrahi esik kriterleri neler?",
        "- Lateral kompartmandaki anterior tibial translasyonun fonksiyonel anlami nedir?",
        "- MCL distal incelme icin ek stabilite testleri gerekli mi?",
        "- Parameniskal kist (2.5 mm) icin izlem mi, girisim mi dusunulmeli?",
      ].join("\n");
    }
    return [
      "Kontrol randevusunda sorabilecegin sorular (hasta modu):",
      "- Bu bulgular gunluk yasamimi ve sporu nasil etkiler?",
      "- Oncelikli hedefimiz agri kontrolu mu, stabilite mi, fonksiyon mu?",
      "- Bu asamada ameliyat disi seceneklerim neler?",
      "- Hangi belirtiler olursa acil tekrar degerlendirme gerekir?",
      "- Fizik tedavi/egzersiz planinda nelere ozellikle dikkat etmeliyim?",
    ].join("\n");
  }

  if (audience === "doctor") {
    return [
      "Focused follow-up questions (doctor mode):",
      "- How should ACL imaging findings be correlated with clinical instability tests?",
      "- What are the practical thresholds for conservative vs operative pathways in bi-meniscal complex tears?",
      "- What is the functional significance of mild anterior tibial translation in this context?",
      "- Is additional MCL-focused stability assessment indicated for distal thinning pattern?",
      "- For a 2.5 mm parameniscal cyst, is surveillance sufficient or should intervention be considered?",
    ].join("\n");
  }

  return [
    "Questions you can ask at follow-up (patient mode):",
    "- How do these findings affect my daily life and return-to-sport timeline?",
    "- Is the top priority pain control, stability, or functional recovery right now?",
    "- What non-surgical options are most suitable at this stage?",
    "- Which warning symptoms should trigger urgent re-evaluation?",
    "- What should I focus on (or avoid) in physical therapy and exercises?",
  ].join("\n");
}

function buildRedFlags(language) {
  if (language === "tr") {
    return [
      "Dikkat edilmesi gereken durumlar (genel bilgilendirme):",
      "- Kilitlenme, bosa gitme, ani ciddi instabilite artarsa erken kontrol gerekebilir.",
      "- Belirgin sisme/isinma, gece agrisinda ciddi artis veya travma sonrasi kotulesme olursa doktoruna basvur.",
      "- Bu arac tani koymaz; klinik muayene ve hekimin plani esastir.",
    ].join("\n");
  }

  return [
    "Watch-out items (general information):",
    "- Mechanical locking, giving-way episodes, or sudden instability worsening can require earlier reassessment.",
    "- Marked swelling/warmth, major night-pain increase, or post-trauma worsening should be reviewed by your clinician.",
    "- This tool does not diagnose; in-person exam and clinician judgment remain primary.",
  ].join("\n");
}

module.exports = {
  buildOverview,
  buildStructuredFindings,
  buildQuestions,
  buildRedFlags,
};

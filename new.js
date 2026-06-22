// Language translations
const translations = {
  en: {
    signIn: "Sign In",
    heading1: "Unlimited movies, TV shows, and more",
    heading2: "Watch anywhere. Cancel anytime.",
    para1:
      "Ready to watch? Enter your email to create or restart your membership.",
    getStarted: "Get Started",
    emailPlaceholder: "Email address",
    invalidEmail: "Please enter a valid email address.",
    emailSuccess: (email) =>
      `Thanks! ${email} has been registered for updates.`,
    trendingNow: "Trending Now",
    moreReasons: "More reasons to join",
    enjoyTv: "Enjoy on your TV",
    enjoyTvDesc: "Stream on smart TVs, PlayStation, Xbox, and more.",
    download: "Download and go",
    downloadDesc: "Save your favorites for offline viewing anytime.",
    watchEverywhere: "Watch everywhere",
    watchEverywhereDesc: "Enjoy Netflix on your phone, tablet, laptop, and TV.",
    kidsProfiles: "Create profiles for kids",
    kidsProfilesDesc: "Fun, safe viewing tailored for younger audiences.",
    faq: "Frequently Asked Questions",
    faqQ1: "What is Netflix?",
    faqA1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    faqQ2: "How much does Netflix cost?",
    faqA2:
      "Plans start at a low monthly price. You can watch as much as you want and cancel anytime.",
    faqQ3: "Where can I watch?",
    faqA3:
      "Watch anywhere, on any device, as long as you have an internet connection and the Netflix app.",
    faqQ4: "How do I cancel?",
    faqA4:
      "Netflix is flexible—there's no long-term contract, and you can cancel online with just a few clicks.",
    questions: "Questions? Call 000-800-919-1694",
    faqLink: "FAQ",
    investorRelations: "Investor Relations",
    privacy: "Privacy",
    helpCentre: "Help Centre",
    jobs: "Jobs",
    cookiePreferences: "Cookie Preferences",
    account: "Account",
    waysToWatch: "Ways to Watch",
    corporateInfo: "Corporate Info",
    mediaCentre: "Media Centre",
    termsOfUse: "Terms of Use",
    contactUs: "Contact Us",
    copyright: "Netflix Clone",
  },
  hi: {
    signIn: "साइन इन करें",
    heading1: "असीमित फिल्में, टीवी शो और बहुत कुछ",
    heading2: "कहीं भी देखें। कभी भी रद्द करें।",
    para1:
      "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः शुरू करने के लिए अपना ईमेल दर्ज करें।",
    getStarted: "शुरू करें",
    emailPlaceholder: "ईमेल पता",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें।",
    emailSuccess: (email) =>
      `धन्यवाद! ${email} को अपडेट के लिए पंजीकृत किया गया है।`,
    trendingNow: "ट्रेंडिंग अभी",
    moreReasons: "शामिल होने के लिए और कारण",
    enjoyTv: "अपने टीवी पर आनंद लें",
    enjoyTvDesc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स और अधिक पर स्ट्रीम करें।",
    download: "डाउनलोड करें और जाएं",
    downloadDesc: "किसी भी समय ऑफ़लाइन देखने के लिए अपने पसंदीदा को सहेजें।",
    watchEverywhere: "हर जगह देखें",
    watchEverywhereDesc:
      "अपने फोन, टैबलेट, लैपटॉप और टीवी पर Netflix का आनंद लें।",
    kidsProfiles: "बच्चों के लिए प्रोफाइल बनाएं",
    kidsProfilesDesc: "कम उम्र के दर्शकों के लिए तैयार मजेदार, सुरक्षित दृश्य।",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    faqQ1: "Netflix क्या है?",
    faqA1:
      "Netflix एक स्ट्रीमिंग सेवा है जो पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, डॉक्यूमेंटरी और बहुत कुछ प्रदान करती है।",
    faqQ2: "Netflix की कीमत कितनी है?",
    faqA2:
      "योजनाएं कम मासिक कीमत से शुरू होती हैं। आप जितना चाहें देख सकते हैं और कभी भी रद्द कर सकते हैं।",
    faqQ3: "मैं कहां देख सकता हूं?",
    faqA3:
      "किसी भी устройстve पर कहीं भी देखें, जब तक आपके पास इंटरनेट कनेक्शन और Netflix ऐप हो।",
    faqQ4: "मैं कैसे रद्द करूं?",
    faqA4:
      "Netflix लचीला है—कोई दीर्घकालिक अनुबंध नहीं है, और आप बस कुछ क्लिक से ऑनलाइन रद्द कर सकते हैं।",
    questions: "सवाल हैं? कॉल करें 000-800-919-1694",
    faqLink: "सवाल जवाब",
    investorRelations: "निवेशक संबंध",
    privacy: "गोपनीयता",
    helpCentre: "सहायता केंद्र",
    jobs: "नौकरियां",
    cookiePreferences: "कुकी प्राथमिकताएं",
    account: "खाता",
    waysToWatch: "देखने के तरीके",
    corporateInfo: "कॉर्पोरेट जानकारी",
    mediaCentre: "मीडिया सेंटर",
    termsOfUse: "सेवा की शर्तें",
    contactUs: "हमसे संपर्क करें",
    copyright: "Netflix क्लोन",
  },
};

// Language switcher
const languageSelect = document.querySelector(
  'select[aria-label="Choose language"]',
);
let currentLanguage = localStorage.getItem("preferredLanguage") || "en";

// Function to update all text based on language
function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);

  // Update sign in button
  document.querySelector(".sign-in-btn").textContent =
    translations[lang].signIn;

  // Update hero section
  document.querySelector(".hero h1").textContent = translations[lang].heading1;
  document.querySelector(".hero h2").textContent = translations[lang].heading2;
  document.querySelector(".hero p").textContent = translations[lang].para1;
  document.querySelector(".email-form button").textContent =
    translations[lang].getStarted;
  document.getElementById("emailInput").placeholder =
    translations[lang].emailPlaceholder;

  // Update trending section
  document.querySelector(".section-head h2").textContent =
    translations[lang].trendingNow;

  // Update features section
  document.querySelector(".features h2").textContent =
    translations[lang].moreReasons;
  const cards = document.querySelectorAll(".card");
  cards[0].querySelector("h3").textContent = translations[lang].enjoyTv;
  cards[0].querySelector("p").textContent = translations[lang].enjoyTvDesc;
  cards[1].querySelector("h3").textContent = translations[lang].download;
  cards[1].querySelector("p").textContent = translations[lang].downloadDesc;
  cards[2].querySelector("h3").textContent = translations[lang].watchEverywhere;
  cards[2].querySelector("p").textContent =
    translations[lang].watchEverywhereDesc;
  cards[3].querySelector("h3").textContent = translations[lang].kidsProfiles;
  cards[3].querySelector("p").textContent = translations[lang].kidsProfilesDesc;

  // Update FAQ section
  document.querySelector(".faq h2").textContent = translations[lang].faq;
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems[0].querySelector(".faq-question").childNodes[0].textContent =
    translations[lang].faqQ1;
  faqItems[0].querySelector(".faq-answer").textContent =
    translations[lang].faqA1;

  faqItems[1].querySelector(".faq-question").childNodes[0].textContent =
    translations[lang].faqQ2;
  faqItems[1].querySelector(".faq-answer").textContent =
    translations[lang].faqA2;

  faqItems[2].querySelector(".faq-question").childNodes[0].textContent =
    translations[lang].faqQ3;
  faqItems[2].querySelector(".faq-answer").textContent =
    translations[lang].faqA3;

  faqItems[3].querySelector(".faq-question").childNodes[0].textContent =
    translations[lang].faqQ4;
  faqItems[3].querySelector(".faq-answer").textContent =
    translations[lang].faqA4;

  // Update footer
  document.querySelector(".footer > p").textContent =
    translations[lang].questions;
  const footerUls = document.querySelectorAll(".footer-cols ul");
  const footerItems = [
    [
      translations[lang].faqLink,
      translations[lang].investorRelations,
      translations[lang].privacy,
    ],
    [
      translations[lang].helpCentre,
      translations[lang].jobs,
      translations[lang].cookiePreferences,
    ],
    [
      translations[lang].account,
      translations[lang].waysToWatch,
      translations[lang].corporateInfo,
    ],
    [
      translations[lang].mediaCentre,
      translations[lang].termsOfUse,
      translations[lang].contactUs,
    ],
  ];

  footerUls.forEach((ul, index) => {
    const lis = ul.querySelectorAll("li");
    lis.forEach((li, liIndex) => {
      li.textContent = footerItems[index][liIndex];
    });
  });

  // Update copyright
  const copyrightSpan = document.querySelector(".copyright");
  copyrightSpan.innerHTML = `${translations[lang].copyright} · <span id="year">${new Date().getFullYear()}</span>`;
}

// Language selector change event
languageSelect.addEventListener("change", (e) => {
  updateLanguage(e.target.value === "हिंदी" ? "hi" : "en");
});

// Set initial language
if (currentLanguage === "hi") {
  languageSelect.value = "हिंदी";
  updateLanguage("hi");
} else {
  languageSelect.value = "English";
  updateLanguage("en");
}

// Email form handler
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    formMessage.textContent = translations[currentLanguage].invalidEmail;
    emailInput.focus();
    return;
  }

  formMessage.textContent = translations[currentLanguage].emailSuccess(email);
  emailInput.value = "";
});

// Slider functionality
const slider = document.getElementById("slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (slider && prevBtn && nextBtn) {
  const scrollAmount = 240;

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

// FAQ accordion functionality
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  button.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

export type Language = 'en' | 'mr' | 'hi';

export interface Translations {
  // Navigation & Header
  langLabel: string;
  selectLanguage: string;
  openNow: string;
  closedNow: string;
  closesSoon: string;
  opensSoon: string;
  afternoonBreak: string;
  closedForDay: string;
  monSatSchedule: string;
  call: string;
  directions: string;
  bookVisit: string;
  whatsapp: string;
  share: string;
  save: string;
  saved: string;
  copied: string;
  
  // Hero
  medicalClinic: string;
  googleRating: string;
  verifiedReviewsCount: string;
  clinicPurposeHeading: string;
  clinicPurposeText: string;
  heroSubtext: string;
  callDoctor: string;
  getDirections: string;
  walkInWelcome: string;
  qualityCare: string;
  fastRecovery: string;
  dailyOpdTimings: string;
  morningSession: string;
  eveningSession: string;
  sunMorningOnly: string;
  requestAppointment: string;

  // Services
  servicesSuper: string;
  servicesTitle: string;
  servicesDesc: string;
  inquireForThis: string;
  walkInBannerTitle: string;
  walkInBannerDesc: string;
  checkOpdTimings: string;
  servicesList: {
    title: string;
    description: string;
    badge: string;
  }[];

  // Schedule
  scheduleSuper: string;
  scheduleTitle: string;
  scheduleDesc: string;
  liveStatus: string;
  weeklyScheduleTitle: string;
  todayBadge: string;
  urgentNoticeTitle: string;
  urgentNoticeDesc: string;
  days: { [key: string]: string };

  // Reviews
  reviewsSuper: string;
  reviewsTitle: string;
  reviewsDesc: string;
  rateOnGoogle: string;
  genuineGoogleReviews: string;
  basedOnReviews: string;
  moreReviews: string;
  reviewsList: {
    author: string;
    location: string;
    comment: string;
  }[];

  // Location
  locationSuper: string;
  locationTitle: string;
  locationDesc: string;
  landmarkLabel: string;
  landmarkValue: string;
  startNavigation: string;
  copyAddress: string;
  addressCopied: string;
  openInGoogleMaps: string;

  // Appointment Modal
  modalTitle: string;
  patientNameLabel: string;
  patientNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  preferredSessionLabel: string;
  reasonLabel: string;
  sendWhatsApp: string;
  directCall: string;
  inquirySubmittedTitle: string;
  inquirySubmittedDesc: string;
  closeWindow: string;
  noPrepaymentNote: string;

  // Footer
  footerAbout: string;
  quickLinks: string;
  contactLocation: string;
  emergencyDisclaimer: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    langLabel: 'English',
    selectLanguage: 'Language',
    openNow: 'Open now',
    closedNow: 'Closed now',
    closesSoon: 'Closes soon',
    opensSoon: 'Opens soon',
    afternoonBreak: 'Afternoon break',
    closedForDay: 'Closed for the day',
    monSatSchedule: 'Mon–Sat: 9am–1pm & 5:30pm–9:30pm',
    call: 'Call',
    directions: 'Directions',
    bookVisit: 'Book Visit',
    whatsapp: 'WhatsApp',
    share: 'Share',
    save: 'Save',
    saved: 'Saved',
    copied: 'Copied!',

    medicalClinic: 'Medical Clinic',
    googleRating: 'Google Rating',
    verifiedReviewsCount: '16 Reviews',
    clinicPurposeHeading: '🩺 What this clinic is for:',
    clinicPurposeText: 'Your neighbourhood OPD clinic for daily illnesses (fever, cough, cold, infections), child health, BP & blood sugar checks, and general family health checkups. Walk-ins welcome on BAIF Road, Wagholi.',
    heroSubtext: 'Trusted family healthcare and general physician consultations on BAIF Road, Wagholi. Dedicated care for children, adults, and seniors.',
    callDoctor: 'Call 080803 95607',
    getDirections: 'Get Directions',
    walkInWelcome: 'Walk-in Consultations',
    qualityCare: 'Quality Healthcare',
    fastRecovery: 'Fast Recovery Focus',
    dailyOpdTimings: 'Daily OPD Timings',
    morningSession: 'Morning Session',
    eveningSession: 'Evening Session',
    sunMorningOnly: 'Mon – Sat (Sun 10am–1pm)',
    requestAppointment: 'Request / Inquire Appointment',

    servicesSuper: 'Clinical Services',
    servicesTitle: 'Complete Healthcare for the Entire Family',
    servicesDesc: 'From common infections and seasonal fevers to chronic health management and preventive wellness, get dependable, attentive care right in Wagholi.',
    inquireForThis: 'Inquire for this',
    walkInBannerTitle: 'Walk-in Patients Welcome',
    walkInBannerDesc: 'Direct consultations during clinic OPD hours without complicated booking.',
    checkOpdTimings: 'Check OPD Timings',
    servicesList: [
      {
        title: 'General Physician & Family Care',
        description: 'Comprehensive medical consultations for family members of all ages, from infants to seniors.',
        badge: 'Primary Care',
      },
      {
        title: 'Fever, Cold & Viral Infection Care',
        description: 'Prompt evaluation and evidence-based relief for seasonal flu, viral fevers, cough, throat infections, and allergy.',
        badge: 'Same-Day Care',
      },
      {
        title: 'Diabetes, BP & Chronic Health',
        description: 'Routine blood pressure monitoring, blood sugar checks, thyroid review, and lifestyle management guidance.',
        badge: 'Long-term Health',
      },
      {
        title: 'Pediatric & Child Health',
        description: 'Gentle checkups for childhood illnesses, digestion issues, growth monitoring, and seasonal health concerns.',
        badge: 'Kids Care',
      },
      {
        title: 'Preventive Health Checkups',
        description: 'Routine wellness assessments, preventive health advice, and seasonal immunization recommendations.',
        badge: 'Wellness',
      },
      {
        title: 'Minor Wounds & Emergency First Aid',
        description: 'Hygienic wound cleaning, dressing, minor cuts treatment, and acute symptom stabilization.',
        badge: 'Walk-in Care',
      },
    ],

    scheduleSuper: 'Clinic OPD Timings',
    scheduleTitle: 'Consultation Hours',
    scheduleDesc: 'Arogyam Family Clinic runs two regular daily sessions to accommodate working professionals and families.',
    liveStatus: 'Current Live Status',
    weeklyScheduleTitle: 'Weekly Schedule (Monday to Sunday)',
    todayBadge: 'Today',
    urgentNoticeTitle: 'Need urgent consultation?',
    urgentNoticeDesc: 'You can call directly before visiting to confirm doctor availability.',
    days: {
      Monday: 'Monday',
      Tuesday: 'Tuesday',
      Wednesday: 'Wednesday',
      Thursday: 'Thursday',
      Friday: 'Friday',
      Saturday: 'Saturday',
      Sunday: 'Sunday',
    },

    reviewsSuper: 'Patient Feedback',
    reviewsTitle: 'Google Review Summary',
    reviewsDesc: 'Real experiences from patients and local families treated at Arogyam Family Clinic.',
    rateOnGoogle: 'Rate and review on Google',
    genuineGoogleReviews: '100% Genuine Google Reviews',
    basedOnReviews: 'Based on 16 verified Google reviews',
    moreReviews: 'More Google reviews & photos',
    reviewsList: [
      {
        author: 'Verified Patient',
        location: 'Local Resident',
        comment: 'Doctor is really good and professional always give best treatment.',
      },
      {
        author: 'Healthcare Reviewer',
        location: 'Wagholi, Pune',
        comment: 'Highly recommended for quality healthcare services!',
      },
      {
        author: 'Clinic Patient',
        location: 'Recent Visit',
        comment: 'I recovered quickly. Very polite behavior, accurate diagnosis, and genuine care.',
      },
      {
        author: 'Family Care Patient',
        location: 'BAIF Road',
        comment: 'Best family doctor in the BAIF road vicinity. Clean clinic, no long unnecessary waiting, and very thoughtful medical advice.',
      },
    ],

    locationSuper: 'Find Us in Wagholi',
    locationTitle: 'Location & Directions',
    locationDesc: 'Conveniently situated on BAIF Road right opposite Mulik Luxuria inside Sanskruti Complex. Easy parking and ground floor accessibility.',
    landmarkLabel: 'Landmark:',
    landmarkValue: 'Opposite Mulik Luxuria',
    startNavigation: 'Start Navigation',
    copyAddress: 'Copy Address',
    addressCopied: 'Address Copied!',
    openInGoogleMaps: 'Open in Google Maps',

    modalTitle: 'Inquire / Book Consultation',
    patientNameLabel: 'Patient Name',
    patientNamePlaceholder: 'Enter full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'e.g. 9876543210',
    preferredSessionLabel: 'Preferred Consultation Session',
    reasonLabel: 'Consultation Topic / Symptom',
    sendWhatsApp: 'Send via WhatsApp',
    directCall: 'Direct Call',
    inquirySubmittedTitle: 'Inquiry Initiated!',
    inquirySubmittedDesc: 'Your inquiry has opened on WhatsApp. You can also call the doctor directly.',
    closeWindow: 'Close Window',
    noPrepaymentNote: 'No prepayment required. Walk-ins are also accommodated during regular OPD hours.',

    footerAbout: 'Providing compassionate, high-quality family medical consultations and primary healthcare to the Wagholi community on BAIF Road.',
    quickLinks: 'Quick Links',
    contactLocation: 'Contact & Location',
    emergencyDisclaimer: 'Note: For urgent emergency trauma or life-critical medical conditions, please contact emergency ambulance services or visit a multi-specialty hospital emergency unit immediately.',
  },

  mr: {
    langLabel: 'मराठी',
    selectLanguage: 'भाषा निवडा',
    openNow: 'सुरू आहे',
    closedNow: 'आता बंद आहे',
    closesSoon: 'लवकरच बंद होईल',
    opensSoon: 'लवकरच उघडेल',
    afternoonBreak: 'दुपारची विश्रांती',
    closedForDay: 'आजचे सत्र संपले',
    monSatSchedule: 'सोम–शनि: स. ९ ते १ आणि सं. ५:३० ते ९:३०',
    call: 'कॉल करा',
    directions: 'दिशामार्ग (मॅप)',
    bookVisit: 'तपासणी वेळ',
    whatsapp: 'व्हॉट्सॲप',
    share: 'शेअर करा',
    save: 'सेव्ह करा',
    saved: 'सेव्ह केले',
    copied: 'कॉपी झाले!',

    medicalClinic: 'वैद्यकीय क्लिनिक',
    googleRating: 'गुगल रेटिंग',
    verifiedReviewsCount: '१६ पुनरावलोकने',
    clinicPurposeHeading: '🩺 हे क्लिनिक कशासाठी आहे:',
    clinicPurposeText: 'ताप, सर्दी, खोकला व साथीचे आजार, लहान मुलांचे आरोग्य, बीपी आणि ब्लड शुगर तपासणी, तसेच संपूर्ण कुटुंबाच्या दैनंदिन आरोग्यासाठी वाघोलीमधील आपले हक्काचे फॅमिली क्लिनिक. थेट तपासणीसाठी (वॉक-इन) स्वागत आहे.',
    heroSubtext: 'बीआयएफ रोड, वाघोली येथे संपूर्ण कुटुंबासाठी विश्वासू वैद्यकीय सेवा आणि अनुभवी डॉक्टरांचा सल्ला. लहान मुले, तरुण आणि ज्येष्ठांची विशेष काळजी.',
    callDoctor: 'कॉल करा ०८०८०३ ९५६०७',
    getDirections: 'क्लिनिकचा रस्ता पहा',
    walkInWelcome: 'थेट तपासणी (वॉक-इन) उपलब्ध',
    qualityCare: 'दर्जेदार आरोग्य सेवा',
    fastRecovery: 'जलद बरे होण्यावर भर',
    dailyOpdTimings: 'दररोजच्या ओपीडी वेळा',
    morningSession: 'सकाळचे सत्र',
    eveningSession: 'संध्याकाळचे सत्र',
    sunMorningOnly: 'सोम – शनि (रवि: स. १० ते १)',
    requestAppointment: 'तपासणीसाठी वेळ विचारा',

    servicesSuper: 'वैद्यकीय सेवा',
    servicesTitle: 'संपूर्ण कुटुंबासाठी सर्वसमावेशक आरोग्य सेवा',
    servicesDesc: 'सामान्य आजार आणि हंगामी तापापासून ते दीर्घकालीन आजार व्यवस्थापन आणि प्रतिबंधात्मक तपासणीपर्यंत, वाघोलीत मिळवा खात्रीशीर उपचार.',
    inquireForThis: 'या सेवेबद्दल विचारा',
    walkInBannerTitle: 'थेट भेट देणाऱ्या रुग्णांचे स्वागत',
    walkInBannerDesc: 'ओपीडीच्या वेळेत पूर्व-नोंदणीशिवाय थेट क्लिनिकमध्ये येऊन डॉक्टर तपासणी करून घेऊ शकता.',
    checkOpdTimings: 'ओपीडी वेळा पहा',
    servicesList: [
      {
        title: 'फॅमिली डॉक्टर व जनरल फिजिशियन',
        description: 'लहान मुलांपासून ते वृद्ध आजोबा-आजींपर्यंत कुटुंबातील सर्व सदस्यांसाठी सर्वसमावेशक वैद्यकीय सल्ला.',
        badge: 'प्राथमिक उपचार',
      },
      {
        title: 'ताप, सर्दी, खोकला व व्हायरल इन्फेक्शन',
        description: 'हंगामी फ्लू, व्हायरल ताप, घशातील खवखव, खोकला आणि ॲलर्जीवर त्वरित व अचूक उपचार.',
        badge: 'त्वरित उपचार',
      },
      {
        title: 'डायबिटीज (मधुमेह) व बीपी नियंत्रण',
        description: 'नियमित रक्तदाब तपासणी, रक्तातील साखर तपासणी, थायरॉईड तपासणी आणि जीवनशैली विषयक मार्गदर्शन.',
        badge: 'दीर्घकालीन आरोग्य',
      },
      {
        title: 'बालरोग व लहान मुलांचे आरोग्य',
        description: 'लहान मुलांचे आजार, पचनक्रिया समस्या, वाढीची तपासणी आणि हंगामी आजारांवर सौम्य व सुरक्षित उपचार.',
        badge: 'मुलांची काळजी',
      },
      {
        title: 'नियमित प्रतिबंधात्मक आरोग्य तपासणी',
        description: 'आरोग्य निरोगी ठेवण्यासाठी प्राथमिक तपासणी, योग्य औषधोपचार आणि प्रतिबंधक सल्ला.',
        badge: 'आरोग्य संवर्धन',
      },
      {
        title: 'लहान जखमांवर मलमपट्टी व प्रथमोपचार',
        description: 'स्वच्छ वातावरणात जखमेची मलमपट्टी, किरकोळ कापल्यास तात्काळ ड्रेसिंग व प्रथमोपचार.',
        badge: 'तातडीचे उपचार',
      },
    ],

    scheduleSuper: 'क्लिनिक ओपीडी वेळा',
    scheduleTitle: 'तपासणीच्या वेळापत्रक',
    scheduleDesc: 'नोकरदार वर्ग आणि स्थानिक कुटुंबांच्या सोयीसाठी आरोग्यम् फॅमिली क्लिनिक सकाळी व संध्याकाळी अशा दोन सत्रांत सुरू असते.',
    liveStatus: 'सध्याची चालू स्थिती',
    weeklyScheduleTitle: 'साप्ताहिक वेळापत्रक (सोमवार ते रविवार)',
    todayBadge: 'आज',
    urgentNoticeTitle: 'तातडीने सल्ला हवा आहे का?',
    urgentNoticeDesc: 'क्लिनिकला भेट देण्यापूर्वी डॉक्टरांची उपलब्धता जाणून घेण्यासाठी थेट फोन करू शकता.',
    days: {
      Monday: 'सोमवार',
      Tuesday: 'मंगळवार',
      Wednesday: 'बुधवार',
      Thursday: 'गुरुवार',
      Friday: 'शुक्रवार',
      Saturday: 'शनिवार',
      Sunday: 'रविवार',
    },

    reviewsSuper: 'रुग्णांचे अनुभव',
    reviewsTitle: 'गुगल रिव्ह्यू सारांश',
    reviewsDesc: 'आरोग्यम् फॅमिली क्लिनिकमध्ये उपचार घेतलेल्या वाघोलीतील नागरिक आणि रुग्णांचे प्रत्यक्ष अनुभव.',
    rateOnGoogle: 'गुगलवर रिव्ह्यू द्या',
    genuineGoogleReviews: '१००% अस्सल गुगल रिव्ह्यू',
    basedOnReviews: '१६ पडताळणी केलेल्या गुगल रिव्ह्यूवर आधारित',
    moreReviews: 'आणखी गुगल रिव्ह्यू आणि फोटो',
    reviewsList: [
      {
        author: 'स्थानिक नागरिक',
        location: 'वाघोली, पुणे',
        comment: 'डॉक्टर खूप चांगले आणि व्यावसायिक आहेत, नेहमी सर्वोत्तम उपचार देतात.',
      },
      {
        author: 'आरोग्य समीक्षक',
        location: 'बीआयएफ रोड',
        comment: 'उत्कृष्ट आरोग्य सेवेसाठी अत्यंत शिफारस करतो!',
      },
      {
        author: 'क्लिनिक रुग्ण',
        location: 'नुकतीच भेट',
        comment: 'मी खूप लवकर बरा झालो. डॉक्टरांचे बोलणे अतिशय नम्र आहे, अचूक निदान आणि खरी आपुलकी.',
      },
      {
        author: 'कुटुंब रुग्ण',
        location: 'वाघोली परिसर',
        comment: 'बीआयएफ रोड परिसरातील उत्तम फॅमिली डॉक्टर. क्लिनिक स्वच्छ आहे, उगाच जास्त वाट पाहावी लागत नाही.',
      },
    ],

    locationSuper: 'क्लिनिकचा पत्ता',
    locationTitle: 'पत्ता आणि रस्ता',
    locationDesc: 'बीआयएफ रोडवर मुलिक लक्झुरियाच्या अगदी समोर, संस्कृती कॉम्प्लेक्समध्ये सोयीस्कर ठिकाणी स्थित.',
    landmarkLabel: 'लँडमार्क:',
    landmarkValue: 'मुलिक लक्झुरियाच्या समोर',
    startNavigation: 'नेव्हिगेशन सुरू करा',
    copyAddress: 'पत्ता कॉपी करा',
    addressCopied: 'पत्ता कॉपी झाला!',
    openInGoogleMaps: 'गुगल मॅप्सवर पहा',

    modalTitle: 'तपासणीसाठी वेळ / चौकशी करा',
    patientNameLabel: 'रुग्णाचे नाव',
    patientNamePlaceholder: 'पूर्ण नाव टाका',
    phoneLabel: 'मोबाईल नंबर',
    phonePlaceholder: 'उदा. ९८७६५४३२१०',
    preferredSessionLabel: 'पसंतीची वेळ (सत्र)',
    reasonLabel: 'तपासणीचे कारण / लक्षणे',
    sendWhatsApp: 'व्हॉट्सॲपवर पाठवा',
    directCall: 'थेट फोन करा',
    inquirySubmittedTitle: 'चौकशी पाठवली!',
    inquirySubmittedDesc: 'तुमची माहिती व्हॉट्सॲपवर उघडली आहे. तुम्ही डॉक्टरांना थेट फोन देखील करू शकता.',
    closeWindow: 'खिडकी बंद करा',
    noPrepaymentNote: 'कोणतेही आगाऊ शुल्क नाही. थेट ओपीडीच्या वेळेत येऊनही तपासणी करता येते.',

    footerAbout: 'वाघोली परिसरातील नागरिकांसाठी आपुलकीने आणि दर्जेदार आरोग्य सेवा देणारे विश्वासू फॅमिली क्लिनिक.',
    quickLinks: 'महत्त्वाचे दुवे',
    contactLocation: 'संपर्क आणि पत्ता',
    emergencyDisclaimer: 'सूचना: अत्यंत गंभीर किंवा जीवघेण्या आपत्कालीन परिस्थितीत कृपया तातडीने रुग्णवाहिका किंवा मोठ्या मल्टि-स्पेशालिटी हॉस्पिटलच्या इमर्जन्सी युनिटशी संपर्क साधा.',
  },

  hi: {
    langLabel: 'हिन्दी',
    selectLanguage: 'भाषा चुनें',
    openNow: 'खुला है',
    closedNow: 'अभी बंद है',
    closesSoon: 'जल्द बंद होगा',
    opensSoon: 'जल्द खुलेगा',
    afternoonBreak: 'दोपहर का अवकाश',
    closedForDay: 'आज का समय समाप्त',
    monSatSchedule: 'सोम–शनि: सुबह ९ से १ और शाम ५:३० से ९:३०',
    call: 'कॉल करें',
    directions: 'दिशाएं (रास्ता)',
    bookVisit: 'अपॉइंटमेंट लें',
    whatsapp: 'व्हाट्सएप',
    share: 'शेयर करें',
    save: 'सेव करें',
    saved: 'सेव हो गया',
    copied: 'कॉपी हो गया!',

    medicalClinic: 'चिकित्सा क्लिनिक',
    googleRating: 'गूगल रेटिंग',
    verifiedReviewsCount: '१६ समीक्षाएं',
    clinicPurposeHeading: '🩺 यह क्लिनिक किसलिए है:',
    clinicPurposeText: 'बुखार, खांसी, जुकाम व मौसमी संक्रमण, बच्चों का स्वास्थ्य, बीपी और ब्लड शुगर जांच, तथा पूरे परिवार की नियमित स्वास्थ्य देखभाल हेतु वाघोली में आपका विश्वसनीय क्लिनिक। सीधे वॉक-इन परामर्श का स्वागत है।',
    heroSubtext: 'बीएआईएफ रोड, वाघोली में पूरे परिवार के लिए विश्वसनीय चिकित्सा सेवा और अनुभवी डॉक्टर परामर्श। बच्चों, वयस्कों और बुजुर्गों की समर्पित देखभाल।',
    callDoctor: 'कॉल करें ०८०८०३ ९५६०७',
    getDirections: 'रास्ता देखें',
    walkInWelcome: 'सीधे वॉक-इन परामर्श उपलब्ध',
    qualityCare: 'गुणवत्तापूर्ण स्वास्थ्य सेवा',
    fastRecovery: 'शीघ्र स्वास्थ्य लाभ पर ध्यान',
    dailyOpdTimings: 'दैनिक ओपीडी समय',
    morningSession: 'सुबह का सत्र',
    eveningSession: 'शाम का सत्र',
    sunMorningOnly: 'सोम – शनि (रवि: सुबह १० से १)',
    requestAppointment: 'अपॉइंटमेंट या परामर्श पूछें',

    servicesSuper: 'चिकित्सीय सेवाएं',
    servicesTitle: 'पूरे परिवार के लिए संपूर्ण स्वास्थ्य सेवा',
    servicesDesc: 'आम संक्रमण और मौसमी बुखार से लेकर पुरानी बीमारियों के प्रबंधन और नियमित जांच तक, वाघोली में पाएं भरोसेमंद देखभाल।',
    inquireForThis: 'इसके बारे में पूछें',
    walkInBannerTitle: 'सीधे आने वाले मरीजों का स्वागत है',
    walkInBannerDesc: 'ओपीडी समय के दौरान बिना जटिल बुकिंग के सीधे क्लिनिक आकर डॉक्टर को दिखा सकते हैं।',
    checkOpdTimings: 'ओपीडी समय देखें',
    servicesList: [
      {
        title: 'जनरल फिजिशियन व पारिवारिक देखभाल',
        description: 'नवजात शिशु से लेकर बुजुर्गों तक परिवार के सभी सदस्यों के लिए संपूर्ण चिकित्सीय परामर्श।',
        badge: 'प्राथमिक देखभाल',
      },
      {
        title: 'बुखार, खांसी, जुकाम व वायरल संक्रमण',
        description: 'मौसमी फ्लू, वायरल बुखार, गले में खराश, खांसी और एलर्जी का तुरंत व सटीक उपचार।',
        badge: 'त्वरित देखभाल',
      },
      {
        title: 'डायबिटीज (शुगर) व बीपी नियंत्रण',
        description: 'नियमित ब्लड प्रेशर जांच, ब्लड शुगर टेस्ट, थायरॉइड समीक्षा और स्वस्थ जीवनशैली मार्गदर्शन।',
        badge: 'दीर्घकालिक स्वास्थ्य',
      },
      {
        title: 'बाल स्वास्थ्य एवं शिशु रोग',
        description: 'बच्चों की बीमारियों, पाचन समस्याओं, शारीरिक विकास और मौसमी तकलीफों की सौम्य व सुरक्षित जांच।',
        badge: 'बच्चों की देखभाल',
      },
      {
        title: 'नियमित प्रिवेंटिव हेल्थ चेकअप',
        description: 'स्वस्थ रहने के लिए रूटीन चेकअप, स्वास्थ्य परामर्श और आवश्यक टीकाकरण मार्गदर्शन।',
        badge: 'स्वास्थ्य कल्याण',
      },
      {
        title: 'छोटी चोटों की ड्रेसिंग व प्राथमिक उपचार',
        description: 'साफ-सुथरे वातावरण में घाव की सफाई, ड्रेसिंग, छोटी कट-छिल पर तुरंत प्राथमिक चिकित्सा।',
        badge: 'वॉक-इन देखभाल',
      },
    ],

    scheduleSuper: 'क्लिनिक ओपीडी समय',
    scheduleTitle: 'परामर्श के समय',
    scheduleDesc: 'कामकाजी लोगों और परिवारों की सुविधा के लिए आरोग्यम फैमिली क्लिनिक सुबह और शाम दो सत्रों में संचालित होता है।',
    liveStatus: 'वर्तमान स्थिति',
    weeklyScheduleTitle: 'साप्ताहिक समय-सारणी (सोमवार से रविवार)',
    todayBadge: 'आज',
    urgentNoticeTitle: 'क्या तुरंत डॉक्टर से मिलना है?',
    urgentNoticeDesc: 'क्लिनिक आने से पहले डॉक्टर की उपस्थिति जानने के लिए सीधे फोन कर सकते हैं।',
    days: {
      Monday: 'सोमवार',
      Tuesday: 'मंगलवार',
      Wednesday: 'बुधवार',
      Thursday: 'गुरुवार',
      Friday: 'शुक्रवार',
      Saturday: 'शनिवार',
      Sunday: 'रविवार',
    },

    reviewsSuper: 'मरीजों के अनुभव',
    reviewsTitle: 'गूगल रिव्यू सारांश',
    reviewsDesc: 'आरोग्यम फैमिली क्लिनिक में उपचार कराने वाले वाघोली के परिवारों व मरीजों के वास्तविक अनुभव।',
    rateOnGoogle: 'गूगल पर रिव्यू दें',
    genuineGoogleReviews: '१००% प्रामाणिक गूगल रिव्यू',
    basedOnReviews: '१६ सत्यापित गूगल समीक्षाओं पर आधारित',
    moreReviews: 'और अधिक गूगल रिव्यू व तस्वीरें',
    reviewsList: [
      {
        author: 'सत्यापित मरीज',
        location: 'स्थानीय निवासी',
        comment: 'डॉक्टर बहुत अच्छे और पेशेवर हैं, हमेशा सबसे अच्छा इलाज देते हैं।',
      },
      {
        author: 'हेल्थकेयर समीक्षक',
        location: 'वाघोली, पुणे',
        comment: 'गुणवत्तापूर्ण स्वास्थ्य सेवाओं के लिए अत्यधिक अनुशंसित!',
      },
      {
        author: 'क्लिनिक मरीज',
        location: 'हालिया यात्रा',
        comment: 'मैं बहुत जल्दी ठीक हो गया। बहुत विनम्र स्वभाव, सटीक निदान और सच्ची देखभाल।',
      },
      {
        author: 'फैमिली केयर मरीज',
        location: 'बीएआईएफ रोड',
        comment: 'बीएआईएफ रोड क्षेत्र में सबसे अच्छे फैमिली डॉक्टर। क्लिनिक साफ-सुथरा है, बेवजह लंबा इंतजार नहीं करना पड़ता।',
      },
    ],

    locationSuper: 'वाघोली में हमारा पता',
    locationTitle: 'पता और दिशा-निर्देश',
    locationDesc: 'बीएआईएफ रोड पर मुलिक लक्ज़ुरिया के ठीक सामने, संस्कृति कॉम्प्लेक्स में सुविधाजनक स्थान पर स्थित।',
    landmarkLabel: 'लैंडमार्क:',
    landmarkValue: 'मुलिक लक्ज़ुरिया के सामने',
    startNavigation: 'नेविगेशन शुरू करें',
    copyAddress: 'पता कॉपी करें',
    addressCopied: 'पता कॉपी हो गया!',
    openInGoogleMaps: 'गूगल मैप्स पर देखें',

    modalTitle: 'परामर्श या अपॉइंटमेंट पूछताछ',
    patientNameLabel: 'मरीज का नाम',
    patientNamePlaceholder: 'पूरा नाम दर्ज करें',
    phoneLabel: 'फोन नंबर',
    phonePlaceholder: 'जैसे: ९८७६५४३२१०',
    preferredSessionLabel: 'पसंदीदा सत्र',
    reasonLabel: 'परामर्श का कारण / लक्षण',
    sendWhatsApp: 'व्हाट्सएप पर भेजें',
    directCall: 'सीधा कॉल करें',
    inquirySubmittedTitle: 'पूछताछ शुरू हुई!',
    inquirySubmittedDesc: 'आपकी जानकारी व्हाट्सएप पर खुल गई है। आप डॉक्टर को सीधे कॉल भी कर सकते हैं।',
    closeWindow: 'खिड़की बंद करें',
    noPrepaymentNote: 'कोई पूर्व-भुगतान आवश्यक नहीं। ओपीडी समय में सीधे वॉक-इन भी आ सकते हैं।',

    footerAbout: 'वाघोली के परिवारों को आत्मीयता और उच्च गुणवत्ता वाली प्राथमिक चिकित्सा सेवाएं प्रदान करने वाला क्लिनिक।',
    quickLinks: 'त्वरित लिंक',
    contactLocation: 'संपर्क व पता',
    emergencyDisclaimer: 'नोट: आपातकालीन गंभीर स्थिति या दुर्घटना के लिए कृपया तुरंत आपातकालीन एम्बुलेंस या नजदीकी बड़े मल्टी-स्पेशियलिटी अस्पताल से संपर्क करें।',
  },
};

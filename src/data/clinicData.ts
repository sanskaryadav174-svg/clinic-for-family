export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface DaySchedule {
  day: string;
  morning: string;
  evening: string;
  isToday?: boolean;
}

export const CLINIC_INFO = {
  name: 'Arogyam Family Clinic',
  nameDevanagari: 'आरोग्यम् फॅमिली क्लिनिक',
  type: 'Medical Clinic / Family Health Centre',
  phone: '080803 95607',
  phoneRaw: '+918080395607',
  phoneDial: 'tel:08080395607',
  whatsappUrl: 'https://wa.me/918080395607?text=Hello%20Arogyam%20Family%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.',
  address: 'Sanskruti Complex, Baif Rd, opp. Mulik Luxuria, Wagholi, Pune, Maharashtra 412207',
  landmark: 'Opposite Mulik Luxuria, BAIF Road',
  city: 'Wagholi, Pune, Maharashtra',
  pincode: '412207',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Arogyam+Family+Clinic+BAIF+road+Wagholi+Sanskruti+Complex+opp+Mulik+Luxuria+Pune',
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Arogyam+Family+Clinic+BAIF+road+Wagholi+reviews',
  rating: 4.9,
  totalReviews: 16,
  hours: {
    morning: '9:00 AM – 1:00 PM',
    evening: '5:30 PM – 9:30 PM',
    monSat: 'Mon – Sat: 9:00 AM – 1:00 PM & 5:30 PM – 9:30 PM',
    sunday: 'Sunday: 10:00 AM – 1:00 PM (Evening Closed)',
  }
};

export const CLINIC_SCHEDULE: DaySchedule[] = [
  { day: 'Monday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Tuesday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Wednesday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Thursday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Friday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Saturday', morning: '9:00 AM – 1:00 PM', evening: '5:30 PM – 9:30 PM' },
  { day: 'Sunday', morning: '10:00 AM – 1:00 PM', evening: 'Closed (Emergency on Call)' },
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Verified Patient',
    rating: 5,
    timeAgo: 'Local Resident',
    comment: 'Doctor is really good and professional always give best treatment.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Healthcare Reviewer',
    rating: 5,
    timeAgo: 'Wagholi, Pune',
    comment: 'Highly recommended for quality healthcare services!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Clinic Patient',
    rating: 5,
    timeAgo: 'Recent Visit',
    comment: 'I recovered quickly. Very polite behavior, accurate diagnosis, and genuine care.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Family Care Patient',
    rating: 5,
    timeAgo: 'BAIF Road',
    comment: 'Best family doctor in the BAIF road vicinity. Clean clinic, no long unnecessary waiting, and very thoughtful medical advice.',
    verified: true,
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'general-consult',
    title: 'General Physician & Family Care',
    description: 'Comprehensive medical consultations for family members of all ages, from infants to seniors.',
    iconName: 'Stethoscope',
    badge: 'Primary Care',
  },
  {
    id: 'fevers-infections',
    title: 'Fever, Cold & Viral Infection Care',
    description: 'Prompt evaluation and evidence-based relief for seasonal flu, viral fevers, cough, throat infections, and allergy.',
    iconName: 'Thermometer',
    badge: 'Same-Day Care',
  },
  {
    id: 'chronic-care',
    title: 'Diabetes, BP & Chronic Health',
    description: 'Routine blood pressure monitoring, blood sugar checks, thyroid review, and lifestyle management guidance.',
    iconName: 'Activity',
    badge: 'Long-term Health',
  },
  {
    id: 'pediatric',
    title: 'Pediatric & Child Health',
    description: 'Gentle checkups for childhood illnesses, digestion issues, growth monitoring, and seasonal health concerns.',
    iconName: 'HeartPulse',
    badge: 'Kids Care',
  },
  {
    id: 'preventive',
    title: 'Preventive Health Checkups',
    description: 'Routine wellness assessments, preventive health advice, and seasonal immunization recommendations.',
    iconName: 'ShieldCheck',
    badge: 'Wellness',
  },
  {
    id: 'first-aid',
    title: 'Minor Wounds & Emergency First Aid',
    description: 'Hygienic wound cleaning, dressing, minor cuts treatment, and acute symptom stabilization.',
    iconName: 'Bandage',
    badge: 'Walk-in Care',
  },
];

/**
 * Calculates whether the clinic is currently open based on standard Indian Standard Time / local time
 */
export function getClinicCurrentStatus(): {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
} {
  try {
    const now = new Date();
    // India Standard Time offset (UTC+5:30) or local
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, ...
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentDecimal = hour + minute / 60;

    if (day === 0) {
      // Sunday
      if (currentDecimal >= 10 && currentDecimal < 13) {
        return {
          isOpen: true,
          statusText: 'Open now',
          nextEventText: 'Closes at 1:00 PM (Sunday morning session)',
        };
      }
      return {
        isOpen: false,
        statusText: 'Closed now',
        nextEventText: 'Opens Monday 9:00 AM',
      };
    }

    // Monday to Saturday
    // Morning session: 9:00 AM to 1:00 PM (9.0 to 13.0)
    // Evening session: 5:30 PM to 9:30 PM (17.5 to 21.5)
    if (currentDecimal >= 9 && currentDecimal < 13) {
      const isClosingSoon = currentDecimal >= 12.5;
      return {
        isOpen: true,
        statusText: isClosingSoon ? 'Closes soon' : 'Open now',
        nextEventText: isClosingSoon ? 'Closes at 1:00 PM · Opens 5:30 PM' : 'Closes at 1:00 PM',
      };
    } else if (currentDecimal >= 17.5 && currentDecimal < 21.5) {
      const isClosingSoon = currentDecimal >= 21.0;
      return {
        isOpen: true,
        statusText: isClosingSoon ? 'Closes soon' : 'Open now',
        nextEventText: isClosingSoon ? 'Closes at 9:30 PM' : 'Closes at 9:30 PM',
      };
    } else if (currentDecimal < 9) {
      return {
        isOpen: false,
        statusText: 'Opens soon',
        nextEventText: 'Opens at 9:00 AM today',
      };
    } else if (currentDecimal >= 13 && currentDecimal < 17.5) {
      return {
        isOpen: false,
        statusText: 'Afternoon break',
        nextEventText: 'Opens at 5:30 PM today',
      };
    } else {
      const nextDayName = day === 6 ? 'Sunday 10:00 AM' : 'tomorrow 9:00 AM';
      return {
        isOpen: false,
        statusText: 'Closed for the day',
        nextEventText: `Opens ${nextDayName}`,
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open today',
      nextEventText: 'Morning: 9:00 AM – 1:00 PM · Evening: 5:30 PM – 9:30 PM',
    };
  }
}

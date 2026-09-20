import React from 'react';
import { Phone, Navigation, MessageSquare, Star, MapPin, Clock, CheckCircle2, Shield, Heart } from 'lucide-react';
import { CLINIC_INFO, getClinicCurrentStatus } from '../data/clinicData';
import { ArogyamLogo } from './ArogyamLogo';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenAppointment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment }) => {
  const status = getClinicCurrentStatus();
  const { t } = useLanguage();

  const getTranslatedStatus = () => {
    if (status.statusText.includes('Open')) return t.openNow;
    if (status.statusText.includes('Closes soon')) return t.closesSoon;
    if (status.statusText.includes('Afternoon')) return t.afternoonBreak;
    if (status.statusText.includes('Opens soon')) return t.opensSoon;
    return t.closedNow;
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6]">
      {/* Subtle warm decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEFE5]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8F3FA]/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Google Rating Badge */}
            <a
              href={CLINIC_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#E9DFCFC0] shadow-xs text-xs sm:text-sm font-semibold text-[#384139] hover:bg-white hover:border-[#DF5024]/40 transition-all mb-4"
            >
              <span className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span className="ml-1 text-sm font-bold text-[#1E2421]">{CLINIC_INFO.rating}</span>
              </span>
              <span className="text-[#889389]">•</span>
              <span className="text-[#556056]">{t.googleRating} ({t.verifiedReviewsCount})</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EDF7ED] text-[#2E7D32] text-xs font-bold">
                {t.medicalClinic}
              </span>
            </a>

            {/* Clinic Name with Devanagari touch */}
            <h1 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191F1C] tracking-tight leading-[1.15] italic">
              Arogyam Family Clinic
              <span className="block text-xl sm:text-2xl font-bold font-devanagari text-[#DF5024] mt-1 not-italic">
                आरोग्यम् फॅमिली क्लिनिक
              </span>
            </h1>

            {/* Subtitle / Location - clear and to the point for patients */}
            <p className="mt-3 text-base sm:text-lg text-[#3D4740] font-medium leading-relaxed bg-[#FAF5EC] border border-[#E9DFCF] rounded-2xl p-4 w-full">
              <span className="block font-bold text-[#DF5024] text-sm sm:text-base mb-1">
                {t.clinicPurposeHeading}
              </span>
              {t.clinicPurposeText}
            </p>

            {/* Quick Status Pill */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold border ${
                status.isOpen
                  ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]'
                  : 'bg-[#FFF3E0] text-[#E65100] border-[#FFE0B2]'
              }`}>
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-[#2E7D32] animate-pulse' : 'bg-[#E65100]'}`} />
                {getTranslatedStatus()}
              </span>
              <span className="text-[#687369] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#889389]" />
                {status.nextEventText}
              </span>
            </div>

            {/* Address snippet */}
            <div className="mt-3 flex items-start gap-2 text-xs sm:text-sm text-[#5B655D]">
              <MapPin className="w-4 h-4 text-[#DF5024] shrink-0 mt-0.5" />
              <span>
                Sanskruti Complex, Baif Rd, opp. Mulik Luxuria, Wagholi, Pune, Maharashtra 412207
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={CLINIC_INFO.phoneDial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#DF5024] hover:bg-[#C84117] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>{t.callDoctor}</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-[#27302A] bg-[#FFFDF9] hover:bg-[#F2ECE0] rounded-xl border border-[#DED3C1] shadow-xs hover:shadow-sm transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#DF5024]" />
                <span>{t.getDirections}</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm sm:text-base font-semibold text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-xl border border-[#C8E6C9] transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                <span>{t.whatsapp}</span>
              </a>
            </div>

            {/* Key highlights checklist */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-[#EAE1D3] w-full text-xs sm:text-sm text-[#4E5750]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{t.walkInWelcome}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1D70B8] shrink-0" />
                <span>{t.qualityCare}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#99225D] shrink-0" />
                <span>{t.fastRecovery}</span>
              </div>
            </div>

          </div>

          {/* Right Card Column: Visual Signboard & Quick Info */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] border border-[#E9E0D2] rounded-2xl p-6 sm:p-7 shadow-sm relative">
              
              {/* Logo display matching the uploaded signboard */}
              <div className="text-center pb-5 border-b border-[#F0E8DC] flex flex-col items-center">
                <div className="p-3 bg-[#FAF6EE] rounded-2xl border border-[#EBE2D4] shadow-inner mb-3">
                  <ArogyamLogo size={96} showText={false} />
                </div>
                <div className="text-center">
                  <span className="font-devanagari font-black text-2xl text-[#DF5024] tracking-wide block">
                    आरोग्यम् फॅमिली क्लिनिक
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#4E564F]">
                    Arogyam Family Clinic
                  </span>
                  <p className="text-xs text-[#7B867D] mt-0.5">
                    Sanskruti Complex, Baif Road, Wagholi
                  </p>
                </div>
              </div>

              {/* Clinic Timings & Schedule Box */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#69746A]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#DF5024]" />
                    {t.dailyOpdTimings}
                  </span>
                  <span className="text-[#2E7D32] font-semibold">{t.morningSession.split(' ')[0]} & {t.eveningSession.split(' ')[0]}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs sm:text-sm">
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EDE4D6]">
                    <span className="block text-[11px] font-bold text-[#869188] uppercase">{t.morningSession}</span>
                    <span className="block font-extrabold text-[#1E2521] mt-0.5">9:00 AM – 1:00 PM</span>
                    <span className="text-[10px] text-[#69756B]">{t.sunMorningOnly}</span>
                  </div>

                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EDE4D6]">
                    <span className="block text-[11px] font-bold text-[#869188] uppercase">{t.eveningSession}</span>
                    <span className="block font-extrabold text-[#1E2521] mt-0.5">5:30 PM – 9:30 PM</span>
                    <span className="text-[10px] text-[#69756B]">Mon – Sat</span>
                  </div>
                </div>

                {/* Instant Action Prompt */}
                <div className="pt-2">
                  <button
                    onClick={onOpenAppointment}
                    className="w-full py-3 px-4 rounded-xl bg-[#1D70B8] hover:bg-[#155B96] text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.requestAppointment}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-[#EAE1D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Direct Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#DF5024] uppercase">
                {t.locationSuper}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2522] tracking-tight mt-1">
                {t.locationTitle}
              </h2>
              <p className="mt-2 text-sm text-[#5C665E]">
                {t.locationDesc}
              </p>

              {/* Address card */}
              <div className="mt-6 p-5 sm:p-6 bg-[#FAF7F2] rounded-2xl border border-[#E9E0D1] space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FEECE5] border border-[#FCD8C9] flex items-center justify-center text-[#DF5024] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1E2521]">Arogyam Family Clinic</h3>
                    <p className="text-sm text-[#4E5851] mt-1 font-medium leading-relaxed">
                      Sanskruti Complex, Baif Rd, opp. Mulik Luxuria, Wagholi, Pune, Maharashtra 412207
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFDF9] rounded-lg border border-[#E2D7C6] text-xs font-semibold text-[#576259]">
                      <span className="text-[#DF5024]">★ {t.landmarkLabel}</span> {t.landmarkValue}
                    </div>
                  </div>
                </div>

                {/* Phone contact */}
                <div className="flex items-center gap-3.5 pt-3 border-t border-[#ECE2D2]">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F3FA] border border-[#CFE5F5] flex items-center justify-center text-[#1D70B8] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#727D74] block">Call for Appointment / Inquiries</span>
                    <a
                      href={CLINIC_INFO.phoneDial}
                      className="text-base font-extrabold text-[#DF5024] hover:text-[#B93813] transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#DF5024] hover:bg-[#C94117] transition-all shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.startNavigation}</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#3D463F] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#DDD3C2] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#2E7D32]" />
                      <span>{t.addressCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#7A867C]" />
                      <span>{t.copyAddress}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Map Frame / Visual Location card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[340px] bg-[#F7F2E8] rounded-2xl border border-[#E8DFD0] overflow-hidden relative flex flex-col justify-between p-6">
              
              {/* Map mockup header */}
              <div className="flex items-center justify-between z-10">
                <div className="bg-[#FFFDF9]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-[#E5DAC8] shadow-xs flex items-center gap-2 text-xs font-bold text-[#2A332C]">
                  <MapPin className="w-4 h-4 text-[#DF5024]" />
                  <span>BAIF Road, Wagholi</span>
                </div>
                
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFFDF9]/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#E5DAC8] text-xs font-bold text-[#1D70B8] hover:text-[#125086] transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stylized road & location pin representation */}
              <div className="my-auto flex flex-col items-center justify-center text-center py-6">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#DF5024]/20 animate-ping absolute inset-0 m-auto" />
                  <div className="w-14 h-14 rounded-2xl bg-[#DF5024] text-white flex items-center justify-center shadow-lg relative z-10 mx-auto">
                    <MapPin className="w-7 h-7" />
                  </div>
                </div>

                <h4 className="text-base font-extrabold text-[#1B221D]">
                  Arogyam Family Clinic
                </h4>
                <p className="text-xs text-[#5D675F] max-w-sm mt-1">
                  Sanskruti Complex, opposite Mulik Luxuria, BAIF Road, Wagholi, Pune 412207
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#667268] bg-[#FFFDF9] px-3.5 py-1.5 rounded-xl border border-[#E2D8C7]">
                  <Clock className="w-3.5 h-3.5 text-[#DF5024]" />
                  <span>{t.morningSession} 9:00am–1:00pm | {t.eveningSession} 5:30pm–9:30pm</span>
                </div>
              </div>

              {/* Bottom directions callout */}
              <div className="z-10 bg-[#FFFDF9] p-3 rounded-xl border border-[#E5DAC9] flex items-center justify-between text-xs">
                <span className="text-[#556056] font-medium">{t.startNavigation}</span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#DF5024] hover:underline"
                >
                  {t.openInGoogleMaps} →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

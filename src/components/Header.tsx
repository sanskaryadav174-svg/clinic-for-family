import React from 'react';
import { Phone, Navigation, Clock, Calendar } from 'lucide-react';
import { ArogyamLogo } from './ArogyamLogo';
import { LanguageSelector } from './LanguageSelector';
import { CLINIC_INFO, getClinicCurrentStatus } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
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
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EBE3D5] shadow-2xs">
      {/* Top micro-bar */}
      <div className="bg-[#F5EFE6] border-b border-[#E8DFCFC0] px-4 py-1.5 text-xs text-[#525B53] font-medium">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#DF5024] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#DF5024] animate-pulse" />
              {getTranslatedStatus()}
            </span>
            <span className="text-[#879288]">•</span>
            <span className="hidden sm:inline text-[#646E65]">{status.nextEventText}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-[#646E65]">
              <Clock className="w-3.5 h-3.5 text-[#879288]" />
              {t.monSatSchedule}
            </span>
            <a
              href={CLINIC_INFO.phoneDial}
              className="inline-flex items-center gap-1 text-[#DF5024] hover:text-[#C43E15] font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 group">
          <ArogyamLogo size={52} />
        </a>

        {/* Language Selector + Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher (English / मराठी / हिन्दी) */}
          <LanguageSelector />

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[#3B433D] bg-[#F2EDE2] hover:bg-[#EAE3D4] rounded-xl transition-all border border-[#E3D9C8]"
          >
            <Navigation className="w-4 h-4 text-[#DF5024]" />
            <span>{t.directions}</span>
          </a>

          <a
            href={CLINIC_INFO.phoneDial}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-sm font-bold text-white bg-[#DF5024] hover:bg-[#C94117] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xs:inline">{t.call}</span>
            <span className="hidden md:inline">{CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-sm font-bold text-[#1D70B8] bg-[#EBF4FC] hover:bg-[#DCEEFB] rounded-xl transition-all border border-[#CDE3F7] active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">{t.bookVisit}</span>
            <span className="sm:hidden">{t.bookVisit.slice(0, 5)}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

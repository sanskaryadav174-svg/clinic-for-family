import React, { useState } from 'react';
import { X, Phone, MessageSquare, Calendar, User, CheckCircle2, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArogyamLogo } from './ArogyamLogo';
import { useLanguage } from '../context/LanguageContext';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSession, setPreferredSession] = useState<'morning' | 'evening'>('morning');
  const [reason, setReason] = useState(defaultService || 'General Consultation');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const sessionLabel = preferredSession === 'morning' ? 'Morning (9:00 AM - 1:00 PM)' : 'Evening (5:30 PM - 9:30 PM)';
    const text = `Hello Arogyam Family Clinic, I would like to inquire about a consultation.%0A%0A• Patient Name: ${encodeURIComponent(name || 'Not specified')}%0A• Contact: ${encodeURIComponent(phone || 'Not specified')}%0A• Preferred Session: ${encodeURIComponent(sessionLabel)}%0A• Reason / Service: ${encodeURIComponent(reason)}`;
    
    window.open(`https://wa.me/918080395607?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B221D]/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border border-[#EBE1D2] shadow-2xl p-6 sm:p-7 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7B867D] hover:text-[#2A332C] hover:bg-[#F2ECE0] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <ArogyamLogo size={46} showText={false} />
          <div>
            <h3 className="text-xl font-extrabold text-[#1F2622]">
              {t.modalTitle}
            </h3>
            <p className="text-xs text-[#626E65]">
              Arogyam Family Clinic • BAIF Road, Wagholi
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-[#1E2521]">{t.inquirySubmittedTitle}</h4>
            <p className="text-xs sm:text-sm text-[#57625A] max-w-xs mx-auto">
              {t.inquirySubmittedDesc} <strong className="text-[#DF5024]">{CLINIC_INFO.phone}</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CLINIC_INFO.phoneDial}
                className="w-full py-3 px-4 rounded-xl bg-[#DF5024] text-white font-bold text-sm inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.call} {CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F5EFE4] text-[#4F5952] font-semibold text-xs hover:bg-[#EBE3D4] transition-colors cursor-pointer"
              >
                {t.closeWindow}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="space-y-4">
            
            {/* Patient Name */}
            <div>
              <label className="block text-xs font-bold text-[#3B443D] uppercase tracking-wider mb-1">
                {t.patientNameLabel}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C978E] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder={t.patientNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#DFD6C6] focus:outline-none focus:border-[#DF5024] focus:ring-1 focus:ring-[#DF5024] text-sm text-[#222A24]"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-xs font-bold text-[#3B443D] uppercase tracking-wider mb-1">
                {t.phoneLabel}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#8C978E] absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#DFD6C6] focus:outline-none focus:border-[#DF5024] focus:ring-1 focus:ring-[#DF5024] text-sm text-[#222A24]"
                />
              </div>
            </div>

            {/* Preferred Session */}
            <div>
              <label className="block text-xs font-bold text-[#3B443D] uppercase tracking-wider mb-1.5">
                {t.preferredSessionLabel}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPreferredSession('morning')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    preferredSession === 'morning'
                      ? 'bg-[#FDF3EE] border-[#DF5024] text-[#DF5024] font-bold shadow-xs'
                      : 'bg-[#FAF7F2] border-[#DFD6C6] text-[#556057] hover:bg-[#F4ECE0]'
                  }`}
                >
                  <span className="block font-bold">{t.morningSession}</span>
                  <span className="text-[11px] opacity-80">9:00 AM – 1:00 PM</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferredSession('evening')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    preferredSession === 'evening'
                      ? 'bg-[#EAF3FA] border-[#1D70B8] text-[#1D70B8] font-bold shadow-xs'
                      : 'bg-[#FAF7F2] border-[#DFD6C6] text-[#556057] hover:bg-[#F4ECE0]'
                  }`}
                >
                  <span className="block font-bold">{t.eveningSession}</span>
                  <span className="text-[11px] opacity-80">5:30 PM – 9:30 PM</span>
                </button>
              </div>
            </div>

            {/* Reason for Visit */}
            <div>
              <label className="block text-xs font-bold text-[#3B443D] uppercase tracking-wider mb-1">
                {t.reasonLabel}
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#DFD6C6] focus:outline-none focus:border-[#DF5024] text-sm text-[#222A24]"
              >
                <option value="General Consultation">General Physician Consultation</option>
                <option value="Fever, Cold, Cough">Fever, Cold, Cough or Viral Infection</option>
                <option value="Child Healthcare">Child / Pediatric Illness</option>
                <option value="Diabetes & BP Check">Diabetes / Blood Pressure Check</option>
                <option value="Routine Health Checkup">Routine Preventive Checkup</option>
                <option value="Wound Dressing / First Aid">Wound Dressing / First Aid</option>
                <option value="Other Medical Inquiry">Other Medical Consultation</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-[#2E7D32] hover:bg-[#256628] text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.sendWhatsApp}</span>
              </button>

              <a
                href={CLINIC_INFO.phoneDial}
                className="py-3 px-4 rounded-xl bg-[#DF5024] hover:bg-[#C53F15] text-white font-bold text-sm shadow-xs transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.directCall}</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-[#7F8B82] pt-1">
              {t.noPrepaymentNote}
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

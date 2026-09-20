import React, { useState } from 'react';
import { Phone, Navigation, Share2, Bookmark, Check, MessageSquare, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export const QuickActionsBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const { t } = useLanguage();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CLINIC_INFO.name,
          text: `Arogyam Family Clinic - BAIF Road, Wagholi, Pune. Phone: ${CLINIC_INFO.phone}`,
          url: window.location.href,
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(
        `${CLINIC_INFO.name}\n${CLINIC_INFO.address}\nPhone: ${CLINIC_INFO.phone}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-[#FFFDF9] border-y border-[#ECE2D2] py-4 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Quick Stats / Clinic Rating Summary */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EE] rounded-xl border border-[#E9DFCF]">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span className="text-base font-extrabold text-[#222A24]">{CLINIC_INFO.rating}</span>
              <span className="text-xs text-[#6B776D]">({t.verifiedReviewsCount})</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#4F5951]">
              Sanskruti Complex, Baif Rd, Wagholi
            </span>
          </div>

          {/* Action pills: Directions, Call, Share, Save */}
          <div className="flex items-center gap-2">
            <a
              href={CLINIC_INFO.phoneDial}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#DF5024] text-white hover:bg-[#C94117] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.call}</span>
            </a>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#F4EDE0] text-[#333C35] hover:bg-[#EAE1D2] transition-colors border border-[#DFD5C2]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#DF5024]" />
              <span>{t.directions}</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#E8F5E9] text-[#1B5E20] hover:bg-[#D4EDD6] transition-colors border border-[#C8E6C9]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span className="hidden sm:inline">{t.whatsapp}</span>
            </a>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#F7F2E8] text-[#556157] hover:bg-[#ECE4D5] transition-colors border border-[#E3D9C8] cursor-pointer"
              title="Share clinic info"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">{t.share}</span>
                </>
              )}
            </button>

            <button
              onClick={handleSave}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors border cursor-pointer ${
                saved
                  ? 'bg-[#FFF3E0] text-[#E65100] border-[#FFE0B2]'
                  : 'bg-[#F7F2E8] text-[#556157] hover:bg-[#ECE4D5] border-[#E3D9C8]'
              }`}
              title="Save Clinic"
            >
              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-[#E65100]' : ''}`} />
              <span className="hidden xs:inline">{saved ? t.saved : t.save}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

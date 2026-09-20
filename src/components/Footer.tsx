import React from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArogyamLogo } from './ArogyamLogo';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#FAF4EB] border-t border-[#E8DFCF] pt-12 pb-8 text-xs text-[#5D675F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E7DDCE]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <ArogyamLogo size={50} />
            <p className="text-xs sm:text-sm text-[#5D675F] leading-relaxed max-w-sm">
              {t.footerAbout}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-semibold text-[#667368]">
              <span className="px-2 py-0.5 rounded-md bg-[#FFFDF9] border border-[#E4D9C8]">
                ⭐ 4.9 ({t.verifiedReviewsCount})
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#FFFDF9] border border-[#E4D9C8]">
                {t.medicalClinic}
              </span>
            </div>
          </div>

          {/* Quick Contact Column */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#313A33]">
              {t.contactLocation}
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#DF5024] shrink-0 mt-0.5" />
              <span>
                Sanskruti Complex, Baif Rd, opp. Mulik Luxuria, Wagholi, Pune, Maharashtra 412207
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#DF5024] shrink-0" />
              <a
                href={CLINIC_INFO.phoneDial}
                className="font-bold text-[#DF5024] hover:underline"
              >
                080803 95607
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-[#1D70B8] shrink-0" />
              <span>Mon–Sat: 9am–1pm & 5:30pm–9:30pm (Sun: 10am–1pm)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#313A33]">
              {t.quickLinks}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#DF5024] transition-colors">
                  {t.servicesSuper}
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-[#DF5024] transition-colors">
                  {t.scheduleTitle}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DF5024] transition-colors">
                  {t.reviewsTitle}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DF5024] transition-colors">
                  {t.locationTitle}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#DF5024] hover:underline pt-1"
                >
                  <span>{t.openInGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#7A857D]">
          <p>
            © {new Date().getFullYear()} Arogyam Family Clinic (आरोग्यम् फॅमिली क्लिनिक), Wagholi.
          </p>
          <p className="max-w-md text-right sm:text-right text-[10px] text-[#8C988F]">
            {t.emergencyDisclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};

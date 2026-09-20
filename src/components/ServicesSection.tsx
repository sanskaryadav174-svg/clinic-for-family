import React from 'react';
import { 
  Stethoscope, 
  Thermometer, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  Bandage, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { CORE_SERVICES } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-5 h-5 text-[#1D70B8]" />;
      case 1:
        return <Thermometer className="w-5 h-5 text-[#DF5024]" />;
      case 2:
        return <Activity className="w-5 h-5 text-[#99225D]" />;
      case 3:
        return <HeartPulse className="w-5 h-5 text-[#388E3C]" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-[#1D70B8]" />;
      case 5:
        return <Bandage className="w-5 h-5 text-[#DF5024]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#DF5024]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10">
          <span className="text-xs font-bold tracking-wider text-[#DF5024] uppercase">
            {t.servicesSuper}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2522] tracking-tight mt-1">
            {t.servicesTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5D675F]">
            {t.servicesDesc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.servicesList.map((service, idx) => (
            <div
              key={service.title}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#E9E0D1] hover:border-[#DF5024]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F6F0E6] group-hover:bg-[#FFF] border border-[#E8DEC8] transition-colors">
                    {getIcon(idx)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF4EA] text-[#69746A] border border-[#E8DFD0]">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1E2521] group-hover:text-[#DF5024] transition-colors">
                  {service.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-[#5B665E] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2EADB] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D70B8] hover:text-[#0F4F85] transition-colors cursor-pointer"
                >
                  <span>{t.inquireForThis}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <CheckCircle className="w-4 h-4 text-[#388E3C]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Consultation highlights bar */}
        <div className="mt-8 bg-[#FFFDF9] rounded-2xl p-5 border border-[#E7DDCE] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F2622]">{t.walkInBannerTitle}</h4>
              <p className="text-xs text-[#636F65]">{t.walkInBannerDesc}</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('General Consultation')}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-[#DF5024] bg-[#FDF2ED] hover:bg-[#FCE5DA] rounded-xl border border-[#F6D0BE] transition-colors cursor-pointer"
          >
            {t.checkOpdTimings}
          </button>
        </div>

      </div>
    </section>
  );
};

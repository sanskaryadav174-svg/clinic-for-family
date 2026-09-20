import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'segmented' | 'dropdown';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  variant = 'segmented',
}) => {
  const { lang, setLang } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={dropdownRef}>
      {/* Desktop / Tablet: Quick Segmented Pills */}
      <div className="hidden sm:inline-flex items-center p-1 bg-[#F2EDE2] border border-[#E3D9C8] rounded-xl shadow-2xs">
        <div className="flex items-center gap-1 px-1.5 text-[#6D776F]">
          <Globe className="w-3.5 h-3.5 text-[#DF5024]" />
        </div>
        {languages.map((item) => {
          const isActive = lang === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLang(item.code)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FFFDF9] text-[#DF5024] shadow-xs border border-[#E4D9C8]'
                  : 'text-[#535D55] hover:text-[#1E2521] hover:bg-[#EBE4D5]/60'
              }`}
            >
              {item.nativeName}
            </button>
          );
        })}
      </div>

      {/* Mobile / Compact Button */}
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F2EDE2] border border-[#E3D9C8] text-xs font-bold text-[#353E37] active:scale-95 transition-all cursor-pointer"
          aria-label="Change language"
        >
          <Globe className="w-3.5 h-3.5 text-[#DF5024]" />
          <span>{languages.find((l) => l.code === lang)?.nativeName}</span>
          <ChevronDown className="w-3 h-3 text-[#7B867E]" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1.5 z-50 w-36 bg-[#FFFDF9] rounded-2xl border border-[#EBE1D2] shadow-xl p-1.5 divide-y divide-[#F2ECE0] animate-in fade-in zoom-in-95 duration-100">
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLang(item.code);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FAF3E8] text-[#DF5024]'
                      : 'text-[#4A544C] hover:bg-[#F5EFE4]'
                  }`}
                >
                  <span>{item.nativeName}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#DF5024]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

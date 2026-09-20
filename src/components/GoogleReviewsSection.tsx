import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquarePlus } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export const GoogleReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#EAE1D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#DF5024] uppercase">
              {t.reviewsSuper}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2522] tracking-tight mt-1">
              {t.reviewsTitle}
            </h2>
            <p className="mt-1 text-sm text-[#5E6860]">
              {t.reviewsDesc}
            </p>
          </div>

          <a
            href={CLINIC_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1D70B8] bg-[#EAF3FA] hover:bg-[#D9EAF7] border border-[#CDE1F4] transition-all shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{t.rateOnGoogle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Rating Scorecard + Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E9E0D1] shadow-2xs mb-8">
          
          {/* Big Rating Number */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#EFE7DA] pb-6 md:pb-0 md:pr-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-black text-[#1D2420] tracking-tight">
                {CLINIC_INFO.rating}
              </span>
              <span className="text-lg text-[#7F8B81] font-semibold">/ 5.0</span>
            </div>
            
            <div className="flex items-center gap-1 mt-2 text-amber-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#545E56] mt-2">
              {t.basedOnReviews}
            </p>
            <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#2E7D32]">
              <CheckCircle className="w-3.5 h-3.5" />
              {t.genuineGoogleReviews}
            </span>
          </div>

          {/* Star Bar Breakdown (as in Google Review summary) */}
          <div className="md:col-span-8 flex flex-col gap-2">
            {[
              { stars: 5, pct: 94, count: 15 },
              { stars: 4, pct: 6, count: 1 },
              { stars: 3, pct: 0, count: 0 },
              { stars: 2, pct: 0, count: 0 },
              { stars: 1, pct: 0, count: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-3 font-bold text-[#444E46] text-right">{row.stars}</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <div className="flex-1 h-2.5 bg-[#EFE8DD] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-6 text-[11px] text-[#737E75] text-right font-medium">{row.count}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Highlighted Patient Review Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.reviewsList.slice(0, 3).map((review, i) => (
            <div
              key={i}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#EBE2D3] hover:border-[#DF5024]/30 transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#869288] font-medium">{review.location}</span>
                </div>

                <blockquote className="text-sm sm:text-base font-semibold text-[#252D27] leading-relaxed italic">
                  "{review.comment}"
                </blockquote>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2EADC] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#FAF3E8] border border-[#E6DBCB] flex items-center justify-center font-bold text-[11px] text-[#DF5024]">
                    G
                  </div>
                  <span className="font-semibold text-[#4F5A51]">{review.author}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#2E7D32] font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews link bar */}
        <div className="mt-8 text-center">
          <a
            href={CLINIC_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#DF5024] hover:text-[#C43E15] transition-colors"
          >
            <span>{t.moreReviews}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

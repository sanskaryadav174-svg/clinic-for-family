import React from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';
import { CLINIC_SCHEDULE, getClinicCurrentStatus } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export const TimetableSection: React.FC = () => {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, ...
  // Match schedule index: Monday is index 0, Sunday is index 6
  const adjustedTodayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
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
    <section id="hours" className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-[#EBE2D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Schedule Overview & Today's Status */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#DF5024] uppercase">
                {t.scheduleSuper}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2522] tracking-tight mt-1">
                {t.scheduleTitle}
              </h2>
              <p className="mt-2 text-sm text-[#5D675F]">
                {t.scheduleDesc}
              </p>

              {/* Current Status Card */}
              <div className="mt-6 p-5 rounded-2xl bg-[#FAF6EE] border border-[#E9DFCF]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-[#737E75]">{t.liveStatus}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    status.isOpen 
                      ? 'bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]' 
                      : 'bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]'
                  }`}>
                    {getTranslatedStatus()}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-[#222A24]">
                  {status.nextEventText}
                </p>
                <div className="mt-3 text-xs text-[#6B776D] flex items-center gap-1.5 pt-3 border-t border-[#E6DCCB]">
                  <Clock className="w-3.5 h-3.5 text-[#DF5024]" />
                  <span>{t.morningSession}: 9:00 AM – 1:00 PM | {t.eveningSession}: 5:30 PM – 9:30 PM</span>
                </div>
              </div>

              {/* Urgent Notice */}
              <div className="mt-4 p-4 rounded-xl bg-[#F4F9FD] border border-[#D5E7F7] flex items-start gap-3 text-xs text-[#2A527A]">
                <AlertCircle className="w-4 h-4 text-[#1D70B8] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.urgentNoticeTitle}</strong> {t.urgentNoticeDesc} <a href="tel:08080395607" className="underline font-bold text-[#1D70B8]">080803 95607</a>.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Schedule Table */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8DFCF] overflow-hidden shadow-2xs">
              <div className="p-4 bg-[#F2ECE0] border-b border-[#E5DBCB] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#353D37]">
                  <Calendar className="w-4 h-4 text-[#DF5024]" />
                  <span>{t.weeklyScheduleTitle}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#667268]">Wagholi, Pune</span>
              </div>

              <div className="divide-y divide-[#EBE2D4]">
                {CLINIC_SCHEDULE.map((item, idx) => {
                  const isToday = idx === adjustedTodayIndex;
                  const localizedDay = t.days[item.day] || item.day;
                  return (
                    <div
                      key={item.day}
                      className={`p-3.5 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors ${
                        isToday ? 'bg-[#FFF9EE] font-medium' : 'hover:bg-[#FFFDF9]'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:w-1/3">
                        <span className={`text-sm font-bold ${isToday ? 'text-[#DF5024]' : 'text-[#242C26]'}`}>
                          {localizedDay}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wide font-extrabold px-2 py-0.5 rounded-md bg-[#DF5024] text-white">
                            {t.todayBadge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm text-[#4E5850] sm:w-2/3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full sm:w-auto">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1D70B8]" />
                            <span className="text-[11px] sm:text-xs text-[#7B877E] sm:hidden">Morn: </span>
                            {item.morning}
                          </span>
                          <span className="hidden sm:inline text-[#C0B9AC]">•</span>
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#99225D]" />
                            <span className="text-[11px] sm:text-xs text-[#7B877E] sm:hidden">Eve: </span>
                            {item.evening}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

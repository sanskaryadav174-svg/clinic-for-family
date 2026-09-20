/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { QuickActionsBar } from './components/QuickActionsBar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TimetableSection } from './components/TimetableSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationSection } from './components/LocationSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { Phone, Navigation, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainAppContent() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Consultation');
  const { t } = useLanguage();

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#28302A] flex flex-col font-sans selection:bg-[#DF5024]/15 selection:text-[#99225D]">
      {/* Sticky Top Header with Brand, Language Switcher & Contact */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section with Custom Signboard Logo & Key Info */}
        <HeroSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* Quick Actions Bar (Overview, Directions, Save, Share, Call) */}
        <QuickActionsBar />

        {/* Services & Primary Family Care */}
        <ServicesSection onSelectService={(service) => handleOpenAppointment(service)} />

        {/* OPD Consultation Timetable & Hours */}
        <TimetableSection />

        {/* Genuine Google Reviews Summary (4.9 Rating, 16 Reviews) */}
        <GoogleReviewsSection />

        {/* Location, Address, Landmark & Directions */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#E8DFD0] p-2.5 px-4 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={CLINIC_INFO.phoneDial}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#DF5024] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Phone className="w-4 h-4" />
          <span>{t.call}</span>
        </a>

        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF6EE] text-[#2C342E] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#E0D5C3]"
        >
          <Navigation className="w-4 h-4 text-[#DF5024]" />
          <span>{t.directions}</span>
        </a>

        <button
          onClick={() => handleOpenAppointment()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#1D70B8] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{t.bookVisit}</span>
        </button>
      </div>

      {/* Appointment & Consultation Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}

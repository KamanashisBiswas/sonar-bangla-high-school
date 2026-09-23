import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout Components
import { TopUtilityBar } from './components/TopUtilityBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Administration } from './pages/Administration';
import { Faculty } from './pages/Faculty';
import { FacultyProfile } from './pages/FacultyProfile';
import { Students } from './pages/Students';
import { Academic } from './pages/Academic';
import { Admission } from './pages/Admission';
import { Result } from './pages/Result';
import { Notices } from './pages/Notices';
import { Downloads } from './pages/Downloads';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { AcademicPrograms } from './pages/AcademicPrograms';
import { SportsAthletics } from './pages/SportsAthletics';
import { CulturalActivities } from './pages/CulturalActivities';
import { ClubsSocieties } from './pages/ClubsSocieties';

// Scroll to top on page navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollToTop />
      
      {/* Top Utility Contact Bar */}
      <TopUtilityBar />

      {/* Main Unified Branding & Sticky Navigation Header */}
      <Navbar />

      {/* Main Body Route Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/faculty/profile/:id" element={<FacultyProfile />} />
          <Route path="/profile/:id" element={<FacultyProfile />} />
          <Route path="/administration/profile/:id" element={<FacultyProfile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/result" element={<Result />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Program Pages */}
          <Route path="/academic-programs" element={<AcademicPrograms />} />
          <Route path="/programs/academic" element={<AcademicPrograms />} />
          <Route path="/sports-athletics" element={<SportsAthletics />} />
          <Route path="/programs/sports" element={<SportsAthletics />} />
          <Route path="/cultural-activities" element={<CulturalActivities />} />
          <Route path="/programs/cultural" element={<CulturalActivities />} />
          <Route path="/clubs-societies" element={<ClubsSocieties />} />
          <Route path="/programs/clubs" element={<ClubsSocieties />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Deep Pine Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

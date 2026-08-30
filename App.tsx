import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Admission from './pages/Admission';
import Result from './pages/Result';
import Notices from './pages/Notices';
import About from './pages/About';
import Academic from './pages/Academic';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Administration from './pages/Administration';
import Downloads from './pages/Downloads';
import FacultyExcellence from './pages/FacultyExcellence';
import SmartClassrooms from './pages/SmartClassrooms';
import AcademicBrilliance from './pages/AcademicBrilliance';
import CampusTour from './pages/CampusTour';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import ManageNotices from './pages/admin/ManageNotices';
import ManageTeachers from './pages/admin/ManageTeachers';
import ManageStudents from './pages/admin/ManageStudents';
import ManageCommittee from './pages/admin/ManageCommittee';
import ManageDownloads from './pages/admin/ManageDownloads';
import ManageGallery from './pages/admin/ManageGallery';
import ManageSettings from './pages/admin/ManageSettings';
import ManageAdmissions from './pages/admin/ManageAdmissions';
import ManageResults from './pages/admin/ManageResults';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <DataProvider>
            <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="administration" element={<Administration />} />
                <Route path="teachers" element={<Teachers />} />
                <Route path="students" element={<Students />} />
                <Route path="academic" element={<Academic />} />
                <Route path="downloads" element={<Downloads />} />
                <Route path="admission" element={<Admission />} />
                <Route path="result" element={<Result />} />
                <Route path="notices" element={<Notices />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="faculty-excellence" element={<FacultyExcellence />} />
                <Route path="smart-classrooms" element={<SmartClassrooms />} />
                <Route path="academic-excellence" element={<AcademicBrilliance />} />
                <Route path="campus-tour" element={<CampusTour />} />
                <Route path="admin-login" element={<Login />} />
              </Route>

              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="notices" element={<ManageNotices />} />
                  <Route path="teachers" element={<ManageTeachers />} />
                  <Route path="students" element={<ManageStudents />} />
                  <Route path="committee" element={<ManageCommittee />} />
                  <Route path="downloads" element={<ManageDownloads />} />
                  <Route path="gallery" element={<ManageGallery />} />
                  <Route path="settings" element={<ManageSettings />} />
                  <Route path="admissions" element={<ManageAdmissions />} />
                  <Route path="results" element={<ManageResults />} />
                </Route>
              </Route>

              {/* Legacy redirect for old admin link */}
              <Route path="/admin-panel" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
          </Router>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  </LanguageProvider>
  );
};

export default App;
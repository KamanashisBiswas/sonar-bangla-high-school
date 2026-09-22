import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ArrowUp,
  Heart,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004d34] text-white pt-14 pb-8 relative overflow-hidden mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/80">
          {/* Column 1: School Identity & Social (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={SCHOOL_INFO.logo}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-black text-sm text-white tracking-tight uppercase leading-snug">
                  SOS HERMANN GMEINER
                  <br />
                  SCHOOL KHULNA
                </h3>
                <p className="text-[11px] font-semibold text-emerald-300 mt-0.5">
                  Gollamari, Khulna – 9208
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed font-normal pr-4">
              Committed to nurturing enlightened individuals with strong values and a sense of global responsibility.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="/about"
                aria-label="Accessibility"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              {[
                { label: 'About Our Institution', path: '/about' },
                { label: 'Academic Programs', path: '/academic-programs' },
                { label: 'Sports & Athletics', path: '/sports-athletics' },
                { label: 'Admission', path: '/admission' },
                { label: 'Notice Board', path: '/notices' },
                { label: 'Photo Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/60 text-[9px]">▸</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Resources (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide">
              Useful Resources
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              {[
                { label: 'Student Portal', path: '/students' },
                { label: 'Teacher Portal', path: '/faculty' },
                { label: 'Downloads', path: '/downloads' },
                { label: 'Academic Calendar', path: '/academic' },
                { label: 'Rules & Policies', path: '/about' },
                { label: 'FAQ', path: '/about' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/60 text-[9px]">▸</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-extrabold text-white tracking-wide">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Gollamari, Khulna – 9208</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-400 shrink-0" />
                <span>+88 1777 777575</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-emerald-400 shrink-0" />
                <span className="break-all">soshkg@khulna.sos-school.org</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p>Sun – Thu: 8:00 AM – 4:00 PM</p>
                  <p className="text-emerald-300/80">(Friday Closed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80 font-medium">
          <p>© 2026 SOS Hermann Gmeiner School Khulna. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/about" className="hover:text-white transition">
              Terms of Use
            </Link>
            <span>|</span>
            <span className="flex items-center gap-1">
              Designed with <Heart size={12} className="text-red-500 fill-red-500" /> for a better tomorrow
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

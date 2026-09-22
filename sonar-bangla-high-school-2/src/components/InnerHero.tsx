import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Quote } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export interface FeatureChip {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

interface InnerHeroProps {
  breadcrumb: string;
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description: string;
  quote?: {
    text: string;
    author: string;
  };
  features?: FeatureChip[];
  buildingQuote?: {
    text: string;
    author: string;
  };
}

export const InnerHero: React.FC<InnerHeroProps> = ({
  breadcrumb,
  badge,
  badgeIcon,
  title,
  description,
  quote,
  features,
  buildingQuote = {
    text: "Great teachers inspire great minds.",
    author: "SOS Hermann Gmeiner School Khulna",
  },
}) => {
  return (
    <section className="bg-gradient-to-b from-[#e8f7f0]/60 via-white to-slate-50 pt-5 pb-12 sm:pb-16 border-b border-slate-100 overflow-hidden relative">
      <div className="container mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-6">
          <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors">
            <Home size={14} className="text-emerald-700" />
            <span>Home</span>
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-bold">{breadcrumb}</span>
        </div>

        {/* Hero Grid: Left Content (7 Cols) & Right Photographic Showcase (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d1fae5] text-[#065f46] border border-[#a7f3d0] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-2xs">
              {badgeIcon}
              <span>{badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* Optional Quote Line */}
            {quote && (
              <div className="border-l-3 border-emerald-600 pl-3 py-1 text-xs sm:text-sm text-slate-700 italic font-medium">
                "{quote.text}" — <span className="font-bold text-emerald-800 not-italic">{quote.author}</span>
              </div>
            )}

            {/* Feature Badges / Chips Row */}
            {features && features.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2 rounded-2xl shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#e8f7f0] text-[#005a3c] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-[10px] text-slate-500 font-medium">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Campus Photographic Architecture with Floating Quote */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/10 border-4 border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src={SCHOOL_INFO.campusImage}
                alt="SOS Hermann Gmeiner School Khulna Campus"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback to high-res campus slider photo if campus_main is loading
                  (e.target as HTMLImageElement).src = '/hero_slider.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Dark Green Quote Card (Exact Match to Reference Images 1, 3, 4) */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-xs sm:max-w-sm bg-[#004d34]/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-emerald-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <Quote size={16} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold leading-snug">
                      "{buildingQuote.text}"
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-emerald-200/90 font-medium mt-1">
                      — {buildingQuote.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { BookOpen, Compass, Wind, ShieldAlert, Wrench, Radio } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide06Pathway: React.FC<SlideProps> = ({ slide }) => {
  const subjects = [
    { code: 'REG', name: 'AIR REGULATIONS', detail: 'Aviation Law & Rules of the Air', icon: ShieldAlert },
    { code: 'NAV', name: 'AIR NAVIGATION', detail: 'Flight Planning, Charts & Radio Aids', icon: Compass },
    { code: 'MET', name: 'METEOROLOGY', detail: 'Atmospheric Physics & Weather Systems', icon: Wind },
    { code: 'GEN', name: 'TECHNICAL GENERAL', detail: 'Aircraft Systems, Engines & Aerodynamics', icon: Wrench },
    { code: 'SPEC', name: 'TECHNICAL SPECIFIC', detail: 'Type Specific Airframe & Systems', icon: BookOpen },
    { code: 'RTR', name: 'RTR', detail: 'Radio Telephony Restricted (Aero)', icon: Radio }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            DGCA GROUND SCHOOL • THEORETICAL CURRICULUM
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 06 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            DGCA GROUND SCHOOL CURRICULUM
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-none uppercase">
            SUBJECTS
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* Split: Cockpit/Chart Visual + 6 DGCA Subject Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Cockpit & Aeronautical Chart Visual */}
          <div className="lg:col-span-5 border border-neutral-200 bg-neutral-100 p-2 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src={AVIATION_IMAGES.groundTheory}
                alt="Cockpit navigation chart and flight instruments"
                className="w-full h-full object-cover object-center filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/30 p-3 flex flex-col justify-between text-white font-mono text-[10px]">
                <div className="flex justify-between">
                  <span>DGCA THEORY CORE</span>
                  <span className="text-red-400">ICAO STANDARDS</span>
                </div>
                <div className="text-center font-bold text-xs tracking-widest text-white/90">
                  GROUND SCHOOL • HYDERABAD CENTRE
                </div>
                <div className="flex justify-between text-[9px] text-neutral-300">
                  <span>FREQ: 118.100 MHz</span>
                  <span>VOR / DME ENROUTE</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Aviation Academic Rigor
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                6 Central Papers
              </span>
            </div>
          </div>

          {/* Right: 6 Subject Prompt Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subjects.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <div
                  key={sub.code}
                  className="p-4 bg-neutral-50 border-2 border-neutral-900 hover:border-red-600 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 bg-white border border-neutral-300 text-red-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                        PAPER 0{idx + 1}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-neutral-950 uppercase tracking-tight">
                        {sub.name}
                      </div>
                      <div className="text-[10px] font-mono font-semibold text-neutral-500 uppercase">
                        {sub.detail}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-neutral-200 text-neutral-800">
                    {sub.code}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Bottom Strip */}
        <div className="p-3 bg-white border border-neutral-300 flex items-center justify-between text-xs text-neutral-700">
          <span className="font-bold text-neutral-900 uppercase">
            Mandate: All student pilots must clear DGCA central written examinations prior to commercial licence issue.
          </span>
          <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest hidden sm:inline">
            Theory Foundation
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • DGCA Ground School Faculty</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};

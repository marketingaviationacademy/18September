import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { Plane, Award, Compass, ShieldCheck, Users, Briefcase } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide09Parents: React.FC<SlideProps> = ({ slide }) => {
  const careerRoles = [
    {
      title: 'COMMERCIAL PILOT (CPL)',
      tag: 'ENTRY LICENCE',
      desc: 'Charter, Cargo, Ferry & Aerial Operations',
      icon: Plane,
      code: 'STAGE 01'
    },
    {
      title: 'FIRST OFFICER',
      tag: 'AIRLINE ENTRY',
      desc: 'Regional Jets & Narrow-Body Commercial Fleet',
      icon: Award,
      code: 'STAGE 02'
    },
    {
      title: 'AIRLINE PILOT / SENIOR FO',
      tag: 'SCHEDULED AIRLINES',
      desc: 'Domestic & International Trunk Routes',
      icon: Compass,
      code: 'STAGE 03'
    },
    {
      title: 'CAPTAIN (PIC)',
      tag: 'FLIGHT COMMAND',
      desc: 'Command of Commercial Aircraft & Flight Crew',
      icon: ShieldCheck,
      code: 'STAGE 04'
    },
    {
      title: 'AVIATION CAREER OPPORTUNITIES',
      tag: 'WIDER INDUSTRY',
      desc: 'Corporate Jets, VIP Charter & Flight Instructors',
      icon: Briefcase,
      code: 'PATHWAYS'
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            CAREER PROGRESSION • POST PILOT TRAINING
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 08 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            WHERE CAN AVIATION TAKE YOU?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-none uppercase">
            CAREER
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* 5-Item Career Trajectory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {careerRoles.map((role) => {
            const IconComp = role.icon;
            const isCaptain = role.code === 'STAGE 04';
            return (
              <div
                key={role.title}
                className={`p-4 sm:p-5 bg-neutral-50 border-2 flex flex-col justify-between text-left transition-colors shadow-xs ${
                  isCaptain
                    ? 'border-red-600 bg-red-50/20'
                    : 'border-neutral-900 hover:border-red-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-9 h-9 border flex items-center justify-center ${
                      isCaptain ? 'bg-red-600 border-red-600 text-white' : 'bg-white border-neutral-300 text-red-600'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-[10px] font-bold text-neutral-400">
                      {role.code}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    {role.tag}
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-950 uppercase tracking-tight mt-1 leading-snug">
                    {role.title}
                  </h3>
                </div>

                <div className="mt-4 pt-2.5 border-t border-neutral-200">
                  <div className="text-[11px] font-semibold text-neutral-600 leading-tight">
                    {role.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Bottom Banner */}
        <div className="p-3 bg-neutral-950 text-white border-l-4 border-red-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-800 border border-neutral-700">
              <img
                src={AVIATION_IMAGES.welcomeHero}
                alt="Commercial pilot in flight deck"
                className="w-full h-full object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold tracking-wider uppercase text-white">
                STRUCTURED, MERIT-BASED PROFESSIONAL GROWTH
              </div>
              <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                Aspirational, Transparent Career Ladder in Commercial Aviation
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest hidden sm:inline">
            PILOT PATHWAY
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Commercial Airline Career Trajectory</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};

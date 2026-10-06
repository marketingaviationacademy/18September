import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { BookOpen, Award, Compass, MessageSquare, Gauge, ShieldCheck } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide04BeyondCockpit: React.FC<SlideProps> = ({ slide }) => {
  const qualities = [
    { name: 'THEORETICAL KNOWLEDGE', desc: 'Aerodynamics, Navigation & Meteorology', icon: BookOpen },
    { name: 'OPERATIONAL DISCIPLINE', desc: 'Strict Checklist & SOP Adherence', icon: Award },
    { name: 'DECISION-MAKING (ADM)', desc: 'Sound Aeronautical Judgment Under Pressure', icon: Compass },
    { name: 'COMMUNICATION', desc: 'Clear Standard ATC Phraseology', icon: MessageSquare },
    { name: 'TECHNICAL PRECISION', desc: 'Instrument Flying & Flight Deck Controls', icon: Gauge },
    { name: 'SAFETY-FIRST MINDSET', desc: 'Uncompromising Airline Safety Culture', icon: ShieldCheck }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            PILOT CORE QUALITIES & LEADERSHIP
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 11 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            FLIGHT DECK EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            WHAT DOES IT TAKE TO BECOME A PILOT?
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* 2-Column Split: 6 Core Pilot Attributes + Cockpit / Simulator Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 6 Pilot Attributes Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {qualities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  className="p-4 bg-neutral-50 border-2 border-neutral-900 hover:border-red-600 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 bg-white border border-neutral-300 text-red-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-sm font-extrabold text-neutral-950 uppercase tracking-tight">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Cockpit / Simulator Visual */}
          <div className="lg:col-span-5 border border-neutral-200 bg-neutral-100 p-2 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src={AVIATION_IMAGES.simulator}
                alt="Pilot in dual control flight deck"
                className="w-full h-full object-cover object-center filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/20" />
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Professional Flight Deck Standards
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Airmanship
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Prompt */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs text-neutral-700">
          <span className="font-bold text-neutral-900 uppercase">
            Core Philosophy: Becoming a pilot is about discipline, technical precision, and situational calm leadership.
          </span>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider hidden sm:inline">
            PILOT QUALITIES
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Professional Flight Crew Standards</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};

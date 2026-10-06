import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { Plane, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide07PilotsStudy: React.FC<SlideProps> = ({ slide }) => {
  const roadmapSteps = [
    {
      num: '01',
      title: 'CAREER COUNSELLING',
      sub: 'Profile & Due Diligence',
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'ELIGIBILITY & ADMISSION',
      sub: '10+2 PCM & Class 2 Medical',
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'DGCA GROUND SCHOOL',
      sub: 'Theory Prep in Hyderabad',
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'DGCA EXAMINATIONS',
      sub: 'Clear 6 Central Papers',
      badge: 'Step 4'
    },
    {
      num: '05',
      title: 'FLIGHT TRAINING',
      sub: '200+ Flying Hours at ATO',
      badge: 'Step 5'
    },
    {
      num: '06',
      title: 'CPL',
      sub: 'Commercial Pilot Licence',
      badge: 'Step 6'
    },
    {
      num: '07',
      title: 'AIRLINE / CAREER PATHWAY',
      sub: 'Type Rating & First Officer',
      badge: 'Step 7'
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            ROADMAP • PILOT TRAINING PATHWAY
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 02 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            STEP-BY-STEP PILOT JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            ROADMAP — YOUR JOURNEY TO BECOMING A PILOT
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* Clear 7-Step Sequential Visual Pathway */}
        <div className="relative border border-neutral-200 bg-neutral-50 p-5 sm:p-6 overflow-hidden">
          {/* Subtle connecting guideline on desktop */}
          <div className="hidden xl:block absolute top-[44px] left-[6%] right-[6%] h-0.5 bg-neutral-300 -z-1" />
          <div className="hidden xl:block absolute top-[44px] left-[6%] right-[6%] h-0.5 border-t-2 border-dashed border-red-600 w-11/12 -z-1" />

          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-3 relative z-10">
            {roadmapSteps.map((step, idx) => {
              const isLast = idx === roadmapSteps.length - 1;
              const isCPL = step.title === 'CPL';
              return (
                <div
                  key={step.title}
                  className={`p-3.5 bg-white border-2 flex flex-col justify-between text-left transition-colors shadow-xs h-40 ${
                    isLast || isCPL
                      ? 'border-red-600 ring-1 ring-red-600'
                      : 'border-neutral-900 hover:border-red-600'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-[10px] font-extrabold px-1.5 py-0.5 border ${
                        isLast || isCPL 
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-neutral-100 text-neutral-800 border-neutral-200'
                      }`}>
                        {step.num}
                      </span>
                      {isLast ? (
                        <Plane className="w-4 h-4 text-red-600 transform rotate-45" />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-neutral-400" />
                      )}
                    </div>

                    <h3 className="text-xs font-extrabold text-neutral-950 uppercase tracking-tight leading-snug mt-1">
                      {step.title}
                    </h3>
                  </div>

                  <div className="mt-2 pt-2 border-t border-neutral-100">
                    <div className="text-[10px] font-medium text-neutral-600 leading-tight">
                      {step.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Route Indicator Prompt Banner */}
        <div className="p-2.5 bg-neutral-50 border-l-4 border-red-600 border-y border-r border-neutral-200 flex items-center justify-between gap-3 text-xs text-neutral-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-900 border border-neutral-300">
              <img
                src={AVIATION_IMAGES.flightTraining}
                alt="Flight training runway and aircraft"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-neutral-900 uppercase text-[11px] sm:text-xs truncate">
              Structured Timeline: From initial counselling to first officer cockpit induction in 18–24 months.
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider shrink-0 hidden sm:inline">
            7-STEP PATHWAY
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Structured Flight Career Roadmap</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};

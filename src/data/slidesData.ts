export interface SlideContent {
  id: number;
  slideNumber: string;
  category: string;
  title: string;
  subtitle?: string;
  supportingText?: string;
  instructorNotes: string;
  stageName?: string;
}

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    slideNumber: '01',
    category: 'WELCOME & OPENING',
    title: 'AIRWAYS AVIATION × MAHAVEER INSTITUTE',
    subtitle: 'Aviation Career Guidance Seminar',
    supportingText: '07 OCTOBER 2026 | MAHAVEER INSTITUTE | HYDERABAD\nMAHAVEER INSTITUTE • FUTURE PILOTS',
    instructorNotes: 'Welcome students and parents from Mahaveer Institute. State clearly that today’s session is an educational, objective career briefing to provide genuine clarity on aviation pathways, prerequisites, and realistic expectations.',
    stageName: 'Welcome'
  },
  {
    id: 2,
    slideNumber: '02',
    category: 'TRAINING PATHWAY',
    title: 'ROADMAP',
    subtitle: 'Your journey to becoming a commercial pilot',
    supportingText: 'Counselling → Eligibility → Ground School → DGCA Exams → Flight Training → CPL → Airline',
    instructorNotes: 'Walk students and parents through the seamless 7-step roadmap: Career Counselling → Eligibility & Admission → DGCA Ground School → DGCA Examinations → Practical Flight Training (200 hrs) → Commercial Pilot Licence (CPL) → Airline / Career Pathway induction.',
    stageName: 'Pilot Roadmap'
  },
  {
    id: 3,
    slideNumber: '03',
    category: 'ORIENTATION',
    title: 'YOUR AVIATION JOURNEY STARTS WITH UNDERSTANDING',
    subtitle: 'From career awareness to the cockpit',
    instructorNotes: 'Introduce the core progression: Career Counselling, Eligibility & Admission, DGCA Ground School, Central Examinations, Flight Training, CPL, and Airline / Career Pathway.',
    stageName: "Today's Journey"
  },
  {
    id: 4,
    slideNumber: '04',
    category: 'INDUSTRY SCOPE',
    title: 'WHY AVIATION',
    subtitle: 'An exciting, high-responsibility global career',
    instructorNotes: 'Highlight why aviation is an exceptional career choice: Global Career Opportunities connecting 190+ countries, rapid professional growth, worldwide travel and international exposure, high-responsibility commanding modern aircraft, and becoming an integral part of the booming aerospace ecosystem.',
    stageName: 'Why Aviation'
  },
  {
    id: 5,
    slideNumber: '05',
    category: 'REGULATORY PREREQUISITES',
    title: 'ELIGIBILITY',
    subtitle: 'Basic pilot-training eligibility criteria',
    supportingText: '10+2 Intermediate • Physics & Math • Age 17+ • Clear Backlogs',
    instructorNotes: 'Detail the mandatory pilot eligibility requirements: 10+2 / Intermediate with Physics and Mathematics (or NIOS equivalent), minimum age 17+, all required academic documents in order, all backlogs cleared prior to admission, and DGCA Class 2 medical fitness.',
    stageName: 'Eligibility'
  },
  {
    id: 6,
    slideNumber: '06',
    category: 'GROUND SCHOOL',
    title: 'SUBJECTS',
    subtitle: 'DGCA ground school theoretical foundation',
    instructorNotes: 'Introduce the 6 core DGCA written subjects: Air Regulations, Air Navigation, Aviation Meteorology, Technical General (systems & engines), Technical Specific (aircraft type), and RTR (Aero) radio communication. Emphasize that passing these is prerequisite to commercial flight operations.',
    stageName: 'DGCA Subjects'
  },
  {
    id: 7,
    slideNumber: '07',
    category: 'PRACTICAL TRAINING',
    title: 'FLIGHT TRAINING',
    subtitle: 'Practical flight hours, dual instruction & solo flying',
    instructorNotes: 'Explain the practical phase of pilot development: 200+ certified flight hours, single and multi-engine aircraft, instrument flying rating (IR), cross-country flights, night flying, and airline standard certified flight simulators.',
    stageName: 'Flight Training'
  },
  {
    id: 8,
    slideNumber: '08',
    category: 'CAREER HORIZONS',
    title: 'CAREER',
    subtitle: 'Where can aviation take you?',
    instructorNotes: 'Outline the commercial flight deck hierarchy and realistic career progression: Commercial Pilot (CPL), First Officer on regional & narrow-body jets, Senior First Officer, Airline Captain in command, and wider corporate/charter/instruction opportunities.',
    stageName: 'Pilot Career'
  },
  {
    id: 9,
    slideNumber: '09',
    category: 'INDUSTRY PERSPECTIVE',
    title: 'CAREER OPPORTUNITIES',
    subtitle: 'Expanding aerospace ecosystem and aviation growth',
    instructorNotes: 'Highlight the wider aviation opportunities: commercial airline pilot demand, corporate and charter aviation, flight instructor pathways, and connected technical fields like flight operations, dispatch, air traffic management, and airline fleet leadership.',
    stageName: 'Opportunities'
  },
  {
    id: 10,
    slideNumber: '10',
    category: 'TRAINING & SUPPORT',
    title: 'AIRWAYS AVIATION',
    subtitle: 'Global heritage, Hyderabad centre & end-to-end student support',
    instructorNotes: 'Introduce Airways Aviation: 45+ years legacy, 12,000+ airline pilots graduated, 100+ training aircraft, comprehensive DGCA ground school at the Hyderabad Banjara Hills centre, seamless transfer to global flight bases, and DGCA licence conversion support.',
    stageName: 'Airways Aviation'
  },
  {
    id: 11,
    slideNumber: '11',
    category: 'PILOT CORE COMPETENCIES',
    title: 'WHAT DOES IT TAKE TO BECOME A PILOT?',
    subtitle: 'Professional discipline and flight deck leadership',
    instructorNotes: 'Walk students through the key personal and professional attributes needed in the flight deck: aerodynamic knowledge, checklist discipline, aeronautical decision making (ADM), standard ATC communication, precision flying skills, and an uncompromising safety-first mindset.',
    stageName: 'Become a Pilot'
  },
  {
    id: 12,
    slideNumber: '12',
    category: 'CONCLUDING REMARKS',
    title: 'YOUR DREAM.\nOUR DIRECTION.',
    subtitle: 'THANK YOU FOR JOINING US',
    supportingText: '07 OCTOBER 2026 | MAHAVEER INSTITUTE | HYDERABAD\nAIRWAYS AVIATION',
    instructorNotes: 'Thank students, parents, and faculty of Mahaveer Institute. Open the floor for questions and invite families to discuss academic documents and flight training enrollment with the senior counselors present.',
    stageName: 'Closing'
  }
];

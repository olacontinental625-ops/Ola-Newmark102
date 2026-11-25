import React from 'react';
import { CORRIDORS_LIST } from '../data/properties';
import { Corridor } from '../types';
import { MapPin, Zap, Droplets, Compass, ArrowRight, Building, HardHat } from 'lucide-react';

interface CorridorsSectionProps {
  onSelectCorridor: (corridor: Corridor) => void;
  onOpenViewing: () => void;
}

const CORRIDOR_IMAGES: Record<string, { src: string; pos?: string }> = {
  'Behind LAUTECH Teaching Hospital': {
    src: '/assets/aistudio/907264287466848862_5d01df1c.jpg',
    pos: 'object-[50%_65%]',
  },
  'Under G': {
    src: '/assets/aistudio/Real_Estate_flyer_design_background_a74e8250.jpg',
    pos: 'object-[50%_60%]',
  },
  'Adenike': {
    src: '/assets/aistudio/IMG-20261021-WA0038_61f97529.jpg',
  },
  'Mushin Commercial Corridor': {
    src: '/assets/aistudio/IMG-20261021-WA0028_0390fcdc.jpg',
  },
  'Aroje': {
    src: '/assets/aistudio/IMG-20261031-WA0094_c444fb16.jpg',
  },
  'Takie': {
    src: '/assets/aistudio/IMG-20261021-WA0027_ab55f7b9.jpg',
  },
  'Odo-Oba': {
    src: '/assets/aistudio/IMG-20261021-WA0015_4e01daf5.jpg',
  },
};

export const CorridorsSection: React.FC<CorridorsSectionProps> = ({
  onSelectCorridor,
  onOpenViewing,
}) => {
  return (
    <section id="corridors" className="py-16 bg-[#07132b] text-[#f0f9ff] scroll-mt-20 relative overflow-hidden">
      {/* Royal blue and light blue ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1d4ed8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#38bdf8] mb-2 flex items-center gap-2">
              <span>GEOGRAPHIC REACH &amp; CORRIDORS</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="font-data text-xs text-[#93c5fd]/80">OGBOMOSO &amp; LAGOS</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Strategic Operating Corridors
            </h1>
            <p className="mt-3 text-sm text-[#bfdbfe] leading-relaxed">
              We anchor our operations at No. 2 Olukoko Street behind LAUTECH Teaching Hospital while actively building and managing student hostels, commercial hubs in Mushin, and agricultural belts in Odo-Oba.
            </p>
          </div>

          <button
            onClick={onOpenViewing}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#0284c7] border border-[#38bdf8]/40 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer shadow-lg"
          >
            Join Tuesday Field Tour
          </button>
        </div>

        {/* Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORRIDORS_LIST.map((corridor, idx) => {
            const imgMeta = CORRIDOR_IMAGES[corridor.name] || {
              src: '/assets/aistudio/907264287466848862_5d01df1c.jpg',
              pos: 'object-[50%_65%]',
            };
            return (
              <div
                key={corridor.name}
                className="bg-[#0b1e42] rounded-2xl overflow-hidden border border-[#1d4ed8]/40 hover:border-[#38bdf8]/70 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[#38bdf8]/5"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-[#040b19] overflow-hidden">
                    <img
                      src={imgMeta.src}
                      alt={corridor.name}
                      loading="lazy"
                      className={`w-full h-full object-cover ${imgMeta.pos || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e42] via-transparent to-black/25" />
                    <div className="absolute top-3 left-3">
                      <span className="font-data text-[10px] font-bold uppercase tracking-wider text-white bg-[#07132b]/85 border border-[#38bdf8]/40 px-2.5 py-1 rounded">
                        CORRIDOR 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <div className="text-xs text-[#60a5fa] font-semibold mb-1">
                      {corridor.subtitle}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                      {corridor.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#bfdbfe] leading-relaxed">
                      {corridor.description}
                    </p>

                    {/* Infrastructure Badges */}
                    <div className="mt-4 pt-3 border-t border-[#1d4ed8]/30 space-y-2 text-xs">
                      <div className="text-[11px] text-[#e0f2fe]">
                        <strong className="text-white">Primary Assets &amp; Civil Works:</strong> {corridor.primaryTypes}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#bfdbfe]">
                        <Zap className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                        <span>Power: {corridor.powerReliability}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#bfdbfe]">
                        <Droplets className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span>Water: {corridor.waterSource}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#1d4ed8]/30">
                  <button
                    onClick={() => {
                      onSelectCorridor(corridor.name as Corridor);
                    }}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-white hover:text-white bg-[#07132b] hover:bg-[#113e94] border border-[#1d4ed8]/60 hover:border-[#38bdf8]/60 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>Filter Properties in this Axis</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

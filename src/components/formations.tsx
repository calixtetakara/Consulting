// NosFormations.tsx
import React from "react";

interface Formation {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const formations: Formation[] = [
  {
    title: "Informatique et Secrétariat",
    desc: "Bureautique (Word, Excel, PowerPoint), Internet et compétences en secrétariat et rédaction administrative.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="40" height="26" rx="3" />
        <line x1="16" y1="36" x2="36" y2="36" />
        <line x1="22" y1="42" x2="30" y2="42" />
        <line x1="20" y1="38" x2="20" y2="42" />
        <line x1="32" y1="38" x2="32" y2="42" />
        <line x1="12" y1="20" x2="12" y2="20" strokeWidth={3} />
        <rect x="17" y="18" width="14" height="3" rx="1.5" />
        <line x1="12" y1="27" x2="12" y2="27" strokeWidth={3} />
        <rect x="17" y="25" width="20" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Énergies renouvelables",
    desc: "Panneaux solaires, batteries et installation / maintenance des systèmes solaires.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="26" r="8" />
        <line x1="26" y1="6" x2="26" y2="14" />
        <line x1="26" y1="38" x2="26" y2="46" />
        <line x1="6" y1="26" x2="14" y2="26" />
        <line x1="38" y1="26" x2="46" y2="26" />
        <line x1="11.5" y1="11.5" x2="17" y2="17" />
        <line x1="35" y1="35" x2="40.5" y2="40.5" />
        <line x1="40.5" y1="11.5" x2="35" y2="17" />
        <line x1="17" y1="35" x2="11.5" y2="40.5" />
        <rect x="10" y="42" width="32" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Montage et gestion de projets durables",
    desc: "Préparation, suivi et évaluation de projets durables avec des logiciels spécialisés.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="14" height="14" rx="2" />
        <rect x="30" y="8" width="14" height="14" rx="2" />
        <rect x="8" y="30" width="14" height="14" rx="2" />
        <rect x="30" y="30" width="14" height="14" rx="2" />
        <line x1="22" y1="15" x2="30" y2="15" />
        <line x1="26" y1="22" x2="26" y2="30" />
        <line x1="22" y1="37" x2="30" y2="37" />
      </svg>
    ),
  },
  {
    title: "Cartographie et SIG",
    desc: "Systèmes d'information géographique, cartes thématiques et analyse spatiale avec ArcGIS et QGIS.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="8,10 20,14 32,8 44,12 44,42 32,38 20,44 8,40" />
        <line x1="20" y1="14" x2="20" y2="44" />
        <line x1="32" y1="8" x2="32" y2="38" />
        <circle cx="26" cy="28" r="4" />
        <circle cx="26" cy="28" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Réseaux, Maintenance et Surveillance",
    desc: "Configuration réseau et WiFi, dépannage informatique, systèmes de surveillance analogiques et numériques.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="16" width="10" height="7" rx="1.5" />
        <rect x="36" y="16" width="10" height="7" rx="1.5" />
        <rect x="21" y="30" width="10" height="7" rx="1.5" />
        <circle cx="26" cy="10" r="4" />
        <line x1="11" y1="23" x2="26" y2="30" />
        <line x1="41" y1="23" x2="26" y2="30" />
        <line x1="26" y1="14" x2="26" y2="30" />
        <circle cx="38" cy="38" r="5" />
        <line x1="41.5" y1="41.5" x2="45" y2="45" />
      </svg>
    ),
  },
  {
    title: "Infographie",
    desc: "Création d'affiches, logos, cartes de visite et traitement d'images avec Photoshop et Illustrator.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="36" height="30" rx="3" />
        <circle cx="18" cy="20" r="5" />
        <polygon points="8,38 20,24 30,32 36,26 44,38" />
        <line x1="34" y1="10" x2="42" y2="18" />
        <line x1="42" y1="10" x2="34" y2="18" />
        <rect x="10" y="42" width="10" height="3" rx="1" />
        <rect x="22" y="42" width="20" height="3" rx="1" />
      </svg>
    ),
  },
  {
    title: "Statistiques et Analyse de données",
    desc: "Traitement de données quantitatives et qualitatives avec STATA, SPSS, R, NVivo et EpiData.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="44" x2="8" y2="10" />
        <line x1="8" y1="44" x2="46" y2="44" />
        <rect x="13" y="30" width="7" height="14" rx="1" />
        <rect x="24" y="20" width="7" height="24" rx="1" />
        <rect x="35" y="12" width="7" height="32" rx="1" />
        <polyline points="16,26 27,18 38,10" />
      </svg>
    ),
  },
  {
    title: "Intelligence Artificielle (IA)",
    desc: "Fondamentaux de l'IA, applications pratiques et intégration de l'IA dans des projets modernes.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="26" r="9" />
        <circle cx="26" cy="26" r="3" />
        <circle cx="26" cy="10" r="3" />
        <circle cx="26" cy="42" r="3" />
        <circle cx="10" cy="26" r="3" />
        <circle cx="42" cy="26" r="3" />
        <line x1="26" y1="13" x2="26" y2="17" />
        <line x1="26" y1="35" x2="26" y2="39" />
        <line x1="13" y1="26" x2="17" y2="26" />
        <line x1="35" y1="26" x2="39" y2="26" />
        <line x1="13" y1="13" x2="19" y2="19" />
        <line x1="39" y1="39" x2="33" y2="33" />
        <line x1="39" y1="13" x2="33" y2="19" />
        <line x1="13" y1="39" x2="19" y2="33" />
      </svg>
    ),
  },
];

// ── Card ─────────────────────────────────────────────────────

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => (
  <div className="group bg-white border border-slate-200 rounded-xl p-7 text-center cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,36,99,0.12)] hover:border-[#0a2463]/30">
    {/* Icône */}
    <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#0a2463]/5 text-[#0a2463] transition-colors duration-200 group-hover:bg-[#0a2463] group-hover:text-white">
      <div className="w-8 h-8">{formation.icon}</div>
    </div>

    {/* Titre */}
    <h3 className="text-[16px] font-semibold text-[#0a2463] mb-2 leading-snug min-h-9 flex items-center justify-center">
      {formation.title}
    </h3>

    {/* Séparateur jaune */}
    <div className="w-8 h-0.5 bg-yellow-400 mx-auto mb-3 rounded-full transition-all duration-200 group-hover:w-12" />

    {/* Description */}
    <p className="text-[15px] text-slate-500 leading-relaxed">{formation.desc}</p>
  </div>
);

// ── Section principale ────────────────────────────────────────

const NosFormations: React.FC = () => (
  <section id="formations" className="relative bg-gray-100 px-8 py-20 overflow-hidden">

    {/* Watermark */}
    <span
      aria-hidden="true"
      className="pointer-events-none select-none absolute top-6 left-1/2 -translate-x-1/2 text-[clamp(40px,9vw,100px)] font-extrabold tracking-[10px] whitespace-nowrap text-[#0a2463]/4"
    >
      FORMATIONS
    </span>

    {/* Header */}
    <div className="relative z-10 text-center mb-14">
      <p className="text-[11px] tracking-[4px] uppercase font-medium text-yellow-500 mb-2">
        Domaines
      </p>
      <h2 className="text-4xl font-bold text-[#0a2463] mb-4">
        Nos Formations
      </h2>
      <div className="w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
    </div>

    {/* Grille */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-275 mx-auto">
      {formations.map((f) => (
        <FormationCard key={f.title} formation={f} />
      ))}
    </div>
  </section>
);

export default NosFormations;
import {
  UserGroupIcon,
  StarIcon,
  TrophyIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: UserGroupIcon,
    value: "150+",
    label: "Clients accompagnés",
    sublabel: "dans tous les domaines",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: StarIcon,
    value: "93%",
    label: "Taux de satisfaction",
    sublabel: "obtenu de nos clients",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: TrophyIcon,
    value: "4.9",
    label: "Note moyenne",
    sublabel: "sur 5 par nos partenaires",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BriefcaseIcon,
    value: "50+",
    label: "Projets réalisés",
    sublabel: "en cartographie, énergie & SI",
    color: "bg-green-100 text-green-600",
  },
];

export default function ImpactEnChiffres() {
  return (
    <section className="impact-section relative px-8 py-20 overflow-hidden bg-gray-50">
      <style>{`
        .impact-section {
          position: relative;
          overflow: hidden;
          background-image: url('/bg.png');
          background-size: cover;
          background-position: center;
        }
        .impact-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background-color: rgba(0, 51, 102, 0.08);
          z-index: 0;
        }
        .impact-section::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -100px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background-color: rgba(255, 200, 0, 0.1);
          z-index: 0;
        }
      `}</style>

      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-6 left-1/2 -translate-x-1/2 text-[clamp(36px,9vw,100px)] font-black tracking-[14px] whitespace-nowrap uppercase text-[#0a2463]/[0.04] z-0"
      >
        IMPACT
      </span>

      {/* En-tête */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-sm uppercase font-medium text-yellow-400 mb-2 tracking-wider">
          Nos Résultats
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2463] mb-4 tracking-tight">
          Notre Impact en Chiffres
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
        </div>
      </div>

      {/* Grille de stats */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Icône */}
            <div
              className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full ${stat.color} transition-transform duration-300 group-hover:scale-110`}
            >
              <stat.icon className="w-7 h-7" />
            </div>

            {/* Valeur */}
            <p className="text-5xl font-extrabold text-[#0a2463] mb-2 tracking-tight">
              {stat.value}
            </p>

            {/* Label */}
            <p className="text-base font-bold text-gray-700 mb-1">{stat.label}</p>

            {/* Sous-label */}
            <p className="text-sm text-gray-400 leading-relaxed">{stat.sublabel}</p>

            {/* Barre décorative au bas au hover */}
            <div className="mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0a2463] to-yellow-400 rounded-full transition-all duration-500 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
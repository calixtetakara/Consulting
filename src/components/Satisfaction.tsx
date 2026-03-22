const stats = [
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
    value: "150+",
    label: "Clients accompagnés",
    sublabel: "dans tous les domaines",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=400&q=80",
    value: "93%",
    label: "Taux de satisfaction",
    sublabel: "obtenu de nos clients",
    gradient: "from-yellow-700 to-yellow-500",
  },
  {
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
    value: "4.9",
    label: "Note moyenne",
    sublabel: "sur 5 par nos partenaires",
    gradient: "from-purple-900 to-purple-700",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    value: "50+",
    label: "Projets réalisés",
    sublabel: "en cartographie, énergie & SI",
    gradient: "from-emerald-800 to-emerald-600",
  },
];

export default function ImpactEnChiffres() {
  return (
    <section id="resultats" className=" relative px-8 py-20 overflow-hidden bg-gray-50">
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
            className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#0a2463]/[0.06]"
          >
            {/* Image de tête avec overlay dégradé */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={stat.image}
                alt={stat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Overlay dégradé par-dessus l'image */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${stat.gradient} opacity-60`}
              />

              {/* Valeur chiffrée flottante sur l'image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
                  {stat.value}
                </p>
              </div>

              {/* Bande jaune en bas de l'image */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
            </div>

            {/* Corps de la carte */}
            <div className="p-5 text-center">
              <p className="text-base font-extrabold text-[#0a2463] mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {stat.sublabel}
              </p>

              {/* Barre animée au hover */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0a2463] to-yellow-400 rounded-full transition-all duration-500 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

export default function NosRealisations() {
  const realisations = [
    {
      title: "Mission de Cartographie pour la Conservation de la Forêt Sacrée de Koyoma",
      description: "Production d'outils cartographiques pour la gestion durable",
      url: "/Koyoma4.jpeg",
      link: "/realisations/koyoma",
      tag: "Cartographie",
    },
    {
      title: "Mission de collecte de données sur le terrain",
      description: "Collecte stratégique pour Afrik'Act Research and Consulting",
      url: "/Collecte.jfif",
      link: "/realisations/collecte",
      tag: "Terrain",
    },
    {
      title: "Installation et maintenance des Panneaux solaires",
      description: "Promotion des énergies renouvelables",
      url: "/InstallationP.Solaire.jpeg",
      link: "/realisations/solaire",
      tag: "Énergie",
    },
    {
      title: "Accueil et supervision des stagiaires",
      description: "Encadrement académique et professionnel",
      url: "/Stagaires.jpeg",
      link: "/realisations/stages",
      tag: "Formation",
    },
    {
      title: "Cartographie locale",
      description: "Production de cartes pour la gestion locale",
      url: "/AcImages/im4.jpg",
      link: "/realisations/cartographie",
      tag: "SIG",
    },
  ];

  const duplicated = [...realisations, ...realisations];

  return (
    <section
      id="realisations"
      className="relative px-8 py-20 overflow-hidden bg-gray-50"
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .realisations-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: rgba(0, 51, 102, 0.08);
          z-index: 0;
        }
        .realisations-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: rgba(255, 200, 0, 0.1);
          z-index: 0;
        }
      `}</style>

      {/* Texte en arrière-plan */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(40px,10vw,110px)] font-black tracking-[12px] whitespace-nowrap uppercase text-[#0a2463]/[0.04]"
      >
        RÉALISATIONS
      </span>

      {/* En-tête */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-sm uppercase font-medium text-yellow-400 mb-2 tracking-wider">
          ✦ Projets ✦
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2463] mb-4 tracking-tight">
          Quelques projets réalisés
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Fondus */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="flex gap-6 py-4 w-max animate-marquee">
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="group flex-none w-[280px] rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-[#0a2463]/[0.07]"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-44 object-cover"
              />

              {/* Bande colorée en haut */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0a2463] to-yellow-400" />

              {/* Badge tag */}
              <div className="px-4 pt-4">
                <span className="inline-block bg-yellow-400 text-[#0a2463] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Contenu */}
              <div className="px-4 pt-3 pb-5 flex flex-col gap-2">
                <h3 className="text-[15px] font-semibold text-[#0a2463] leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-normal">
                  {item.description}
                </p>

                {/* Séparateur */}
                <div className="h-px w-full bg-[#0a2463]/10 my-1" />

                {/* Lien */}
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0a2463] hover:text-yellow-500 transition-colors duration-200 group/link w-fit"
                >
                  <span>Détails du projet</span>
                  <span className="w-6 h-6 rounded-full bg-[#0a2463] flex items-center justify-center transition-all duration-200 group-hover/link:bg-yellow-400">
                    <svg
                      className="w-3 h-3 fill-none stroke-white stroke-2"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

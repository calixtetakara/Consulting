"use client";

import React from "react";
import { Link } from "react-router-dom";

interface Realisation {
  title: string;
  description: string;
  url: string;
  link: string;
  tag: string;
}

const NosRealisations: React.FC = () => {
  const realisations: Realisation[] = [
    {
      title: "Conservation de la Forêt Sacrée de Koyoma",
      description: "Outils cartographiques avancés pour la gestion durable et la protection de la biodiversité locale.",
      url: "/Koyoma4.jpeg",
      link: "/realisations/koyoma",
      tag: "Cartographie",
    },
    {
      title: "Collecte de données Terrain",
      description: "Déploiement stratégique de collecte de données pour Afrik'Act Research and Consulting.",
      url: "/Collecte.jfif",
      link: "/realisations/collecte",
      tag: "Terrain",
    },
    {
      title: "Énergies Renouvelables",
      description: "Installation et maintenance de systèmes photovoltaïques pour l'autonomie énergétique.",
      url: "/InstallationP.Solaire.jpeg",
      link: "/realisations/solaire",
      tag: "Solaire",
    },
    {
      title: "Mentorat & Formation",
      description: "Programme d'accueil et de supervision intensive pour les futurs experts du secteur.",
      url: "/Stagaires.jpeg",
      link: "/realisations/stages",
      tag: "Formation",
    },
    {
      title: "Systèmes d'Information Géographique",
      description: "Analyse spatiale et production de cartes thématiques pour la gouvernance locale.",
      url: "/carte.jpeg",
      link: "/realisations/cartographie",
      tag: "SIG",
    },
  ];

  const duplicated = [...realisations, ...realisations];

  return (
    <section id="realisations" className="relative bg-white py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(40px,10vw,110px)] font-black tracking-[12px] whitespace-nowrap uppercase text-[#0a2463]/[0.04]"
        >
          RÉALISATIONS
        </span>

        {/* En-tête */}
        <div className="text-center mb-14 relative z-10">
          <p className="text-lg uppercase font-medium text-yellow-400 mb-2 tracking-wider">
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
          <p className="max-w-xl mx-auto text-slate-500 text-base md:text-lg">
            Des solutions innovantes pour répondre aux enjeux technologiques et environnementaux actuels.
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative -mx-6">
          <div className="flex w-max gap-8 py-4 animate-marquee hover:[animation-play-state:paused]">
            {duplicated.map((item, index) => (
              <div
                key={index}
                className="group relative w-[320px] bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* ✅ Lien couvrant toute la carte */}
            <Link
              to={item.link}
              className="absolute inset-0 z-10"
              aria-label={`Voir le projet : ${item.title}`}
            />

                {/* Image & Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2463]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="backdrop-blur-md bg-black/30 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0a2463] mb-2 line-clamp-1 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Bouton décoratif (non-cliquable, le Link couvre tout) */}
                  <div className="flex items-center justify-between w-full p-1 pl-4 bg-slate-50 group-hover:bg-[#0a2463] group-hover:text-white rounded-full border border-slate-100 transition-all duration-300 pointer-events-none">
                    <span className="text-xs font-bold uppercase tracking-wider">Voir le projet</span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0a2463] group-hover:rotate-[-45deg] transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default NosRealisations;
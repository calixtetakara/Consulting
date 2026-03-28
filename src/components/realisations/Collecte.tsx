import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/Collecte.jfif",
  "/Collecte2.jfif",
  "/Collecte3.jfif",
  "/Collecte4.jfif",
];

const activites = [
  "Déploiement de l'équipe terrain dans la région de la Kara",
  "Collecte systématique de données sur le secteur coton au Togo",
  "Traitement et structuration des données collectées selon les standards internationaux",
  "Rédaction des rapports de mission conformes aux exigences de la CNUCED",
  "Coordination avec le cabinet Afrik'Act Research and Consulting",
];

const IconDatabase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconMap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const expertises = [
  { label: "Collecte & traitement de données terrain", Icon: IconDatabase },
  { label: "Cartographie de zones d'intervention", Icon: IconMap },
  { label: "Standards des organisations internationales", Icon: IconGlobe },
  { label: "Analyse statistique & rapportage", Icon: IconChart },
];

const CollecteDetail: React.FC = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="collecte-page min-h-screen bg-[#f7f6f2]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={images[activeImg]}
          alt="Mission de collecte de données"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/85 via-[#0a1a3a]/40 to-transparent" />

        <Link
          to="/"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
        >
          <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">
            ←
          </span>
          Retour aux réalisations
        </Link>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-12 max-w-5xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[4px] text-yellow-400 border border-yellow-400/40 px-3 py-1 rounded-full mb-4">
            Terrain
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Mission de collecte<br />
            <em className="not-italic text-yellow-400">de données sur le terrain</em>
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            Avr. – Nov. 2022 &nbsp;·&nbsp; Région de la Kara, Togo
          </p>
        </div>
      </section>

      {/* ── CORPS PRINCIPAL ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

        {/* COLONNE GAUCHE */}
        <div className="space-y-16">

          {/* Chapô */}
          <div className="border-l-4 border-yellow-400 pl-6">
            <p className="text-[#0a2463] text-xl font-semibold leading-relaxed">
              Le cabinet <strong>2SP Consulting</strong>, sous la direction de{" "}
              <strong>Monsieur Aklesso TAKARA</strong>, franchit une nouvelle étape
              dans son expertise en conseil et accompagnement technique, à travers la
              conclusion réussie d'une mission de sous-traitance stratégique réalisée
              pour le compte du cabinet{" "}
              <strong>Afrik'Act Research and Consulting</strong>.
            </p>
          </div>

          {/* Contexte international */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Un projet d'envergure internationale
              </h2>
            </div>
            <p className="text-slate-600 leading-[1.9] text-base">
              Cette collaboration s'est inscrite dans le cadre du{" "}
              <strong className="text-[#0a2463]">Cadre Intégré Renforcé de l'OMC</strong>.
              L'objectif était de soutenir le secteur vital du{" "}
              <strong className="text-[#0a2463]">coton au Togo</strong>, une initiative
              portée par la{" "}
              <strong className="text-[#0a2463]">
                Conférence des Nations Unies pour le Commerce et le Développement (CNUCED)
              </strong>.
            </p>
            <p className="text-slate-600 leading-[1.9] text-base mt-4">
              Cette mission témoigne de la capacité de 2SP Consulting à gérer des projets
              complexes répondant aux standards des organisations internationales comme
              l'OMC et la CNUCED, tout en réaffirmant son engagement à fournir des
              services de haute qualité pour le développement économique et structurel
              du Togo.
            </p>
          </div>

          {/* Activités */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Activités réalisées
              </h2>
            </div>
            <ul className="space-y-4">
              {activites.map((a, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-[#0a2463] text-white text-xs font-bold flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#0a2463] transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-700 leading-relaxed">{a}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc attestation */}
          <div className="bg-[#0a2463] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-yellow-400/20" />
            <div className="relative z-10">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[3px] mb-3 block">
                ✦ Reconnaissance officielle
              </span>
              <p className="text-white/90 leading-[1.9] text-base mb-4">
                Une exécution jugée <strong className="text-white">satisfaisante</strong>,
                confirmée par une{" "}
                <strong className="text-yellow-400">
                  attestation de bonne fin d'exécution
                </strong>{" "}
                délivrée le <strong className="text-white">20 décembre 2022</strong> par
                le{" "}
                <strong className="text-yellow-400">
                  Professeur Kwami Ossadzifo WONYRA
                </strong>
                , Directeur Exécutif d'Afrik'Act Research and Consulting.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Cette attestation confirme le professionnalisme et la rigueur technique
                de l'équipe 2SP Consulting dans le cadre de cette mission de terrain.
              </p>
            </div>
          </div>

          {/* Galerie */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Galerie photos
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden group border-2 transition-all duration-300 ${
                    activeImg === i ? "border-yellow-400 scale-[1.01]" : "border-transparent"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Collecte terrain ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0a2463]/0 group-hover:bg-[#0a2463]/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#0a2463] text-lg">⤢</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COLONNE DROITE */}
        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">

          {/* Fiche projet */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-[#0a2463] px-6 py-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Fiche de la mission
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { label: "Cabinet", value: "2SP Consulting" },
                { label: "Client", value: "Afrik'Act Research" },
                { label: "Commanditaire", value: "OMC / CNUCED" },
                { label: "Période", value: "Avr. – Nov. 2022" },
                { label: "Zone", value: "Région de la Kara, Togo" },
                { label: "Attestation", value: "✓ 20 déc. 2022" },
              ].map(({ label, value }) => (
                <div key={label} className="px-6 py-3 flex justify-between items-start gap-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-sm text-[#0a2463] font-medium text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sélecteur images */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-3 px-1">
              Aperçu images
            </p>
            <div className="grid grid-cols-4 gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i
                      ? "border-yellow-400 ring-2 ring-yellow-400/30"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover"  />
                </button>
              ))}
            </div>
          </div>

          {/* Expertises */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-5">
              Expertises mobilisées
            </p>
            <ul className="space-y-2">
              {expertises.map(({ label, Icon }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors duration-200 group cursor-default"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0a2463]/[0.06] flex items-center justify-center text-[#0a2463] group-hover:bg-[#0a2463] group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>
                  <span className="text-sm text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partenaires logos texte */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-4">
              Cadre institutionnel
            </p>
            <div className="space-y-3">
              {[
                { sigle: "OMC", label: "Organisation Mondiale du Commerce" },
                { sigle: "CNUCED", label: "Conférence des Nations Unies pour le Commerce et le Développement" },
                { sigle: "CIR", label: "Cadre Intégré Renforcé" },
              ].map(({ sigle, label }) => (
                <div key={sigle} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-12 h-8 rounded-md bg-[#0a2463] text-white text-[10px] font-black flex items-center justify-center tracking-wide">
                    {sigle}
                  </span>
                  <span className="text-xs text-slate-500 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 text-center">
            <p className="text-[#0a2463] font-bold text-sm mb-1">
              Un projet similaire ?
            </p>
            <p className="text-[#0a2463]/70 text-xs mb-4">
              Contactez 2SP CONSULTING pour une mission de collecte de données ou de sous-traitance stratégique.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-[#0a2463] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#0d2f7a] transition-colors"
            >
              Nous contacter →
            </Link>
          </div>
        </aside>
      </div>

      {/* ── LIGHTBOX ─────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition text-xl"
            onClick={() => setLightbox(null)}
          >✕</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
          >←</button>
          <img
            src={images[lightbox]}
            alt=""
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
          >→</button>
          <p className="absolute bottom-4 text-white/50 text-xs">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}

      <style>{`
        .collecte-page {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .collecte-page h1, .collecte-page h2, .collecte-page h3, .collecte-page strong {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default CollecteDetail;
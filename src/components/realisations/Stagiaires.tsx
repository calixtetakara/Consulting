import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/Stagaires.jpeg",
  "/stag.jpeg",
  "/etud.jpeg",
  "/etud2.jpeg",
];

const activites = [
  "Accueil et intégration des étudiants dans les équipes opérationnelles du cabinet",
  "Supervision pratique dans les domaines des statistiques appliquées",
  "Encadrement sur les Systèmes d'Information Géographique (SIG)",
  "Formation et accompagnement en planification et gestion de projets",
  "Échanges académiques et développement d'un partenariat institutionnel",
];

const IconAcademic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
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

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconHandshake = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);

const expertises = [
  { label: "Encadrement académique & pédagogique", Icon: IconAcademic },
  { label: "Statistiques appliquées", Icon: IconChart },
  { label: "Systèmes d'Information Géographique (SIG)", Icon: IconGlobe },
  { label: "Partenariat institutionnel", Icon: IconHandshake },
];

const StagiairesDetail: React.FC = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="stagiaires-page min-h-screen bg-[#f7f6f2]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={images[activeImg]}
          alt="Encadrement de stagiaires"
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
            Formation
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Encadrement et supervision<br />
            <em className="not-italic text-yellow-400">de stages académiques</em>
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            2SP Consulting &nbsp;·&nbsp; CEA-SMIA / IMSP · Université d'Abomey-Calavi
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
              Le cabinet <strong>2SP Consulting</strong> a eu l'honneur d'accueillir et
              de superviser des étudiants du Centre d'Excellence Africain en Sciences
              Mathématiques, Informatique et Applications{" "}
              <strong>(CEA-SMIA)</strong> de l'Institut de Mathématiques et de Sciences
              Physiques <strong>(IMSP)</strong> de l'Université d'Abomey-Calavi au Bénin.
            </p>
          </div>

          {/* Contexte */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Contexte de la collaboration
              </h2>
            </div>
            <p className="text-slate-600 leading-[1.9] text-base">
              Cette collaboration a permis aux étudiants de bénéficier d'un{" "}
              <strong className="text-[#0a2463]">stage d'immersion professionnelle</strong>{" "}
              dans les domaines des statistiques, des systèmes d'information géographique
              (SIG) et de la planification, tout en favorisant un échange académique et le
              développement d'un partenariat institutionnel solide entre le cabinet et
              l'université.
            </p>
            <p className="text-slate-600 leading-[1.9] text-base mt-4">
              À travers cet encadrement, le cabinet 2SP Consulting réaffirme son engagement
              en faveur de la formation de la jeunesse africaine et du renforcement des
              compétences dans les métiers de la donnée, de la cartographie et de l'analyse
              spatiale. Ce type de partenariat constitue un levier important pour le
              développement du capital humain en Afrique de l'Ouest.
            </p>
          </div>

          {/* Activités */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Activités menées
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

          {/* Bloc partenaire */}
          <div className="bg-[#0a2463] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-yellow-400/20" />
            <div className="relative z-10">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[3px] mb-3 block">
                ✦ Partenaire académique
              </span>
              <p className="text-white/90 leading-[1.9] text-base mb-4">
                Le{" "}
                <strong className="text-yellow-400">CEA-SMIA</strong> est un centre
                d'excellence africain en Sciences Mathématiques, Informatique et
                Applications, rattaché à l'
                <strong className="text-yellow-400">IMSP</strong> — Institut de
                Mathématiques et de Sciences Physiques de l'
                <strong className="text-white">Université d'Abomey-Calavi</strong> au Bénin.
              </p>
              <p className="text-white/70 leading-[1.9] text-sm">
                Ce partenariat s'inscrit dans la vision du cabinet de contribuer activement
                à l'excellence académique et professionnelle en Afrique de l'Ouest.
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
                    alt={`Stagiaires ${i + 1}`}
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
                { label: "Partenaire", value: "CEA-SMIA / IMSP" },
                { label: "Université", value: "Abomey-Calavi, Bénin" },
                { label: "Domaines", value: "Stats · SIG · Planification" },
                { label: "Type", value: "Stage d'immersion pro." },
                { label: "Statut", value: "✓ Collaboration réussie" },
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
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Domaines encadrés */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-5">
              Domaines encadrés
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

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 text-center">
            <p className="text-[#0a2463] font-bold text-sm mb-1">
              Un partenariat similaire ?
            </p>
            <p className="text-[#0a2463]/70 text-xs mb-4">
              Contactez 2SP CONSULTING pour accueillir vos étudiants ou mettre en place une collaboration académique.
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
        .stagiaires-page {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .stagiaires-page h1, .stagiaires-page h2, .stagiaires-page h3, .stagiaires-page strong {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default StagiairesDetail;
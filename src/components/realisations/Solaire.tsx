import React, { useState } from "react";
import { Link } from "react-router-dom";

// ── Remplace les noms de fichiers et descriptions par les tiens
const gallery = [
  { src: "/InstallationP.Solaire.jpeg", caption: "Installation de panneaux solaires à Lomé" },
  { src: "/InstPan.jfif",              caption: "Maintenance de panneaux solaires à Kara" },
  { src: "/DepanL.jfif",              caption: "Mise en service d'un système photovoltaïque" },
  { src: "/installPan.jfif",              caption: "Installation sur toiture résidentielle" },
  { src: "/instPann.jfif",              caption: "Équipe technique en intervention" },
  { src: "/Pann.jfif",              caption: "Système solaire autonome installé" },
];

const activites = [
  "Étude de faisabilité et dimensionnement des systèmes photovoltaïques",
  "Installation de panneaux solaires sur toitures et au sol",
  "Câblage, raccordement et mise en service des équipements",
  "Configuration des onduleurs, batteries et régulateurs de charge",
  "Maintenance préventive et corrective des installations existantes",
  "Formation des utilisateurs à la bonne utilisation des systèmes",
];

const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const IconTool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const expertises = [
  { label: "Installation de systèmes photovoltaïques", Icon: IconSun },
  { label: "Maintenance préventive & corrective", Icon: IconTool },
  { label: "Dimensionnement & optimisation énergétique", Icon: IconBolt },
  { label: "Garantie & suivi des installations", Icon: IconShield },
];

const SolaireDetail: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [heroIdx, setHeroIdx] = useState(0);

  return (
    <main className="solaire-page min-h-screen bg-[#f7f6f2]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={gallery[heroIdx].src}
          alt="Installation panneaux solaires"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/85 via-[#0a1a3a]/40 to-transparent" />

        <Link
          to="/"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
        >
          <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">←</span>
          Retour aux réalisations
        </Link>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-12 max-w-5xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[4px] text-yellow-400 border border-yellow-400/40 px-3 py-1 rounded-full mb-4">
            Énergies Renouvelables
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Installation & maintenance<br />
            <em className="not-italic text-yellow-400">de panneaux solaires</em>
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            2SP Consulting &nbsp;·&nbsp; Plusieurs sites au Togo
          </p>
        </div>

        {/* Miniatures hero */}
        <div className="absolute right-6 bottom-12 z-20 flex flex-col gap-2">
          {gallery.slice(0, 4).map((item, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`w-12 h-9 rounded overflow-hidden border-2 transition-all duration-200 ${
                heroIdx === i ? "border-yellow-400 opacity-100" : "border-white/20 opacity-50 hover:opacity-80"
              }`}
            >
              <img src={item.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* ── CORPS PRINCIPAL ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

        {/* COLONNE GAUCHE */}
        <div className="space-y-16">

          {/* Chapô */}
          <div className="border-l-4 border-yellow-400 pl-6">
            <p className="text-[#0a2463] text-xl font-semibold leading-relaxed">
              Le cabinet <strong>2SP Consulting</strong> propose des solutions complètes
              en énergies renouvelables : de l'étude de faisabilité à l'installation,
              en passant par la maintenance régulière des systèmes photovoltaïques,
              pour une autonomie énergétique durable et fiable.
            </p>
          </div>

          {/* Contexte */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Notre approche
              </h2>
            </div>
            <p className="text-slate-600 leading-[1.9] text-base">
              Face aux défis énergétiques croissants en Afrique de l'Ouest, 2SP Consulting
              accompagne particuliers, entreprises et institutions dans leur transition
              vers des solutions solaires économiques et durables. Chaque installation
              est précédée d'une <strong className="text-[#0a2463]">étude personnalisée</strong>{" "}
              pour dimensionner le système selon les besoins réels du client.
            </p>
            <p className="text-slate-600 leading-[1.9] text-base mt-4">
              Le cabinet assure également la <strong className="text-[#0a2463]">maintenance
              préventive et corrective</strong> des installations existantes, garantissant
              des performances optimales sur le long terme. Nos techniciens qualifiés
              interviennent sur plusieurs sites à travers le Togo.
            </p>
          </div>

          {/* Activités */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Prestations réalisées
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

          {/* ── GALERIE AVEC LÉGENDES ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Galerie des réalisations
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="group text-left focus:outline-none"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0a2463]/0 group-hover:bg-[#0a2463]/15 transition-colors duration-300" />
                    {/* Icône zoom */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#0a2463] text-lg shadow-md">⤢</span>
                    </div>
                    {/* Numéro */}
                    <div className="absolute top-3 left-3">
                      <span className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Légende sous l'image */}
                  <p className="mt-2 text-xs text-slate-500 font-medium leading-snug px-1 group-hover:text-[#0a2463] transition-colors duration-200">
                    {item.caption}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Bloc engagement */}
          <div className="bg-[#0a2463] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-yellow-400/20" />
            <div className="relative z-10">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[3px] mb-3 block">
                ✦ Notre engagement
              </span>
              <p className="text-white/90 leading-[1.9] text-base">
                Nos solutions énergétiques sont{" "}
                <strong className="text-yellow-400">économiques, fiables et adaptées</strong>{" "}
                aux besoins spécifiques de chaque client. Que ce soit pour une habitation,
                une entreprise ou une institution, 2SP Consulting s'engage à fournir des
                systèmes performants avec un{" "}
                <strong className="text-white">suivi post-installation rigoureux</strong>{" "}
                garantissant votre autonomie énergétique sur le long terme.
              </p>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE */}
        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">

          {/* Fiche */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-[#0a2463] px-6 py-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Nos réalisations
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { label: "Cabinet", value: "2SP Consulting" },
                { label: "Type", value: "Installation & Maintenance" },
                { label: "Énergie", value: "Photovoltaïque" },
                { label: "Clients", value: "Particuliers & Institutions" },
                { label: "Zones", value: "Plusieurs sites au Togo" },
                { label: "Garantie", value: "✓ Suivi post-installation" },
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

          {/* Aperçu miniatures */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-3 px-1">
              Aperçu images
            </p>
            <div className="grid grid-cols-3 gap-2">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => { setHeroIdx(i); setLightbox(i); }}
                  className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all duration-200 opacity-70 hover:opacity-100"
                >
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end p-1">
                    <span className="text-[9px] font-bold text-white bg-black/50 rounded px-1 leading-tight line-clamp-1">
                      {item.caption}
                    </span>
                  </div>
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

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 text-center">
            <p className="text-[#0a2463] font-bold text-sm mb-1">
              Besoin d'une installation solaire ?
            </p>
            <p className="text-[#0a2463]/70 text-xs mb-4">
              Contactez 2SP CONSULTING pour une étude gratuite et un devis personnalisé.
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

      {/* ── LIGHTBOX avec légende ──────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex flex-col items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition text-xl"
            onClick={() => setLightbox(null)}
          >✕</button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + gallery.length) % gallery.length); }}
          >←</button>

          <img
            src={gallery[lightbox].src}
            alt={gallery[lightbox].caption}
            className="max-w-4xl max-h-[78vh] w-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Légende dans la lightbox */}
          <div
            className="mt-4 flex flex-col items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/90 text-sm font-medium text-center">
              {gallery[lightbox].caption}
            </p>
            <p className="text-white/35 text-xs">
              {lightbox + 1} / {gallery.length}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % gallery.length); }}
          >→</button>
        </div>
      )}

      <style>{`
        .solaire-page {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .solaire-page h1, .solaire-page h2, .solaire-page h3, .solaire-page strong {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default SolaireDetail;
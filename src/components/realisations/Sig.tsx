import React, { useState } from "react";
import { Link } from "react-router-dom";

// ── Remplace par tes vrais fichiers
const gallery = [
  { src: "/carte.jpeg", caption: "Carte thématique — occupation des sols" },
  { src: "/AcImages/im2.jpg", caption: "Schéma cartographique scolaire" },
  { src: "/AcImages/im3.jpg", caption: "Carte administrative — gouvernance locale" },
  { src: "/AcImages/im1.jpg", caption: "Analyse spatiale — ressources naturelles" },
];

const competences = [
  {
    num: "01",
    titre: "Cartes thématiques",
    desc: "Production de cartes thématiques précises pour la planification territoriale, la gouvernance locale et les projets de développement.",
  },
  {
    num: "02",
    titre: "Schémas cartographiques scolaires",
    desc: "Conception de schémas et supports cartographiques adaptés au milieu académique et utilisés dans les établissements d'enseignement.",
  },
  {
    num: "03",
    titre: "Analyse spatiale",
    desc: "Traitement et analyse des données géospatiales pour l'aide à la décision, la gestion des ressources et l'aménagement du territoire.",
  },
  {
    num: "04",
    titre: "Cartographie de gouvernance",
    desc: "Production de cartes dédiées à la gouvernance locale, la délimitation administrative et le suivi des projets territoriaux.",
  },
];

const outils = ["ArcGIS", "QGIS", "Google Earth Pro", "MapInfo", "R Spatial", "Python GeoPandas"];

const IconMap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IconCompass = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const expertises = [
  { label: "Cartographie & production de cartes", Icon: IconMap },
  { label: "Analyse spatiale multicouche", Icon: IconLayers },
  { label: "Géodésie & systèmes de projection", Icon: IconCompass },
  { label: "SIG & données géospatiales", Icon: IconGlobe },
];

/* ─── Composant image protégée EN COULEUR ──────────────────── */
const ProtectedImage: React.FC<{
  src: string;
  alt: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}> = ({ src, alt, style, onClick, className }) => (
  <div
    onClick={onClick}
    onContextMenu={(e) => e.preventDefault()}
    className={className}
    style={{
      position: "relative",
      overflow: "hidden",
      cursor: onClick ? "zoom-in" : "default",
      userSelect: "none",
      WebkitUserSelect: "none",
      ...style,
    }}
  >
    {/* Image en couleur — pas de filtre grayscale */}
    <img
      src={src}
      alt={alt}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        display: "block",
      }}
    />

    {/* Filigrane diagonal semi-transparent */}
    <div style={{
      position: "absolute", inset: 0,
      pointerEvents: "none",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "system-ui, sans-serif",
        fontWeight: 700,
        fontSize: "0.7rem",
        color: "rgba(255,255,255,0.30)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        transform: "rotate(-35deg)",
        whiteSpace: "nowrap",
        textShadow: "0 1px 3px rgba(0,0,0,0.5)",
      }}>
        © 2SP CONSULTING
      </span>
    </div>

    {/* Grille répétée anti-capture subtile */}
    <div style={{
      position: "absolute", inset: 0,
      pointerEvents: "none",
      background: "repeating-linear-gradient(45deg, transparent, transparent 38px, rgba(0,0,0,0.012) 38px, rgba(0,0,0,0.012) 39px)",
    }} />
  </div>
);

const SIGDetail: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="sig-page min-h-screen bg-[#f7f6f2]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">

        {/* Image hero en couleur */}
        <div
          style={{ position: "absolute", inset: 0 }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={gallery[0].src}
            alt="SIG 2SP Consulting"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Filigrane hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <span style={{
            fontFamily: "system-ui, sans-serif", fontWeight: 700,
            fontSize: "clamp(0.65rem, 2vw, 1rem)",
            color: "rgba(255,255,255,0.12)",
            letterSpacing: "0.3em", textTransform: "uppercase",
            transform: "rotate(-30deg)", whiteSpace: "nowrap",
          }}>
            © 2SP CONSULTING — TOUS DROITS RÉSERVÉS
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/90 via-[#0a1a3a]/30 to-transparent z-10" />

        <Link
          to="/"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
        >
          <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">←</span>
          Retour aux réalisations
        </Link>

        <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-12 max-w-5xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[4px] text-yellow-400 border border-yellow-400/40 px-3 py-1 rounded-full mb-4">
            SIG
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Systèmes d'Information<br />
            <em className="not-italic text-yellow-400">Géographique</em>
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            Analyse spatiale &nbsp;·&nbsp; Cartes thématiques &nbsp;·&nbsp; Gouvernance locale
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
              Le cabinet <strong>2SP Consulting</strong> met à disposition son expertise
              en cartographie et analyse spatiale au service des institutions, des projets
              de développement et du milieu académique. Nos productions cartographiques
              couvrent une large gamme d'applications, de la gouvernance locale aux
              supports pédagogiques scolaires.
            </p>
          </div>

          {/* Présentation */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Notre expertise SIG
              </h2>
            </div>
            <p className="text-slate-600 leading-[1.9] text-base">
              Grâce à une maîtrise avancée des outils SIG tels qu'
              <strong className="text-[#0a2463]">ArcGIS</strong> et{" "}
              <strong className="text-[#0a2463]">QGIS</strong>, le cabinet produit des
              cartes thématiques de haute qualité, des schémas cartographiques pour le
              milieu scolaire, ainsi que des analyses spatiales approfondies pour
              accompagner la prise de décision.
            </p>
            <p className="text-slate-600 leading-[1.9] text-base mt-4">
              Nos travaux cartographiques ont été mobilisés dans des contextes variés :
              gestion durable des ressources naturelles, délimitation de zones
              d'intervention, gouvernance territoriale locale, et production de supports
              visuels pour l'enseignement et la recherche académique.
            </p>
          </div>

          {/* Compétences */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Domaines de compétences
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {competences.map((c, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.07)",
                    borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                  className="p-6 flex gap-4 items-start hover:bg-white transition-colors duration-200"
                >
                  <span className="text-3xl font-light text-yellow-400/30 leading-none flex-shrink-0 mt-1" style={{ fontFamily: "Georgia, serif" }}>
                    {c.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0a2463] mb-1 font-sans">{c.titre}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ gridColumn: "1 / -1", borderTop: "1px solid rgba(0,0,0,0.07)" }} />
            </div>
          </div>

          {/* ── GALERIE PROTÉGÉE EN COULEUR ── */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <h2 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">
                Aperçu des réalisations
              </h2>
            </div>

            {/* Avertissement */}
            <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-slate-100 rounded-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-xs text-slate-400 font-medium">
                Images protégées — extraits de conception à titre illustratif. Tous droits réservés © 2SP Consulting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {gallery.map((item, i) => (
                <div key={i} className="group">
                  <div className="rounded-xl overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 relative">
                    <ProtectedImage
                      src={item.src}
                      alt={item.caption}
                      style={{ height: "200px" }}
                      onClick={() => setLightbox(i)}
                    />
                    {/* Icône zoom au hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0a2463] shadow-md text-base">
                        ⤢
                      </span>
                    </div>
                  </div>
                  {/* Légende */}
                  <p className="mt-2 text-xs text-slate-500 font-medium px-1 group-hover:text-[#0a2463] transition-colors duration-200 leading-snug">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc outils */}
          <div className="bg-[#0a2463] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-yellow-400/20" />
            <div className="relative z-10">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[3px] mb-4 block">
                ✦ Logiciels & outils maîtrisés
              </span>
              <div className="flex flex-wrap gap-2">
                {outils.map((o) => (
                  <span key={o} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium font-sans">
                    {o}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                Notre équipe maîtrise les principaux logiciels SIG du marché pour
                produire des sorties cartographiques conformes aux standards internationaux.
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
                Nos capacités SIG
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { label: "Cabinet", value: "2SP Consulting" },
                { label: "Spécialité", value: "Cartographie & SIG" },
                { label: "Logiciels", value: "ArcGIS · QGIS" },
                { label: "Productions", value: "Cartes · Schémas · Analyses" },
                { label: "Clients", value: "Institutions · Écoles · ONG" },
                { label: "Livrables", value: "SHP · PDF · PNG · DWG" },
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

          {/* Miniatures sidebar */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-1 px-1">
              Extraits de cartes
            </p>
            <p className="text-[10px] text-slate-300 mb-3 px-1">© protégé — 2SP Consulting</p>
            <div className="grid grid-cols-2 gap-2">
              {gallery.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="rounded-lg overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-all duration-200 opacity-80 group-hover:opacity-100">
                    <ProtectedImage
                      src={item.src}
                      alt={item.caption}
                      style={{ height: "72px" }}
                      onClick={() => setLightbox(i)}
                    />
                  </div>
                  <p className="text-[9px] text-slate-400 mt-1 leading-tight line-clamp-1">{item.caption}</p>
                </div>
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
                <li key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors duration-200 group cursor-default">
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
              Besoin d'une carte ou d'une analyse SIG ?
            </p>
            <p className="text-[#0a2463]/70 text-xs mb-4">
              Contactez 2SP CONSULTING pour une production cartographique sur mesure.
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

      {/* ── LIGHTBOX PROTÉGÉE EN COULEUR ────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex flex-col items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition text-xl"
            onClick={() => setLightbox(null)}
          >✕</button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + gallery.length) % gallery.length); }}
          >←</button>

          {/* Image protégée en couleur dans la lightbox */}
          <div
            style={{ position: "relative", maxWidth: "900px", width: "100%", maxHeight: "75vh" }}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].caption}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{
                width: "100%", maxHeight: "75vh", objectFit: "contain",
                pointerEvents: "none", display: "block", borderRadius: "12px",
              }}
            />
            {/* Filigrane lightbox */}
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center", pointerEvents: "none",
            }}>
              <span style={{
                fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "1rem",
                color: "rgba(255,255,255,0.2)", letterSpacing: "0.25em",
                textTransform: "uppercase", transform: "rotate(-35deg)", whiteSpace: "nowrap",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}>
                © 2SP CONSULTING — TOUS DROITS RÉSERVÉS
              </span>
            </div>
          </div>

          {/* Légende */}
          <div className="mt-4 flex flex-col items-center gap-1" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/80 text-sm font-medium text-center font-sans">
              {gallery[lightbox].caption}
            </p>
            <p className="text-white/30 text-xs font-sans">
              {lightbox + 1} / {gallery.length} &nbsp;·&nbsp; © 2SP Consulting — reproduction interdite
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % gallery.length); }}
          >→</button>
        </div>
      )}

      <style>{`
        .sig-page {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .sig-page h1, .sig-page h2, .sig-page h3, .sig-page strong {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </main>
  );
};

export default SIGDetail;
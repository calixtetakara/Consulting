"use client";

import React, { useState, useEffect } from "react";

/* ─── Icons ─────────────────────────────────────────────────── */
const IconPin: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconArrowUp: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const IconFb: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconTw: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const IconLi: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconIg: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ─── Types ─────────────────────────────────────────────────── */
interface Lien {
  label: string;
  href: string;
}

interface Social {
  icon: React.ReactNode;
  href: string;
  label: string;
}

/* ─── Data — synchronisée avec la Navbar ───────────────────── */
const NAV_LINKS: Lien[] = [
  { label: "Accueil",          href: "#accueil"      },
  { label: "Nos services",     href: "#services"     },
  { label: "Nos réalisations", href: "#realisations" },
  { label: "Nos Résultats",    href: "#resultats"    },
  { label: "Contact",          href: "#contact"      },
];

const SERVICES: Lien[] = [
  { label: "Gestion de projets",        href: "#services" },
  { label: "Cartographie & SIG",        href: "#services" },
  { label: "Énergies renouvelables",    href: "#services" },
  { label: "Analyse de données",        href: "#services" },
  { label: "Intelligence artificielle", href: "#services" },
  { label: "Formations professionnelles", href: "#services" },
];

/* ─── Sub-components ────────────────────────────────────────── */
const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-white text-xl font-bold mb-5 pb-3 relative
                 after:content-[''] after:absolute after:bottom-0 after:left-0
                 after:w-[50px] after:h-[2px] after:bg-yellow-400 after:rounded-full">
    {children}
  </h3>
);

/* ─── Footer ────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href: string): void => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const socials: Social[] = [
    { icon: <IconFb />, href: "#", label: "Facebook"  },
    { icon: <IconTw />, href: "#", label: "Twitter"   },
    { icon: <IconLi />, href: "#", label: "LinkedIn"  },
    { icon: <IconIg />, href: "#", label: "Instagram" },
  ];

  return (
    <>
      {/* ── Bouton scroll-to-top ── */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className={[
          "fixed bottom-8 right-8 z-50",
          "w-12 h-12 rounded-2xl bg-yellow-400 text-[#0a2463]",
          "flex items-center justify-center",
          "shadow-[0_8px_24px_rgba(245,196,0,0.4)]",
          "border-2 border-yellow-300",
          "transition-all duration-300 cursor-pointer",
          "hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(245,196,0,0.5)]",
          "active:scale-95",
          showScroll
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <IconArrowUp />
      </button>

      <footer className="bg-[#04091e] text-white/70 pt-14 pb-6 relative overflow-hidden">

        {/* blobs déco */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-400/[0.05]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/[0.03]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* ── Grille 4 colonnes ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            {/* Colonne 1 — À propos */}
            <div>
              <ColTitle>2SP CONSULTING</ColTitle>
              <p className="text-base leading-relaxed text-white/55">
                Gestion de projets · Solutions informatiques · Cartographie & SIG · Énergies renouvelables · Design graphique · Analyse de données · Intelligence artificielle · Formations professionnelles · Vente d'articles techniques
              </p>
              <div className="flex gap-2.5 mt-6">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-white/10
                               text-white/40 flex items-center justify-center
                               no-underline transition-all duration-200
                               hover:bg-yellow-400 hover:border-yellow-400
                               hover:text-[#0a2463] hover:-translate-y-0.5"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne 2 — Nos services */}
            <div>
              <ColTitle>Nos services</ColTitle>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {SERVICES.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="text-base text-white/55 bg-transparent border-none
                                 cursor-pointer p-0 text-left transition-colors duration-200
                                 hover:text-yellow-400 flex items-center gap-2
                                 before:content-['›'] before:text-yellow-400/50 before:font-bold"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 — Liens rapides (= liens Navbar) */}
            <div>
              <ColTitle>Liens rapides</ColTitle>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="text-base text-white/55 bg-transparent border-none
                                 cursor-pointer p-0 text-left transition-colors duration-200
                                 hover:text-yellow-400 flex items-center gap-2
                                 before:content-['›'] before:text-yellow-400/50 before:font-bold"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4 — Contact */}
            <div>
              <ColTitle>Contact</ColTitle>
              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">

                <li className="flex items-start gap-2.5 text-base text-white/55">
                  <IconPin />
                  <span>Kara, Togo</span>
                </li>

                <li className="flex items-start gap-2.5 text-base">
                  <IconPhone />
                  <a href="tel:+22890808608"
                    className="text-white/55 no-underline transition-colors hover:text-yellow-400">
                    (+228) 90 80 86 08
                  </a>
                </li>

                <li className="flex items-start gap-2.5 text-base">
                  <IconPhone />
                  <a href="tel:+22826608316"
                    className="text-white/55 no-underline transition-colors hover:text-yellow-400">
                    (+228) 26 60 83 16
                  </a>
                </li>

                <li className="flex items-start gap-2.5 text-base">
                  <IconMail />
                  <a href="mailto:contact@2spconsulting.tg"
                    className="text-white/55 no-underline transition-colors hover:text-yellow-400 break-all">
                    2spcabinet@gmail.com
                  </a>
                </li>

              </ul>
            </div>

          </div>

          {/* ── Copyright ── */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/35">
              &copy; 2026 <span className="text-white/55 font-semibold">2SP CONSULTING</span>.
              Tous droits réservés.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
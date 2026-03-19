import React from "react";
import {
  BriefcaseIcon,
  ComputerDesktopIcon,
  MapIcon,
  SunIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CpuChipIcon,
  AcademicCapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="group bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    {/* Icône */}
    <div
      className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${service.color} transition-transform duration-300 group-hover:scale-110`}
    >
      <service.icon className="w-8 h-8" />
    </div>

    {/* Titre */}
    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

const services = [
  {
    title: "Gestion et suivi de projets",
    description:
      "Nous accompagnons les organisations, entreprises et particuliers dans la planification et la mise en œuvre de projets durables. Nos méthodes et outils professionnels garantissent l'efficacité et la réussite de chaque initiative.",
    icon: BriefcaseIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Solutions informatiques et réseaux",
    description:
      "Nous assurons l'installation, la configuration et la maintenance des infrastructures informatiques. Nous optimisons également les systèmes pour une meilleure performance.",
    icon: ComputerDesktopIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Cartographie et analyse géospatiale",
    description:
      "Nous réalisons des cartes thématiques et des analyses géographiques pour appuyer les projets. Nous utilisons des systèmes d'information géographique (SIG) tels que ArcGIS et QGIS pour des résultats précis.",
    icon: MapIcon,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Énergies renouvelables et solutions solaires",
    description:
      "Nous menons des études, installons et maintenons des systèmes photovoltaïques fiables et durables. Nos solutions énergétiques sont économiques et adaptées aux besoins des organisations.",
    icon: SunIcon,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Création visuelle et design graphique",
    description:
      "Nous concevons des supports graphiques professionnels, tels que logos, affiches, cartes de visite et banderoles. Nos créations renforcent l'identité visuelle et la communication des organisations.",
    icon: PaintBrushIcon,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Exploitation et analyse de données",
    description:
      "Nous collectons, traitons et analysons des données quantitatives et qualitatives. Ces analyses facilitent la prise de décision et améliorent l'efficacité des projets.",
    icon: ChartBarIcon,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Innovation et intelligence artificielle",
    description:
      "Nous accompagnons l'intégration de l'intelligence artificielle pour automatiser certaines tâches. Cela permet d'améliorer l'efficacité et de favoriser l'innovation dans les projets.",
    icon: CpuChipIcon,
    color: "bg-gray-100 text-gray-600",
  },
  {
    title: "Formations professionnelles",
    description:
      "Nous proposons des formations pratiques en informatique, SIG, énergies renouvelables, analyse de données et intelligence artificielle. Elles permettent de développer des compétences solides et adaptées au monde professionnel.",
    icon: AcademicCapIcon,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Vente d'articles techniques",
    description:
      "Nous mettons à disposition des cartes géographiques et croquis de précision pour les travaux académiques et professionnels. Nos supports sont fiables et adaptés aux différents usages.",
    icon: MapPinIcon,
    color: "bg-orange-100 text-orange-600",
  },
];

const NosServices: React.FC = () => (
  <section
    id="services"
    className="services-section relative px-8 py-20 overflow-hidden bg-gray-50"
  >
    {/* Header */}
    <div className="text-center mb-14 relative z-10">
      <p className="text-sm uppercase font-medium text-yellow-400 mb-2 tracking-wider">
        Expertise
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2463] mb-4 tracking-tight">
        Nos Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Des solutions innovantes et durables pour accompagner vos projets.
      </p>
    </div>

    {/* Grille 3 colonnes → 3 lignes pour 9 cartes */}
    <div className="relative z-10 text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {services.map((s) => (
        <ServiceCard key={s.title} service={s} />
      ))}
    </div>

    {/* ✅ Dégradé de transition vers NosRealisations (fond blanc) */}
    <div
      className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
      style={{
        height: "150px",
        background: "linear-gradient(to bottom, transparent, #ffffff)",
      }}
    />

    {/* CSS intégré pour décor */}
    <style>
      {`
        .services-section {
          position: relative;
          overflow: hidden;
          background-image: url('/bg.png');
          background-size: cover;
          background-position: center;
        }
        .services-section::before {
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
        .services-section::after {
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
      `}
    </style>
  </section>
);

export default NosServices;
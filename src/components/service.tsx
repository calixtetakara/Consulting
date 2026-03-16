import {
  BriefcaseIcon,
  ComputerDesktopIcon,
  MapIcon,
  SunIcon,
  PaintBrushIcon,
  ChartBarIcon,
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
    <h3 className="text-lg font-bold text-gray-800 mb-3">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed">
      {service.description}
    </p>
  </div>
);

const services = [
  {
    title: "Gestion et suivi de projets",
    description:
      "Planification, exécution et évaluation de projets durables avec des outils adaptés.",
    icon: BriefcaseIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Solutions informatiques et réseaux",
    description:
      "Installation, configuration et maintenance de réseaux, serveurs et systèmes informatiques.",
    icon: ComputerDesktopIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Cartographie et analyse géospatiale",
    description:
      "Cartes thématiques et exploitation de données géographiques via les SIG.",
    icon: MapIcon,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Énergies renouvelables et solutions solaires",
    description:
      "Études, installation et maintenance de systèmes photovoltaïques fiables.",
    icon: SunIcon,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Création visuelle et design",
    description:
      "Affiches, logos, cartes de visite et traitement d’images pour une identité forte.",
    icon: PaintBrushIcon,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Exploitation et analyse de données",
    description:
      "Collecte, traitement et interprétation de données pour optimiser vos décisions.",
    icon: ChartBarIcon,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const NosServices: React.FC = () => (
  <section
    id="services"
    className="services-section relative px-8 py-20 overflow-hidden bg-gray-50"
  >
    {/* Header */}
    <div className="text-center mb-14 relative z-10">
      <p className="text-sm uppercase font-medium text-blue-600 mb-2">
        Expertise
      </p>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Nos Services
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        Des solutions innovantes et durables pour accompagner vos projets.
      </p>
    </div>

    {/* Grille */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {services.map((s) => (
        <ServiceCard key={s.title} service={s} />
      ))}
    </div>

    {/* CSS intégré */}
    <style jsx>{`
      .services-section {
        position: relative;
        overflow: hidden;
        background-image: url('/bg.png'); /* <-- ton image */
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
        background-color: rgba(0, 51, 102, 0.08); /* bleu clair */
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
        background-color: rgba(255, 200, 0, 0.1); /* jaune clair */
        z-index: 0;
      }
    `}</style>
  </section>
);

export default NosServices;

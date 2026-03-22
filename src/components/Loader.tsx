import { useEffect, useState } from "react";

type LoaderProps = {
  loading: boolean;
};

export default function Loader({ loading }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) {
      setProgress(100); // si le site est déjà chargé
      return;
    }

    setProgress(0); // reset au démarrage

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // stoppe l'intervalle à 100%
          return 100;
        }
        return prev + 2; // incrémente de 2% toutes les 20ms → ~1s pour remplir
      });
    }, 20);

    return () => clearInterval(interval);
  }, [loading]);

  // cacher loader quand terminé
  if (!loading && progress >= 100) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
      <div className="w-50 max-w-full h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-2 bg-[#335299] transition-all duration-50 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-[#335299] font-medium">Chargement...</p>
    </div>
  );
}

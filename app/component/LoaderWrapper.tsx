"use client";
import { useState, useEffect } from "react";
import Loading from "../loading/page"; // Votre composant de loader

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Définir un délai pour simuler le chargement
    const timer = setTimeout(() => {
      setLoading(false); // Une fois le délai écoulé, le loader est caché
    }, 2000); // Vous pouvez ajuster le temps du loader ici

    // Nettoyer le timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  // Afficher le loader pendant que l'état est en "loading"
  return loading ? <Loading /> : <>{children}</>;
};

export default LoaderWrapper;

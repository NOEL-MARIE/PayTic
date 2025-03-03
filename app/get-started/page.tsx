"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("demo");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    needs: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  // Gestion des changements de champ du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "Le prénom est requis.";
      isValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Le nom est requis.";
      isValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!formData.email) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.phone) {
      newErrors.phone = "Le téléphone est requis.";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    if (!formData.needs) {
      newErrors.needs = "Les besoins sont requis.";
      isValid = false;
    } else {
      newErrors.needs = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simuler une soumission de formulaire
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Réinitialiser le formulaire
        setFormData({ firstName: "", lastName: "", email: "", phone: "", needs: "" });
      }, 2000);
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto w-full px-4 py-12 font-Inter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div className="text-center mb-12" variants={tabVariants}>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Demander une démo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment notre plateforme peut transformer votre entreprise
            avec une démonstration personnalisée.
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.div className="grid w-full grid-cols-2" variants={tabVariants}>
            <motion.button
              className={`p-2 border-b-2 ${
                activeTab === "demo" ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("demo")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Démo personnalisée
            </motion.button>
            <motion.button
              className={`p-2 border-b-2 ${
                activeTab === "interactive" ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("interactive")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Démo interactive
            </motion.button>
          </motion.div>

          {activeTab === "demo" && (
            <motion.div
              className="mt-6 p-6 border rounded-lg"
              variants={tabVariants}
            >
              <h2 className="text-xl font-bold">Planifiez une démo personnalisée</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous pour qu'un de nos experts vous contacte.
              </p>
              <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    name="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div>
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    name="lastName"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                <div>
                  <input
                    className="w-full p-2 border rounded"
                    type="email"
                    name="email"
                    placeholder="Email professionnel"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <input
                    className="w-full p-2 border rounded"
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div>
                  <textarea
                    className="w-full p-2 border rounded"
                    name="needs"
                    placeholder="Décrivez vos besoins"
                    value={formData.needs}
                    onChange={handleInputChange}
                    rows={3}
                  ></textarea>
                  {errors.needs && <p className="text-red-500 text-sm">{errors.needs}</p>}
                </div>

                <motion.button
                  className="w-full p-2 bg-primary text-white rounded"
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Soumission en cours..." : "Demander une démo"}
                </motion.button>
              </form>

              {isSubmitted && !isSubmitting && (
                <div className="mt-6 text-green-500">
                  <p>Votre demande de démo a été soumise avec succès !</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "interactive" && (
            <motion.div
              className="mt-6 p-6 border rounded-lg"
              variants={tabVariants}
            >
              <h2 className="text-xl font-bold">Démo interactive</h2>
              <p className="text-muted-foreground">
                Explorez notre plateforme à votre rythme avec notre démo interactive.
              </p>
              <motion.button
                className="mt-4 p-2 bg-primary text-white rounded"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Regarder la démo
              </motion.button>
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-12 bg-muted rounded-lg p-8 text-center"
          variants={tabVariants}
        >
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si vous préférez commencer immédiatement, créez un compte et explorez notre plateforme.
          </p>
          <Link href="/get-started">
            <motion.button
              className="p-2 bg-primary text-white rounded"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Commencer maintenant
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

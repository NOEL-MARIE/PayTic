"use client";
import { useState } from "react";

export default function ApiDocsPage() {
  const [selectedTab, setSelectedTab] = useState("rest");

  return (
    <div className=" max-w-6xl mx-auto w-full px-4 py-12">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Documentation API
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour intégrer nos services à vos
            applications
          </p>
        </div>

        <div className="mb-8 p-6 border rounded-md">
          <h2 className="text-lg font-medium mb-2">Commencer avec l'API</h2>
          <p className="text-muted-foreground mb-2">
            Suivez ces étapes pour commencer à utiliser notre API
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                1. Créez votre compte développeur
              </h3>
              <p className="text-muted-foreground">
                Inscrivez-vous sur notre portail développeur pour obtenir vos
                clés d'API.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
                2. Générez vos clés d'API
              </h3>
              <p className="text-muted-foreground">
                Une fois inscrit, générez vos clés d'API dans votre tableau de
                bord.
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <input
                  type="text"
                  value="sk_test_51NxXXXXXXXXXXXXXXXXXXXXX"
                  readOnly
                  className="p-2 border rounded"
                />
                <button className="p-2 bg-gray-200 border rounded">Copy</button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
                3. Intégrez l'API à votre application
              </h3>
              <p className="text-muted-foreground">
                Utilisez nos bibliothèques client ou effectuez des requêtes HTTP
                directes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 mb-4">
            <button
              onClick={() => setSelectedTab("rest")}
              className={`py-2 px-4 ${
                selectedTab === "rest"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              API REST
            </button>
            <button
              onClick={() => setSelectedTab("sdk")}
              className={`py-2 px-4 ${
                selectedTab === "sdk" ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              SDK
            </button>
          </div>

          {selectedTab === "rest" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Authentification</h3>
                <p className="text-muted-foreground mb-2">
                  Toutes les requêtes API doivent inclure votre clé API dans
                  l'en-tête Authorization.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  Authorization: Bearer sk_test_51NxXXXXXXXXXXXXXXXXXXXXX
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Exemple de requête</h3>
                <p className="text-muted-foreground mb-2">
                  Voici un exemple de requête pour récupérer la liste des
                  utilisateurs.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  GET https://api.monentreprise.com/v1/users
                  <br />
                  Authorization: Bearer sk_test_51NxXXXXXXXXXXXXXXXXXXXXX
                  <br />
                  Content-Type: application/json
                </div>
              </div>
            </div>
          )}

          {selectedTab === "sdk" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Installation</h3>
                <p className="text-muted-foreground mb-2">
                  Installez notre SDK via npm ou yarn.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  npm install @monentreprise/sdk
                  <br />
                  # ou
                  <br />
                  yarn add @monentreprise/sdk
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Configuration</h3>
                <p className="text-muted-foreground mb-2">
                  Initialisez le SDK avec votre clé API.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  {`import { MonEntreprise } from '@monentreprise/sdk';

const client = new MonEntreprise({
  apiKey: 'sk_test_51NxXXXXXXXXXXXXXXXXXXXXX'
});`}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Points de terminaison API</h2>

          <div className="p-4 border rounded-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="bg-blue-500 px-2 py-1 text-xs font-bold rounded text-white mr-2">
                  GET
                </span>
                <code className="font-mono">/v1/users</code>
              </div>
              <button className="py-1 px-3 border rounded">Essayer</button>
            </div>
            <p className="text-muted-foreground">Liste tous les utilisateurs</p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="bg-green-500 px-2 py-1 text-xs font-bold rounded text-white mr-2">
                  POST
                </span>
                <code className="font-mono">/v1/users</code>
              </div>
              <button className="py-1 px-3 border rounded">Essayer</button>
            </div>
            <p className="text-muted-foreground">Crée un nouvel utilisateur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

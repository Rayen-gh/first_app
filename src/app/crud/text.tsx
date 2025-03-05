"use client";

import { useState, ChangeEvent } from 'react';

interface Produit {
  id: number;
  name: string;
  price: string;
}

export default function Crud() {
  const [produits, setProduits] = useState<Produit[]>([
    { id: 1, name: "Produit 1", price: "10€" },
    { id: 2, name: "Produit 2", price: "20€" },
    { id: 3, name: "Produit 3", price: "30€" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProduit, setNewProduit] = useState<Produit>({ id: 0, name: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduitId, setCurrentProduitId] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduit({ ...newProduit, [name]: value });
  };

  const ajoutProduit = () => {
    if (isEditing) {
      setProduits(produits.map(produit => produit.id === currentProduitId ? { ...newProduit, id: currentProduitId } : produit));
      setIsEditing(false);
      setCurrentProduitId(null);
    } else {
      setProduits([...produits, { ...newProduit, id: produits.length + 1 }]);
    }
    setNewProduit({ id: 0, name: '', price: '' });
    setShowForm(false);
  };

  const editerProduit = (id: number) => {
    const produit = produits.find(produit => produit.id === id);
    if (produit) {
      setNewProduit(produit);
      setIsEditing(true);
      setCurrentProduitId(id);
      setShowForm(true);
    }
  };

  const supprimerProduit = (id: number) => {
    setProduits(produits.filter(produit => produit.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="text-xl font-bold mb-4">Liste des Produits</h2>
        <input
          type="button"
          value="Ajout Produit"
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        />
      </div>
      {showForm && (
        <div className="mb-4 p-4 border rounded-lg shadow-sm">
          <input
            type="text"
            name="name"
            placeholder="Nom du produit"
            value={newProduit.name}
            onChange={handleInputChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="price"
            placeholder="Prix du produit"
            value={newProduit.price}
            onChange={handleInputChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="button"
            value={isEditing ? "Mettre à jour" : "Ajouter"}
            onClick={ajoutProduit}
            className="px-4 py-2 border rounded bg-green-500 text-white"
          />
        </div>
      )}
      <div className="space-y-4">
        {produits.map((produit) => (
          <div key={produit.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
            <div>
              <p className="text-lg font-medium">{produit.name}</p>
              <p className="text-gray-500">{produit.price}</p>
            </div>
            <div>
              <input
                type="button"
                value="Éditer"
                onClick={() => editerProduit(produit.id)}
                className="px-4 py-2 border rounded bg-blue-500 text-white"
              />
              <input
                type="button"
                value="Supprimer"
                onClick={() => supprimerProduit(produit.id)}
                className="ml-2 px-4 py-2 border rounded bg-red-500 text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import { log } from "console";
import { use, useState } from "react";


interface Produit{
  id: number;
  name: string;
  price: string;
}
export default function Crud(){
  const [produit, setProduit]=useState<Produit[]>([
   {id: 1, name: "Produit 1", price: "10€"},
    {id: 2, name: "Produit 2", price: "20€"},
    {id: 3, name: "Produit 3", price: "30€"}
  ]);
  const ajoutProduit=(e:any)=>{
    e.preventDefault();
    const nameProdElement = document.getElementById("nameprod") as HTMLInputElement | null;
    const prixprod = document.getElementById("prix") as HTMLInputElement | null;
    if (nameProdElement && prixprod) {
      setProduit([...produit, {id: Math.random(), name: nameProdElement.value, price: prixprod.value}]);
      nameProdElement.value = "";
      prixprod.value = "";
      
    }
  }
  const supprimerProduit=(id:number)=>{
    setProduit(produit.filter(produit => produit.id !== id));
  }
  const modifierProduit=(id:number)=>{
    let newName = prompt("Entrez le nouveau nom du produit");
    let newPrice = prompt("Entrez le nouveau prix du produit");
    if (newName !== null && newPrice !== null) {
      setProduit(produit.map(produit => produit.id === id ? {...produit, name: newName, price: newPrice} : produit));
    }
  }

  return (
    <div>
      <h2>Crud</h2>
      <div>
        <h3>Liste des produits</h3> 
        <ul>
          {produit.map((produit, index) => (
            <li key={index}>
              <span>{produit.name}</span>
              <span>{produit.price}</span> &nbsp; &nbsp;
              <button onClick={() => modifierProduit(produit.id)} style={{backgroundColor:"orange", borderRadius:"5px" , color:"white", border:"0.5px sloid black", padding:"5px"}}>Modifier</button>&nbsp; &nbsp;
              <button onClick={()=>{supprimerProduit(produit.id)}} style={{backgroundColor:"red" ,borderRadius:"5px" , color:"white", border:"0.5px sloid black", padding:"5px"}}>Supprimer</button>&nbsp; &nbsp;
            </li>
          ))}
        </ul>
        <h3 style={{marginTop:"40px"}}>Ajout des Produits</h3>
        <form action="">
          <input  id="nameprod" type="text" placeholder="Nom du produit"/>
         
          <input id="prix" type="number" placeholder="Prix du produit"/>
          <button onClick={ajoutProduit}>Ajouter</button>
        </form>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Produits() {
  const [products, setProducts] = useState([]);
  const apiUrl = "http://127.0.0.1:8000/api/produits";

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul></ul>
    </div>
  );
}

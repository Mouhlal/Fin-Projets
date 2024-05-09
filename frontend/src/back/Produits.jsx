import { useEffect, useState } from "react";
import axios from "axios";
import StocksTable from "../Composants/StocksTable";

export default function Employees() {
  const [produits, setProduits] = useState([]);
  const url = "http://127.0.0.1:8000/api";

  const getApi = async () => {
    try {
      const resp = await axios.get(`${url}/produits`, {
        withCredentials: true,
        withXSRFToken: true,
      });
      const { produits } = resp.data;
      setProduits(produits);
      console.log("Produits list :", produits);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const refreshApi = () => {
    getApi();
  };

  return (
    <div>
      <StocksTable produits={produits} refreshApi={refreshApi} />
    </div>
  );
}

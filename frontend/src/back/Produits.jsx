import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Produits() {
    const [data, setData] = useState([]);

    const url = "http://127.0.0.1:8000/api/produits/";

    const getApi = async () => {
        try {
            const resp = await axios.get(url);
            setData(resp.data);
            console.log(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getApi();
    }, []);

    return (
        <div>
            <h1>Liste des produits</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

import { Nav } from "./Composants/Nav";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Composants/Layout";

import Produits from "./back/Produits";

import Employees from "./back/Employees";
import AddEmploye from "./Pages/AddEmploye";
import EditEmploye from "./Pages/EditEmploye";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />

        <Route path="/" element={<Layout />} />

        <Route path="/produits" element={<Produits />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/ajouter" element={<AddEmploye />} />
        <Route path="/employees/:id" element={<EditEmploye />} />
      </Routes>
    </BrowserRouter>
  );
}

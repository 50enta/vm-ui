import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { MainLayout, Lista, Registo, Login } from "../pages/pages"


const NotFound = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>Page Not Found</h1>
  )
}

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route element={<MainLayout />} path="/dashboard">
        <Route element={<Lista />} path="home" />
        </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  </HashRouter>
);

export default Rotas;
import { Routes, Route, Navigate } from "react-router-dom";

import { DCPages } from "../pages/DCPages";
import { MarvelPages } from "../pages/MarvelPages";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

// import {DCPages, MarvelPages, SearchPage, HeroPage } from "./heroes/pages"

import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/dcpages" element={<DCPages />} />
          <Route path="/marvelpages" element={<MarvelPages />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

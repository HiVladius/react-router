import { Routes, Route } from "react-router-dom";

import { LoginPages } from "../auth/components/LoginPages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    //! Rutas privadas
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRoutes>
            <Routes>
              <Route path="/*" element={<LoginPages />} />
            </Routes>
          </PublicRoutes>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />

      {/* <Route path="/login" element={<LoginPages />} /> */}
    </Routes>
  );
};

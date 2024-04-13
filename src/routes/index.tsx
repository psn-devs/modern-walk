import { Route, Routes } from "react-router-dom";
import { Main, Home } from "../components/pages";
import { MensCloth } from "../components/pages/MensCloth";
import { WomensCloth } from "../components/pages/WomensCloth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/mens-clothing" element={<MensCloth />} />
        <Route path="/womens-clothing" element={<WomensCloth />} />
      </Route>
    </Routes>
  );
};

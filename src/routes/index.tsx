import { Route, Routes } from "react-router-dom";
import { Main, Home } from "../components/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/mens-clothing" element={<Home />} />
        <Route path="/womens-clothing" element={<Home />} />
      </Route>
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { Episode } from "../components/Episode";

import Personajes from "../components/Personajes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/episode" element={<Episode />} />

        <Route path="/characters/" element={<Personajes />} />
      </Routes>
    </>
  );
};

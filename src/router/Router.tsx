import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login";
import homeRoutes from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route key={route.path} path={`${route.path}`} element={route.children} />
      ))}
    </Routes>
  );
});

export default Router;

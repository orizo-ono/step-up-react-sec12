import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import Setting from "../components/pages/Setting";
import Useranagement from "../components/pages/UserManegement";
import homeRoutes from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/setting" element={<Setting />} />
      <Route path="/home/user_manegement" element={<Useranagement />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});

export default Router;

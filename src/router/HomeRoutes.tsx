import Home from "../components/pages/Home";
import Setting from "../components/pages/Setting";
import Useranagement from "../components/pages/UserManegement";

export const homeRoutes = [
  {
    path: "/",
    // exact: true,
    children: <Home />,
  },
  {
    path: "/user_manegement",
    // exact: false,
    children: <Useranagement />,
  },
  {
    path: "/setting",
    // exact: false,
    children: <Setting />,
  },
];

export default homeRoutes;

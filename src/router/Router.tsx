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

{
  /* <Route
        path="/home"
        render={(match: { url: any }) => (
          <Routes>
            {homeRoutes.map((route) => (
              <Route key={route.path} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Routes>
        )}
      /> */
}

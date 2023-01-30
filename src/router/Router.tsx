import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import Setting from "../components/pages/Setting";
import Useranagement from "../components/pages/UserManegement";
import { HeaderLayout } from "../components/templete/HeaderLayout";
// import { LoginUserProvider } from "../provider/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
          // <LoginUserProvider>
          //   <HeaderLayout>
          //     <Home />
          //   </HeaderLayout>
          // </LoginUserProvider>
        }
      />
      <Route
        path="/home/setting"
        element={
          <HeaderLayout>
            <Setting />
          </HeaderLayout>
          // <LoginUserProvider>
          //   <HeaderLayout>
          //     <Setting />
          //   </HeaderLayout>
          // </LoginUserProvider>
        }
      />
      <Route
        path="/home/user_manegement"
        element={
          <HeaderLayout>
            <Useranagement />
          </HeaderLayout>
          // <LoginUserProvider>
          //   <HeaderLayout>
          //     <Useranagement />
          //   </HeaderLayout>
          // </LoginUserProvider>
        }
      />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});

export default Router;

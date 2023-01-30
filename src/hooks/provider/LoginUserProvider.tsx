import { Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";
import { User } from "../../types/api/user";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
};

// import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

// import { User } from "../../types/api/user";

// type LoginUser = User & { isAdmin: boolean };

// export type LoginUserContextType = {
//   loginUser: LoginUser | null;
//   setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
// };

// export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

// // ログインユーザー情報を保持するcontext
// export const LoginUserProvider = (props: { children: ReactNode }) => {
//   const { children } = props;
//   const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

//   return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
// };

// export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);

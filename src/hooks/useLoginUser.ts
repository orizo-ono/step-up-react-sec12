import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "./provider/LoginUserProvider";


export const useLoginUser = (): LoginUserContextType => useContext( LoginUserContext );

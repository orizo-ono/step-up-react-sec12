import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
// import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  // const { setLoginUser } = useLoginUser();
  const [ loading, setLoading ] = useState( false );
  const login = useCallback( ( id: string ) => {
    axios.get<User>( `https://jsonplaceholder.typicode.com/users/${ id }` ).then( ( res ) => {
      if ( res.data ) {
        // setLoginUser( res.data );
        showMessage( { title: "ログインしました", status: "success" } );
        navigate( "/home" );
      } else {
        showMessage( { title: "ユーザーが見つかりません", status: "error" } );
        setLoading( false );
      }
    } )
      .catch( () =>
        showMessage( { title: "ユーザーが見つかりません", status: "error" } ) );
    setLoading( false );
    // }, [ navigate, setLoginUser, showMessage ] );
  }, [ navigate, showMessage ] );

  return { login, loading };
};

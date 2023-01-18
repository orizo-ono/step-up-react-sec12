import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";


export const useAuth = () => {
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState( false );
  const login = ( id: string ) => {
    axios.get<User>( `https://jsonplaceholder.typicode.com/users/${ id }` ).then( ( res ) => {
      if ( res.data ) {
        navigate( "/home" );
      } else {
        alert( 'ユーザーが見つかりませんでした。' );
      }
    } ).catch( () => alert( 'ログインできません' ) ).finally( () => setLoading( false ) );
  };

  return { login, loading };
};

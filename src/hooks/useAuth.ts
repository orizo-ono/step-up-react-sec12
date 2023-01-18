import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";


export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [ loading, setLoading ] = useState( false );
  const login = ( id: string ) => {
    axios.get<User>( `https://jsonplaceholder.typicode.com/users/${ id }` ).then( ( res ) => {
      if ( res.data ) {
        showMessage( { title: "ログインしました", status: "success" } );
        navigate( "/home" );
      } else {
        showMessage( { title: "ユーザーが見つかりません", status: "error" } );
      }
    } ).catch( () => showMessage( { title: "ユーザーが見つかりません", status: "error" } ) ).finally( () => setLoading( false ) );
  };

  return { login, loading };
};

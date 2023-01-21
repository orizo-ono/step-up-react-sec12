
import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUsers = () => {
  const [ selecedtUser, setSelecedtUser ] = useState<User | null>( null );
  const onSelecedtUser = useCallback( ( props: Props ) => {
    const { id, users } = props;
    const targetUser = users.find( ( user ) => user.id === id );
    setSelecedtUser( targetUser ?? null );
  }, [] );
  return { onSelecedtUser, selecedtUser };
};

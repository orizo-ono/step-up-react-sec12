import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const Useranagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { onSelecedtUser, selecedtUser } = useSelectUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickUser = useCallback(
    (id: number) => {
      onSelecedtUser({ id, users, onOpen });
    },
    [users, onSelecedtUser, onOpen]
  );

  useEffect(() => getUsers(), [getUsers]);
  // useEffect(() => getUsers());

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard userName={user.username} imageUrl="https://source.unsplash.com/random" fullName={user.name} onClick={onClickUser} id={user.id} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selecedtUser} />
    </>
  );
});

export default Useranagement;

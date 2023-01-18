import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const Useranagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard userName="ひろき" imageUrl="https://source.unsplash.com/random" fullName="Ono Hiroki" />
      </WrapItem>
    </Wrap>
  );
});

export default Useranagement;

import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  );
});

import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, loading = false, disabled = false } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} isLoading={loading} disabled={disabled || loading} onClick={onClick}>
      {children}
    </Button>
  );
});

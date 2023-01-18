import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "error" | "success";
};


export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback( ( props: Props ) => {
    const { title, status } = props;
    toast( {
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,

    } );
  }, [ toast ] );
  return { showMessage };
};

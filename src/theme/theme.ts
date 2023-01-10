import { extendTheme } from "@chakra-ui/react";

// グローバルなthemeを指定していく
const theme = extendTheme({
  styles:{
    global:{
      body:{
        backgroundColor:"gray.100",
        color:"gray.800"
      }
    }
  }
});

export default theme;
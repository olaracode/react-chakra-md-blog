import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "@/theme/theme.js";
import AppRoutes from "@/routes/AppRoutes.jsx";
import useStore from "@/hooks/useStore.jsx";
import { RecoilRoot } from "recoil";
function App() {
  const { store } = useStore();
  return (
    <>
      <RecoilRoot>
        <ChakraProvider theme={store.theme ? darkTheme : lightTheme}>
          <AppRoutes />
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

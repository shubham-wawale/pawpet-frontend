import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import ServicesTabs from "./components/Services/Tabs";

function App() {
  return (
    <div className="App">
     <ChakraProvider>
     <ServicesTabs />
    </ChakraProvider>
    </div>
  );
}

export default App;

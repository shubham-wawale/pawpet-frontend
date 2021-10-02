import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import ServicesTabs from "./components/Services/Tabs";
import Dashboard from "./components/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Router>
      <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/ServicesTabs">
            <ChakraProvider>
            <ServicesTabs />
            </ChakraProvider>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

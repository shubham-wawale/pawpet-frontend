import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import ServicesTabs from "./components/Services/Tabs";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Registration from "./components/petregister/Registration";
import Landing from "./components/landing page/landing";
import SitterProfile from "./components/profile/SitterProfile";
import UserProfile from "./components/profile/UserProfile";
import Landingsignup from "./components/landing page/Landingsignup";
import PetsitterCards from "./components/petsitter info/PetsitterCards";
import Sitterinfo from "./components/petsitter info/Sitterinfo";

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/servicesTabs">
            <ChakraProvider>
            <ServicesTabs />
            </ChakraProvider>
          </Route>

          <Route path="/sitterProfile">
            <ChakraProvider>
            <SitterProfile />
            </ChakraProvider>
          </Route>

          <Route path="/userProfile">
            <ChakraProvider>
            <UserProfile/>
            </ChakraProvider>
          </Route>

          <Route path="/signup">
            <Landingsignup/>
            </Route>

            <Route path="/petsitterCards">
            <ChakraProvider>
            <PetsitterCards />
            </ChakraProvider>
          </Route>

          <Route path="/sitterinfo">
            <Sitterinfo/>
            </Route>


          <Route path="/registration">
            <Registration/>
            </Route>

        </Switch>
        </Router>
    </div>
  );
}

export default App;

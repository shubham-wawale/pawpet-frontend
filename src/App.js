import React, {useState} from "react";
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

import {petsitters,transactions,booking} from "./data"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



function App() {
  const[users, setUsers]= useState([
    {
      email:"console@gmail.com",
      password:"console"
    },
    {
      email:"chotu@gmail.com",
      password:"chotu"
    }
  ])
  function adduser(user) {
    setUsers( prevValue => {
      return [...prevValue, user];
    })
    console.log(users);
    
    // localStorage.setItem("normal_users",users)
    
  }
  return (
    
    
    <div className="App">
      <Router>
      <Switch>
          <Route path="/dashboard">
            <Dashboard petsitters={petsitters} />
          </Route>
          
          <Route exact path="/">
            <Landing users={users}/>
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
            <Landingsignup adduser={adduser}/>
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
            <Registration petsitters={petsitters} transactions={transactions} booking={booking}/>
            </Route>

           
        </Switch>
        </Router>
    </div>
  );
}

export default App;

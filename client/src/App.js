import React from 'react'
import {Route, Router} from 'react-router-dom'
import "./App.css";
import Login from "./components/Login"
import Createid from "./components/Createid"
import Clientdashboard from "./components/Clientdashboard"
import Admindashboard from "./components/Admindashboard"
import Feedbackclient from "./components/Feedbackclient"
const App =() =>{
  return(
    <>
      <Route  exact path="/">
          <Login />
      </Route>
      {/* <Route  path="/Createid">
         
          <Createid />
      </Route> */}
    
      <Route  path="/Admindashboard">
          <Admindashboard />
      </Route>

      <Route  path="/Clientdashboard">
          <Clientdashboard />
      </Route>
      
      <Route  path="/Feedbackclient">
          
          <Feedbackclient />
      </Route>

      
    </>
  )
}

export default App
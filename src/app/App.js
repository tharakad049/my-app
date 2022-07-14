import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    
    //<Login/>//

<Routes>
  <Route exact path = "/" element={<HomePage/>}></Route>
</Routes>

  );
}

export default App;


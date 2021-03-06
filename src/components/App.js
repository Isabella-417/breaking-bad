import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";

function App(){
    return (
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={HomePage}></Route>
       </Switch>
       </BrowserRouter> 
    );
}

export default App;
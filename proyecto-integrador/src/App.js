import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error404";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

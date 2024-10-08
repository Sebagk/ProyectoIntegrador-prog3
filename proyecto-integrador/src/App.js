import React from "react";
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error404";
import Populares from "./pages/Populares"
import Estrenos from "./pages/Estrenos";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path="/populares" exact component={Populares} />
        <Route path="/estrenos" exact component={Estrenos} />
        <Route path="/movies/:id" exact component={Detalle} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/search" component={SearchResults}/>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

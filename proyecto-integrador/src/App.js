import React from "React";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error404";
function App() {
  return (
    <div className="App">
      <p>Hola react</p>
      <Switch>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

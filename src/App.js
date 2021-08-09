import "./App.css";

import Header from "./components/Header";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./components/About";
import Product from "./Views/Product";
import MyProduct from "./components/MyProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={MyProduct} />
      </Switch>
    </div>
  );
}

export default App;

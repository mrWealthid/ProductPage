import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
// import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
// import About from "./components/About";

import Product from "./Views/Product";
import MyProduct from "./components/MyProduct";

function App() {
  // const [product, setProduct] = useState();

  // const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products";

  // useEffect(() => {
  //   axios.get(url).then(({ data }) => {
  //     console.log(data);
  //     setProduct(data);
  //   });
  // }, [url]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/myProduct" component={MyProduct} />
        <Route path="/card" component={Card} />
        <Route path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;

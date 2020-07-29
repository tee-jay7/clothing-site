import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { storeProducts, detailProduct } from "./data";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import Details from "./components/Details";
import Default from "./components/Default";
import About from "./components/About";

function App() {
  const [products, setProducts] = useState(storeProducts);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const setDetail = (id) => {
    let product = products.find((product) => product.id === id);
    setProductDetail(product);
  };
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <ItemList products={products} setDetail={setDetail} />
          </Route>
          <Route path="/details">
            <Details productDetail={productDetail} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

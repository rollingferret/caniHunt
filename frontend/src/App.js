// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProductPage from './components/ProductPage';
import NewProductPage from './components/NewProductPage';
import EditProductPage from './components/EditProductPage';
import SingleProductPage from './components/SingleProductPage';
import DeleteProductPage from './components/DeleteProductPage';
import MyProductsPage from './components/MyProductsPage';
import GetAllReviewsPage from './components/GetAllReviewsPage';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <ProductPage />
          </Route>
          {/* <Route exact path="/products/new">
            <NewProductPage />
          </Route> */}
          <Route exact path="/myproducts">
            <MyProductsPage isLoaded={isLoaded}/>
          </Route>
          <Route exact path="/products/:productId">
            <SingleProductPage isLoaded={isLoaded}/>
          </Route>
          {/* <Route exact path="/products/:productId/edit">
            <EditProductPage />
          </Route>
          <Route exact path="/products/:productId/delete">
            <DeleteProductPage />
          </Route> */}
          <Route exact path='/reviews'>
            <GetAllReviewsPage />
          </Route>
          <Route path='/'>
            The page you are looking for is not found.
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

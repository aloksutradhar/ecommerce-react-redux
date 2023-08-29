import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApiData } from "./redux/actions/actions";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import ProductListingPage from "./container/ProductListingPage";
import ProductDetailsPage from "./container/ProductDetailsPage";
import Header from "./components/Header";
import NotFound from "./container/NotFound";
import HomePage from "./container/HomePage";
import Cart from "./container/Cart";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Outlet /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productList" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

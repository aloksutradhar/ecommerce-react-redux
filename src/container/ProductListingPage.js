import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "../components/ProductComponent";
import { productListingApi } from "../redux/actions/actions";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("rendered");
    dispatch(productListingApi());
  }, [dispatch]);
  return (
    <div className="App">
      <ProductComponent />
    </div>
  );
};
export default ProductListingPage;

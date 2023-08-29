import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart
} from "../redux/actions/actions";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const productDetails = useSelector((state) => state.selectedProduct);
  const { title, image, price, category, description } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(selectedProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);

  const handleClick = () => {
    dispatch(addToCart(productDetails));
  };
  return (
    <React.Fragment>
      {Object.keys(productDetails).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="productDetails">
          <div className="productImage">
            <LazyLoadImage src={image} alt="" />
            <p>
              <strong>{title}</strong>
            </p>
          </div>
          <div>
            <p>{description}</p>
            <p>
              <strong>{category}</strong>
            </p>
            <p>${price}</p>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductDetailsPage;

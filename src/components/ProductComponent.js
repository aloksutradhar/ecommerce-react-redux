import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { addToCart } from "../redux/actions/actions";
import { Card, Image } from "semantic-ui-react";
function ProductComponent() {
  const productList = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = productList.map((product) => {
    const { id, title, image, price } = product;
    const handleCart = () => {
      dispatch(addToCart(product));
    };
    return (
      <div key={id} className="card">
        <Link to={`/product/${id}`} className="link">
          <LazyLoadImage src={image} alt="" />
          <p className="title">{title}</p>
        </Link>
        <p>${price}</p>
        <button onClick={handleCart}>Add to Cart</button>
      </div>
    );
  });

  return <div className="card-content">{renderList}</div>;
}
export default ProductComponent;

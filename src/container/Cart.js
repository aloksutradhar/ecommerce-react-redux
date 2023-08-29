import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { removeFromCart } from "../redux/actions/actions";
import { useCallback, useEffect, useState } from "react";
import emptycart from "../../public/images/emptycart.gif";
const Cart = () => {
  const [price, setPrice] = useState(0);
  const addedProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const total = useCallback(() => {
    let price = 0;
    addedProducts.map((ele) => (price = ele.price + price));
    setPrice(price);
  }, [addedProducts]);

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <h2>Cart</h2>
      {/* <pre>{JSON.stringify(addedProducts, undefined, 2)}</pre> */}
      {addedProducts.length > 0 ? (
        addedProducts.map((product) => {
          const { id, title, image, description, price } = product;
          return (
            <div key={id} className="cartDetails">
              <div className="cartProductImage">
                <LazyLoadImage src={image} alt="" />
              </div>
              <div>
                <p>
                  <strong>{title}</strong>
                </p>
                <p>{description}</p>
                <p>${price}</p>
                <button onClick={() => handleRemove(id)}>remove</button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h4>Your cart is empty!</h4>
        </div>
      )}
      {addedProducts.length > 0 ? (
        <div>
          <hr />
          <p>Total: ${price}</p>
        </div>
      ) : (
        <div>
          <img className="emptyCart" src={emptycart} alt="empty" />
        </div>
      )}
    </div>
  );
};
export default Cart;

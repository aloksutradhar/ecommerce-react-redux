import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const navstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      textDecoration: "none",
      paddingLeft: "10px",
      color: "#000"
    };
  };
  return (
    <div className="header">
      <span>
        <h2>Fake Store</h2>
      </span>
      <span>
        <nav>
          <NavLink to="/" style={navstyles}>
            Home
          </NavLink>
          <NavLink to="productList" style={navstyles}>
            Products
          </NavLink>
          <NavLink to="cart" style={navstyles}>
            <BsCart4 />
            <span className="quantity">{cartItems.length}</span>
          </NavLink>
        </nav>
      </span>
    </div>
  );
};
export default Header;

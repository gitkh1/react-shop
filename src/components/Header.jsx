import { Link } from "react-router-dom";
import logo from "../assets/img/pizza-logo.svg";
import cart from "../assets/img/cart-icon.svg";
import Input from "./Search";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza V2</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="header__cart">
          <Link className="button button--cart" to="/cart">
            <span>0 ₽</span>
            <div className="button__delimiter"></div>
            <img src={cart} alt="cart logo" style={{ marginRight: "5px" }} />
            <span>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

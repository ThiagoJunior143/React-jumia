import { Link } from "react-router-dom";
import "./mainpage.css";
import Container from "react-bootstrap/Container";
import { useCart } from "../context/Cartcontext";


const Navbar = () => {

   const { cartItems } = useCart()
   
   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity,0);


  return (
    <nav className="navbar navbar-expand-xl special-nav">
      <Container className="special-navbar">
        <Link className="navbar-brand" to="/">
          <img
            className="nav-im"
            src="/Images/Jumia.logo-removebg-preview.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* SEARCH FORM */}
          <form className="d-flex special-form" role="search">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              className="form-control me-2 special-input"
              type="search"
              placeholder="Search products, brands and categories"
              aria-label="Search"
            />

            <button className="btn special-btn" type="submit">
              Search
            </button>
          </form>

          {/* NAV ITEMS */}
          <ul className="navbar-nav special">
            {/* ACCOUNT DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <i className="fa-regular fa-user"></i>
                </span>{" "}
                Account
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/logout">
                    <button className="drop-btn">Log Out</button>
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* HELP DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <i className="fa-regular fa-circle-question"></i>
                </span>{" "}
                Help
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <button className="drop-btn">Live Chart</button>
                  </a>
                </li>
              </ul>
            </li>

            {/* CART LINK */}
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">
                <span className="nav-num">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div className="cart-number">{totalItems > 0 && totalItems}</div>
                  </span>{" "}
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

import Logo from "../assets/logo.svg";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import eyeIcon from "../assets/eye-fill.svg";
import CartTable from "./CartTable";

export default function Navbar({ showCartOptions = true }) {
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);

  const data = useCart() || 0;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const [authTokenVar, setAuthTokenVar] = useState(null);
  useEffect(() => {
    const fetchAuthToken = () => {
      setAuthTokenVar(localStorage.getItem("authToken"));
    };
    fetchAuthToken();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <img src={Logo} alt="" height={50} />
        <Link className="navbar-brand fs-3 fst-italic" to="/">
          FoodieCrew
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-1">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {authTokenVar ? (
              <li className="nav-item">
                <Link className="nav-link" to="/myorders">
                  Order History
                </Link>
              </li>
            ) : null}
          </ul>
          {authTokenVar ? (
            <div className="d-flex">
              {showCartOptions ? (
                <>
                  <Link
                    className="btn bg-white text-success mx-1 d-flex align-items-center justify-content-center"
                    to="/cart"
                  >
                    <span className="me-1">My Cart</span>
                    <Badge pill bg="danger">
                      {data.length}
                    </Badge>
                  </Link>
                  <div
                    className="btn bg-white text-success mx-1"
                    onClick={() => setCartView(true)}
                  >
                    <img src={eyeIcon} alt="Mini View of Cart" />
                  </div>
                </>
              ) : null}
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <CartTable />
                </Modal>
              ) : null}

              <div
                className="btn bg-white text-danger mx-1"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container-fluid">
        <img src={Logo} alt="" height={50} />
        <Link class="navbar-brand" to="/">
          FoodieCrew
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ENDPOINTS } from "../../endpoints";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${ENDPOINTS.BACKEND_PRODUCTION_ENDPOINT}/api/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    if (response.ok) {
      const json = await response.json();
      if (json.error) {
        alert("Enter Valid Credentials");
      } else {
        localStorage.setItem("userEmail", json.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    } else {
      alert("An unknown error occured.");
    }
  };

  const onFieldChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              name="password"
              value={credentials.password}
              onChange={onFieldChange}
            />
          </div>
          <button type="submit" className="btn btn-primary bg-info">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-primary bg-success">
            New to FoodieCrew?
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

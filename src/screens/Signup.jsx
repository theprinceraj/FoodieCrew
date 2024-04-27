import { useState } from "react";
import { Link, json } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Enter Valid Credentials");
      }
    }
  };

  const onFieldChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="nameHelp"
            name="name"
            value={credentials.name}
            onChange={onFieldChange}
          />
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputLocation" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="InputLocation"
            aria-describedby="addressHelp"
            name="location"
            value={credentials.location}
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check1"
            defaultChecked
          />
          <label className="form-check-label text-secondary" htmlFor="Check1">
            Do you agree to receive promotional updates and offers from
            FoodieCrew?
          </label>
        </div>
        <button type="submit" className="btn btn-primary bg-info">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-primary bg-success">
          Already a user?
        </Link>
      </form>
    </div>
  );
}

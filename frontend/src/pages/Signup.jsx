import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { customFetch } from "../utilities/customFetch";
export default function Signup() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        location: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await customFetch(`/api/createUser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
            } else {
                navigate("/login");
            }
        }
    };

    const onFieldChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const [alertLoggedAlreadyModal, setAlertAlreadyModal] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            setAlertAlreadyModal(true);
        }
    }, []);

    return (
        <>
            <Navbar />
            {alertLoggedAlreadyModal && (
                <Modal
                    onClose={() => {
                        setAlertAlreadyModal(false);
                        navigate("/", { replace: true });
                    }}>
                    <p>You are already logged in.</p>
                </Modal>
            )}
            <div className="container p-5">
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
                        <input type="checkbox" className="form-check-input" id="Check1" defaultChecked />
                        <label className="form-check-label text-secondary" htmlFor="Check1">
                            Do you agree to receive promotional updates and offers from FoodieCrew?
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
            <Footer />
        </>
    );
}

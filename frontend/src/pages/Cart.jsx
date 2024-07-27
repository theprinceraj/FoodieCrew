import CartTable from "../components/CartTable";
import { useCart } from "../components/ContextReducer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatchCart } from "../components/ContextReducer";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../utilities/customFetch.js";
export default function Cart() {
    const [alertEmptyModalView, setAlertEmptyModalView] = useState(true);
    const navigate = useNavigate();
    const data = useCart();
    const dispatch = useDispatchCart();
    const handleCheckout = async () => {
        if (data.length > 0) {
            let userEmail = localStorage.getItem("userEmail");
            let response = await customFetch(`/api/updateOrderData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userEmail,
                    order_data: data,
                    order_date: new Date().toUTCString(),
                }),
            });

            if (response.ok) {
                dispatch({ type: "DROP" });
                let json = await response.json();
                if (json.success) {
                }
            }
        } else {
            setAlertEmptyModalView(true);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            navigate("/login", { replace: true });
        }
    }, []);

    return (
        <>
            <Navbar showCartOptions={false} />
            {data.length !== 0 ? (
                <div className="container">
                    <CartTable />
                    <div className="btn bg-success" onClick={handleCheckout}>
                        <span className="text-white">Checkout</span>
                    </div>
                </div>
            ) : null}
            {data.length === 0 && alertEmptyModalView ? (
                <Modal
                    onClose={() => {
                        setAlertEmptyModalView(false);
                        navigate("/");
                    }}>
                    <div className="container">Please add something in the cart before checking out.</div>
                </Modal>
            ) : null}
            {data.length === 0 ? (
                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
                    <Footer />
                </div>
            ) : null}
        </>
    );
}

import CartTable from "../components/CartTable";
import { useCart } from "../components/ContextReducer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatchCart } from "../components/ContextReducer";
export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:3000/api/updateOrderData", {
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
  };

  return (
    <>
      <Navbar showCartOptions={false} />
      <CartTable />
      <div className="container" onClick={handleCheckout}>
        <span className="btn bg-success text-white">Checkout</span>
      </div>
      <div className="position-absolute bottom-0 w-100">
        <Footer />
      </div>
    </>
  );
}

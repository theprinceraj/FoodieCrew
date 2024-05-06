import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ENDPOINTS } from "../../endpoints";
import { useEffect, useState } from "react";
export default function MyOrders() {
  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.qty, 0);
  }
  const [ordersResponse, setOrdersResponse] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login", { replace: true });
    }
    const fetchOrderData = async () => {
      const response = await fetch(
        `${ENDPOINTS.BACKEND_PRODUCTION_ENDPOINT}/api/fetchOrderData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = (await response.json()).order_data;
      setOrdersResponse(data);
    };
    fetchOrderData();
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="container m-auto mt-2 table-responsive table-responsive-sm table-responsive-md"
        style={{ height: "505px", overflowY: "scroll" }}
      >
        <table className="table table-striped table-hover">
          <thead
            className="fs-4 position-sticky top-0"
            style={{ backgroundColor: "var(--bs-body-bg)" }}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items(Size, Quantity)</th>
              <th scope="col">Date(MM/DD/YYYY)</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {ordersResponse.length > 0 &&
              ordersResponse.map((order, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div>
                      {order.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="fs-6">
                          {item.name} ({item.size}, {item.qty})
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{formatDate(order.order_date)}</td>
                  <td>₹ {calculateTotal(order.items)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {ordersResponse.length === 0 && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
          <Footer />
        </div>
      )}
    </>
  );
}

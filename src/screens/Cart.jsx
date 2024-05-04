import { useCart, useDispatchCart } from "../components/ContextReducer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Trash from "../assets/trash-fill.svg";
export default function Cart() {
  let data = useCart();
  console.log(data);
  let dispatch = useDispatchCart();
  if (data === undefined || data.length === 0) {
    return (
      <>
        <Navbar />
        <div className="p-3 w-100 text-center fs-4">The cart is empty!</div>
        <div className="position-absolute bottom-0 w-100">
          <Footer />
        </div>
      </>
    );
  } else {
    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
      <>
        <Navbar />
        <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
          <table className="table table-hover">
            <thead className="fs-4">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Option</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <img
                        src={Trash}
                        alt="Delete"
                        onClick={() => {
                          dispatch({ type: "REMOVE", id: food._id });
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    );
  }
}

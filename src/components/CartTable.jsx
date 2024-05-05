import { useCart, useDispatchCart } from "./ContextReducer";
import Trash from "../assets/trash-fill.svg";
export default function Cart() {
  let dispatch = useDispatchCart();
  let _ = useCart();
  let data = JSON.parse(localStorage.getItem("order_data"));
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    dispatch({
      type: "ADD",
      id: data[i].id,
      name: data[i].name,
      price: data[i].price,
      qty: data[i].qty,
      size: data[i].size,
      img: data[i].img,
    });
  }
  if (data === undefined || data.length === 0) {
    return <div className="p-3 w-100 text-center fs-4">The cart is empty!</div>;
  } else {
    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
      <>
        <div
          className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md"
          style={{ height: "400px", overflowY: "scroll" }}
        >
          <table className="table table-striped table-hover">
            <thead
              className="fs-4 position-sticky top-0"
              style={{ backgroundColor: "var(--bs-body-bg)" }}
            >
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
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>
                    {food.size.charAt(0).toUpperCase() + food.size.slice(1)}
                  </td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <img
                        src={Trash}
                        alt="Delete"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container fs-5">Total Price: {totalPrice}/-</div>
      </>
    );
  }
}

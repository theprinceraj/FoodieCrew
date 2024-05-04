import { useDispatchCart, useCart } from "./ContextReducer";
import { useState, useEffect, useRef } from "react";
export default function Card({ foodItem, options }) {
  let dispatch = useDispatchCart();
  const priceRef = useRef(),
    qtyRef = useRef();
  let data = useCart();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = null;
    for (const item of data) {
      if (item.id === foodItem._id && size === item.size) {
        food = item;
        break;
      }
    }
    if (food !== null) {
      console.log(food.size, size);
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: foodItem._id,
          price: finalPrice,
          qty: qty,
        });
      } else {
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          name: foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: foodItem.img,
        });
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: foodItem.img,
    });
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
    setQty(qtyRef.current.value);
  }, []);
  return (
    <div
      className="card m-3"
      style={{ width: "17rem", height: "350px", maxWidth: "275px" }}
      id={foodItem._id}
    >
      <div className="card-img-top object-fit-cover object-position-center overflow-hidden">
        <img
          src={foodItem.img}
          alt={foodItem.name}
          className="card-img-top"
          style={{ height: "203px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{foodItem.name}</h5>
        <p className="card-text">Rs. 100</p>
        <div className="container w-100">
          <select
            name=""
            className="m-2 h-100 bg-success rounded"
            onChange={(e) => setQty(e.target.value)}
            ref={qtyRef}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 bg-success rounded"
            onChange={(e) => setSize(e.target.value)}
            ref={priceRef}
          >
            {priceOptions.map((data) => (
              <option key={data} value={data}>
                {data.charAt(0).toUpperCase() + data.slice(1)}
              </option>
            ))}
          </select>

          <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>

          <div
            className="btn d-flex align-items-center justify-content-center bg-success rounded-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

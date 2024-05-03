import addToCart from "../assets/bag-plus-fill.svg";

export default function Card({ foodName, foodImg, options }) {
  let priceOptions = Object.keys(options);
  return (
    <div
      className="card m-3"
      style={{ width: "17rem", height: "350px", maxWidth: "275px" }}
    >
      <div className="card-img-top object-fit-cover object-position-center overflow-hidden">
        <img
          src={foodImg}
          alt="..."
          className="card-img-top"
          style={{ height: "203px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <p className="card-text">Rs. 100</p>
        <div className="container w-100">
          <select name="" className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((data) => (
              <option key={data.toUpperCase()} value={data.toUpperCase()}>
                {data.toUpperCase()}
              </option>
            ))}
            {/* <option value="half">Half</option>
            <option value="full">Full</option> */}
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>

          <div className="cursor-pointer text-white d-flex align-items-center justify-content-center bg-success rounded-3">
            <span>Add to Cart</span>
            <img
              src={addToCart}
              alt="Add to Cart"
              className="btn-close-white m-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

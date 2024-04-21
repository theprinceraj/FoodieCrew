export default function Card() {
  return (
    <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://media.istockphoto.com/id/1292629333/photo/paneer-butter-masala-or-cheese-cottage-curry-served-over-a-rustic-wooden-background-selective.jpg?s=1024x1024&w=is&k=20&c=5gSyMuGrJ4W7ofeugy9g1N5nZnCfZfegDV1il-f70PY="
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Noodles</h5>
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
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
}

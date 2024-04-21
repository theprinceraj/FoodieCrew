import { Link } from "react-router-dom";

export default function FoodCard({ itemName, itemDescription, redirectURL }) {
  return (
    <>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{itemName}</h5>
          <p class="card-text">{itemDescription}</p>
          <Link to={redirectURL} class="btn btn-primary">
            Go!
          </Link>
        </div>
      </div>
    </>
  );
}

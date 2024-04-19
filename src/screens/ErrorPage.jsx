import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const errorMsg = useRouteError();
  console.error(errorMsg.error);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="text-left">{errorMsg.error.message}</p>
        <p>{errorMsg.error.stack}</p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

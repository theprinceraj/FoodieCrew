import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-body" to="/">
          FoodieCrew
        </Link>
      </div>
    </footer>
  );
}

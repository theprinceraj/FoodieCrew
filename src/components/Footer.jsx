import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-body-tertiary text-center text-lg-start">
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link class="text-body" to="/">
          FoodieCrew
        </Link>
      </div>
    </footer>
  );
}

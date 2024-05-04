import CartTable from "../components/CartTable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Cart() {
  return (
    <>
      <Navbar showCartOptions={false} />
      <CartTable />
      <div className="position-absolute bottom-0 w-100">
        <Footer />
      </div>
    </>
  );
}

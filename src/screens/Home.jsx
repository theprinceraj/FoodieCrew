import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FoodCard from "../components/foodCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <FoodCard
        itemName={"Cheese"}
        itemDescription={"Cheese is good"}
        redirectURL={"#"}
      />
      <Footer />
    </>
  );
}

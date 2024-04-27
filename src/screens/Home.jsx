import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />

      <Carousel />

      <div className="d-flex justify-content-evenly flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
      <Footer />
    </>
  );
}

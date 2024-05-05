import { ENDPOINTS } from "../../endpoints";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const [foodItem, setFoodItem] = useState(null);
  const [foodCat, setFoodCat] = useState(null);

  const loadData = async () => {
    console.log(ENDPOINTS)
    let response = await fetch(`${ENDPOINTS.BACKEND_PRODUCTION_ENDPOINT}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0]. response[1]);

    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            maxHeight: "400px",
            objectFit: "contain !important",
            objectPosition: "center",
          }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1280x720/?burger"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1280x720/?schezwan"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1280x720/?dosa"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Category & Items */}
      <div className="text-center justify-content-evenly">
        {foodCat !== null && foodCat !== undefined ? (
          foodCat.map((data) => {
            const filteredItems =
              foodItem !== null && foodItem !== undefined
                ? foodItem.filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                : [];
            return (
              <div key={data.CategoryName}>
                {filteredItems.length > 0 && (
                  <>
                    <div className="fs-3 m-3">{data.CategoryName}</div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                      {foodItem !== null && foodItem !== undefined ? (
                        foodItem
                          .filter(
                            (item) =>
                              item.CategoryName === data.CategoryName &&
                              item.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                          )
                          .map((filteredItem) => {
                            return (
                              <Card
                                key={filteredItem._id}
                                foodItem={filteredItem}
                                options={filteredItem.options[0]}
                              />
                            );
                          })
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </>
  );
}

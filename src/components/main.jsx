import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 ">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-2 text-dark fw-bold">
                New Season Arrivals
              </h5>
              <p className="card-text fs-4 text-dark d-none d-sm-block">
                Explore our latest collection and discover the perfect styles
                for the season. Limited stock available, so grab your favorites
                before they're gone!
                <br/><br/>
                <a href="/product" className="btn btn-outline-dark fw-bold m-2">
                <i className="fa fa-cart-shopping mr-1"></i> Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

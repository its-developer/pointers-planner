import React from "react";
import { Link } from "react-router-dom";
import carousel1 from "../content/images/carousel1.jpg";
import carousel2 from "../content/images/carousel2.jpg";
import carousel3 from "../content/images/carousel3.jpg";
import Photography from "../content/images/photography.png";
import WeedingDinnerDecoration from "../content/images/wedding-dinner-decoration.png";
import Makeup from "../content/images/makeup.png";
import ServiceCard from "./HomepageComponent/ServicesCard";
import { useEffect } from "react";
import GalleryImageSection from "./GalleryImageSection/GalleryImageSection";
import AuthLeftImage from "../content/images/auth_left_flowers.png";
import AbouUsFlowers from "../content/images/about_us_flowers.png";
import ReserveTheDate from "../Components/ReserveTheDate";
import Decoration from "../Components/Gallery/Decoration";
import MakeupComp from "../Components/Gallery/Makeup";

function Home() {
  const [calendarModalState, setCalendarModalState] = React.useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        id="CarouselHomepageSlider"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#CarouselHomepageSlider"
            data-bs-slide-to="0"
            className="carouselIndicator active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#CarouselHomepageSlider"
            className="carouselIndicator"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#CarouselHomepageSlider"
            className="carouselIndicator"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ maxHeight: "750px", minHeight: "100%" }}
          >
            <img
              src={carousel2}
              className="d-block w-100 p-0"
              style={{ height: "80vh" }}
              alt="#ImgNotFound"
            />
          </div>
          <div
            className="carousel-item"
            style={{ maxHeight: "750px", minHeight: "100%" }}
          >
            <img
              src={carousel1}
              className="d-block w-100 p-0"
              style={{ height: "80vh" }}
              alt="#ImgNotFound"
            />
          </div>
          <div
            className="carousel-item"
            style={{ maxHeight: "750px", minHeight: "100%" }}
          >
            <img
              src={carousel3}
              className="d-block w-100 p-0"
              style={{ height: "80vh" }}
              alt="#ImgNotFound"
            />
          </div>
        </div>
      </div>

      <div className="service_div container-xl mt-5">
        <h1 className="main_heading">Our Services</h1>
        <div
          id="ServiceDivCarousel"
          className="carousel slide pt-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[0, 1, 2].map((item) => {
              return (
                <div
                  key={item}
                  className={`carousel-item ${item == 0 ? "active" : ""}`}
                >
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 serviceBox1">
                      <ServiceCard
                        title={"Photography/Videography"}
                        image={Photography}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4 serviceBox2">
                      <ServiceCard
                        title={"Decoration"}
                        image={WeedingDinnerDecoration}
                      />
                    </div>
                    <div className="col-lg-4 serviceBox3">
                      <ServiceCard title={"Makeup"} image={Makeup} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#ServiceDivCarousel"
              data-bs-slide-to="0"
              className="carouselIndicator active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#ServiceDivCarousel"
              className="carouselIndicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#ServiceDivCarousel"
              className="carouselIndicator"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>

      <div className="luxury_wedding_div container-xl px-3 mt-3">
        <h1 className="main_heading mt-5 pt-5 mb-5">Our Luxury Weddings</h1>
        <GalleryImageSection />
      </div>

      <MakeupComp />

      <Decoration />

      <div className="decoration_div container-xl px-3 pt-4 pb-md-4">
        <Link
          to="/gallery"
          className="btn go_to_gallary_btn px-3 fw-bold"
          style={{
            border: "1px solid #B89562",
            textDecoration: "none",
            borderRadius: "999px",
            color: "#B89562",
          }}
        >
          Go to Gallery <i className="ms-3 fa fa-long-arrow-right"></i>
        </Link>
      </div>

      <br />
      <br />
      <br />

      <div className="image_and_intro_div container-xl px-3">
        <div className="row">
          <div className="col-md-6 col-xl-5 image_section order-md-2">
            <div className="card border-0 rounded">
              <div
                className="card-body rounded bg-white p-3 position-relative"
                style={{
                  boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.12)",
                  zIndex: 9,
                }}
              >
                <img
                  src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h"
                  alt="#ImgNotFound"
                  className="w-100 rounded"
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div
                className={
                  "position-absolute d-flex align-items-end justify-content-end"
                }
                style={{ right: "-100px", zIndex: 1, bottom: "-80px" }}
              >
                <img src={AuthLeftImage} width="80%" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-7 detail_section order-md-1  pe-md-5 px-0">
            <h3 className="sub_heading_with_color pt-3">How we work</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="row pt-5 position-relative">
          <div className="col-md-6 col-xl-5 image_section">
            <div className="card border-0">
              <div
                className="card-body rounded bg-white p-3"
                style={{
                  boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.12)",
                  zIndex: 9,
                }}
              >
                <img
                  src="https://setmywed.com/blog/wp-content/uploads/2019/12/entry.jpg"
                  alt="#ImgNotFound"
                  className="w-100 rounded"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-7 detail_section">
            <h3 className="sub_heading_with_color pt-3">About Us</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam
              maiores iste repellendus ad, tenetur odit dignissimos sint quidem
              asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Commodi cupiditate voluptates ut
              iusto autem.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam
              maiores iste repellendus ad, tenetur odit dignissimos sint quidem
              asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Commodi cupiditate voluptates ut
              iusto autem.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam
              maiores iste repellendus ad, tenetur odit dignissimos sint quidem
              asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Commodi cupiditate voluptates ut
              iusto autem.
            </p>
          </div>
          <div
            className={
              "position-absolute d-flex align-items-end justify-content-end"
            }
            style={{ right: "60px", zIndex: 1, bottom: "-60px" }}
          >
            <img src={AbouUsFlowers} width="60%" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <ReserveTheDate
        calendarModalState={calendarModalState}
        setCalendarModalState={setCalendarModalState}
      />
    </>
  );
}

export default Home;

import { Link } from "react-router-dom";
import Logo from "../content/images/Logo.png";

function Footer() {
  return (
    <>
      <div className="" style={{ background: "#EFECCE" }}>
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div className="col-lg-9 pt-5 footer_options order-2">
              <div className="row">
                <div className="col-6 col-md-4 pt-3 pt-md-0 mx-auto d-flex flex-column align-items-center">
                  <h5 className="fw-bolder">Menus</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    About
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Services
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Contact
                  </Link>
                </div>
                <div className="col-6 col-md-4 pt-3 pt-md-0 mx-auto d-flex flex-column align-items-center">
                  <h5 className="fw-bold">Services</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Photoshot
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Fooding
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Makeup
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Devorator
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    Venu Finding
                  </Link>
                </div>
                <div className="col-md-4 pt-3 pt-md-0 d-flex align-items-center justify-content-start flex-column">
                  <h5 className="fw-bold">Contact Us</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    +123 1213 21345
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    className="my-1"
                  >
                    wedplaner1@gmail.com
                  </Link>
                </div>
              </div>
              <h6 className="text-center py-5 mt-3 m-0 fw-bold">
                2022 Helloparty.org All Rights Reserved
              </h6>
            </div>
            <div
              className="col-lg-3 text-center py-5 social_media_options order-1"
              style={{ background: "#f8f5f2" }}
            >
              <img src={Logo} alt="#ImgNotFound" style={{ width: "100px" }} />
              <h5 className="pt-4 pb-4 fw-bold">Social Media</h5>
              <div className="d-flex align-items-center justify-content-center flex-row gap-4">
                <div className="">
                  <Link
                    className="fa fa-twitter text-white bg-dark d-flex align-items-center justify-content-center"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                      borderRadius: 9999,
                      width: 35,
                      height: 35,
                    }}
                    to="/"
                  ></Link>
                </div>
                <div className="">
                  <Link
                    className="fa fa-facebook text-white bg-dark d-flex align-items-center justify-content-center"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                      borderRadius: 9999,
                      width: 35,
                      height: 35,
                    }}
                    to="/"
                  ></Link>
                </div>
                <div className="">
                  <Link
                    className="fa fa-instagram text-white bg-dark d-flex align-items-center justify-content-center"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                      borderRadius: 9999,
                      width: 35,
                      height: 35,
                    }}
                    to="/"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

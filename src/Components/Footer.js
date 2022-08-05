import { Link } from "react-router-dom";
import Logo from "../content/images/Logo.png";

function Footer() {
  return (
    <>
      <div className="" style={{ background: "#EFECCE" }}>
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-9 pt-5 px-5 footer_options order-lg-2">
              <div className="row">
                <div className="col-6 col-md-4 pt-3 pt-md-0">
                  <h5>Menus</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Services
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Testimonials
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </Link>
                  <br />
                </div>
                <div className="col-6 col-md-4 pt-3 pt-md-0">
                  <h5>Services</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Photoshot
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Fooding
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Makeup
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Devorator
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Venu Finding
                  </Link>
                  <br />
                </div>
                <div className="col-md-4 pt-3 pt-md-0">
                  <h5>Contact Us</h5>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    +123 1213 21345
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    wedplaner1@gmail.com
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center pt-5 social_media_options order-lg-1">
              <img src={Logo} alt="#ImgNotFound" style={{ width: "200px" }} />
              <h5 className="pt-4 pb-4">
                <b>Social Media</b>
              </h5>
              <div className="row">
                <div className="col-4">
                  <Link
                    className="fa fa-twitter"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "30px",
                    }}
                    to="/"
                  ></Link>
                </div>
                <div className="col-4">
                  <Link
                    className="fa fa-facebook"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "30px",
                    }}
                    to="/"
                  ></Link>
                </div>
                <div className="col-4">
                  <Link
                    className="fa fa-instagram"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "30px",
                    }}
                    to="/"
                  ></Link>
                </div>
              </div>
            </div>
          </div>

          <h6 className="text-center py-5">
            2022 Helloparty.org All Rights Reserved
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;

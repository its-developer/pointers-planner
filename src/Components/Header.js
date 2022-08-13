import { Link } from "react-router-dom";
import Logo from "../content/images/Logo.png";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [headerBoxShadow, setHeaderBoxShadow] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   window.addEventListener("scroll", () =>
    //     setHeaderBoxShadow(window.pageYOffset > 200)
    //   );
    // }
  }, []);

  return (
    <>
      <nav
        class="navbar navbar-expand-lg p-0"
        style={{
          boxShadow: `${
            headerBoxShadow ? "0px 4px 18px rgba(0, 0, 0, 0.2)" : ""
          }`,
          background: "#FFFFFF",
        }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand px-3" to="/">
            <img src={Logo} width={60} alt="#ImgNotFound" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-2 fw-bold text-muted">
                <Link
                  class="nav-link"
                  to="/"
                  style={currentRoute == "/" ? { color: "#B89562" } : null}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item px-2 fw-bold text-muted">
                <Link
                  class="nav-link"
                  to="/"
                  style={currentRoute == "/" ? { color: "#B89562" } : null}
                >
                  About
                </Link>
              </li>
              <li class="nav-item px-2 fw-bold text-muted">
                <Link class="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li class="nav-item px-2 fw-bold text-muted">
                <Link class="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item px-2 fw-bold text-muted">
                <Link
                  class="nav-link"
                  to="/"
                  style={currentRoute == "/" ? { color: "#B89562" } : null}
                >
                  Reserved the date
                </Link>
              </li>
              <li class="nav-item px-2 fw-bold text-muted">
                <Link
                  class="nav-link"
                  to="/"
                  style={currentRoute == "/" ? { color: "#B89562" } : null}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <i class="fa fa-search px-3" style={{ fontSize: "22px" }}></i>
          <div class="btn-group dropstart p-3">
            <i
              class="fa fa-user-circle-o"
              data-bs-toggle="dropdown"
              style={{ fontSize: "22px", cursor: "pointer" }}
            ></i>
            <ul class="dropdown-menu">
              <Link to="/my_profile" style={{ textDecoration: "none" }}>
                <li className="px-3 py-2 text-dark">My profile</li>
              </Link>
              <Link to="/my_profile/order" style={{ textDecoration: "none" }}>
                <li className="px-3 py-2 text-dark">Orders</li>
              </Link>
              <Link to="/my_profile/user" style={{ textDecoration: "none" }}>
                <li className="px-3 py-2 text-dark">Users</li>
              </Link>
              <Link to="/my_profile/emails" style={{ textDecoration: "none" }}>
                <li className="px-3 py-2 text-dark">Emails</li>
              </Link>
              <Link to="/my_profile/setting" style={{ textDecoration: "none" }}>
                <li className="px-3 py-2 text-dark">Setting</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav class="navbar navbar-expand-lg bg-light header_after_lg_scrn">
        <div class="container-fluid">
          <div className="row">
            <div className="col-6 col-md-5">
              <div className="row">
                <div className="col-4 col-sm-3">
                  <button
                    class="navbar-toggler mx-3 mt-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="col-4 col-sm-3" style={{ maxHeight: "70px" }}>
                  <Link class="navbar-brand p-3" to="/">
                    <img src={Logo} alt="#ImgNotFound" className="w-100" />
                  </Link>
                </div>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
                    <li class="nav-item px-2">
                      <Link class="nav-link" aria-current="page" to="/">
                        <b>Home</b>
                      </Link>
                    </li>
                    <li class="nav-item px-2">
                      <Link class="nav-link" to="/">
                        <b>About</b>
                      </Link>
                    </li>
                    <li class="nav-item px-2">
                      <Link class="nav-link" to="/gallery">
                        <b>Gallery</b>
                      </Link>
                    </li>
                    <li class="nav-item px-2">
                      <Link class="nav-link" to="/services">
                        <b>Services</b>
                      </Link>
                    </li>
                    <li class="nav-item px-2">
                      <Link class="nav-link" to="/">
                        <b>Reserved the date</b>
                      </Link>
                    </li>
                    <li class="nav-item px-2">
                      <Link class="nav-link" to="/">
                        <b>Contact</b>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-7" style={{ textAlign: "right" }}>
              <div>
                <i class="fa fa-search px-3" style={{ fontSize: "22px" }}></i>
                <div class="btn-group dropstart p-3">
                  <i
                    class="fa fa-user-circle-o"
                    data-bs-toggle="dropdown"
                    style={{ fontSize: "22px", cursor: "pointer" }}
                  ></i>
                  <ul class="dropdown-menu">
                    <Link to="/my_profile" style={{ textDecoration: "none" }}>
                      <li className="px-3 py-2 text-dark">My profile</li>
                    </Link>
                    <Link
                      to="/my_profile/order"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="px-3 py-2 text-dark">Orders</li>
                    </Link>
                    <Link
                      to="/my_profile/user"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="px-3 py-2 text-dark">Users</li>
                    </Link>
                    <Link
                      to="/my_profile/emails"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="px-3 py-2 text-dark">Emails</li>
                    </Link>
                    <Link
                      to="/my_profile/setting"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="px-3 py-2 text-dark">Setting</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Header;

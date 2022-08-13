import { Link } from "react-router-dom";
import { useEffect } from "react";

function MyProfile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="container-fluid mt-0 pt-0 profile_data_before_md_srcn bg-white mt-n2 position-relative"
        style={{ minHeight: "88vh" }}
      >
        <div className="row px-3">
          <div className="col-md-3 pt-4 col-lg-2 dashboard_left_side">
            <div style={{ position: "fixed" }}>
              <Link
                to="/my_profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 className="py-2 sub_heading text-dark  ff-roboto">
                  <i className="fa pe-2 fa-home"></i> Home
                </h5>
              </Link>
              <Link
                to="/my_profile/order"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 className="py-2 sub_heading text-dark  ff-roboto">
                  <i className="fa pe-2 fa-first-order"></i> Orders
                </h5>
              </Link>
              <Link
                to="/my_profile/user"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 className="py-2 sub_heading text-dark  ff-roboto">
                  <i className="fa pe-2 fa-user-circle-o"></i> Users
                </h5>
              </Link>
              <Link
                to="/my_profile/emails"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 className="py-2 sub_heading text-dark  ff-roboto">
                  <i className="fa pe-2 fa-envelope"></i> Emails
                </h5>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <h5 className="py-2 sub_heading text-dark  ff-roboto">
                  <i className="fa pe-2 fa-gear"></i> Setting
                </h5>
              </Link>
            </div>
          </div>
          <div
            className="col-md-9 col-lg-10 p-0 m-0 pt-4"
            style={{
              borderLeft: "1px solid rgba(0,0,0,0.2)",
              minHeight: "88vh",
              overflow: "hidden",
            }}
          >
            {props.page}
            <br />
            <br />
            <br />
            <br />
            <br />
            <h6
              className="text-center py-4 mt-5 m-0 fw-bold position-absolute bottom-0"
              style={{ backgroundColor: "#EFECCE", width: "85%" }}
            >
              2022 Helloparty.org All Rights Reserved
            </h6>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid pt-5 profile_data_after_md_srcn">
        {props.page}
      </div> */}
    </>
  );
}

export default MyProfile;

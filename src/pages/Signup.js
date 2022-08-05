import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "@mui/material";
import { Button } from "@material-ui/core";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="img_upper_left"></div>
      <div id="img_lower_right"></div>
      <div className="Signup_container pt-5">
        <div className="Signup_container_data">
          <div className="row d-flex align-items-center justify-content-center flex-column">
            <div className="col-lg-4 col-md-8 col-10">
              <div className="text-center">
                <h1 className="main_heading pb-3">Signup</h1>
              </div>
              <div className="row">
                <div className="col-6">
                  <Input
                    type="text"
                    className="p-1"
                    placeholder="First Name"
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      borderRadius: "0",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                    }}
                  />
                </div>
                <div className="col-6">
                  <Input
                    type="text"
                    className="p-1"
                    placeholder="First Name"
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      borderRadius: "0",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                    }}
                  />
                </div>
              </div>
              <Input
                type="email"
                className="p-1 mt-3"
                placeholder="Email"
                style={{
                  width: "100%",
                  fontSize: "18px",
                  borderRadius: "0",
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                }}
              />
              <Input
                type="password"
                className="p-1 mt-3"
                placeholder="password"
                style={{
                  width: "100%",
                  fontSize: "18px",
                  borderRadius: "0",
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                }}
              />
              <Input
                type="password"
                className="p-1 mt-3"
                placeholder="Create password"
                style={{
                  width: "100%",
                  fontSize: "18px",
                  borderRadius: "0",
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                }}
              />
              <Button
                type="submit"
                className="w-100 mt-3 py-2"
                variant="primary"
                style={{ background: "black", color: "white" }}
              >
                Signup
              </Button>
              <h5 className="text-center fw-normal pt-3">
                <span className="text-muted">Already Have an Account</span>{" "}
                <Link
                  to="/login"
                  className="text-dark fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "@mui/material";
import { Button } from "@material-ui/core";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-50">
        <div id="img_upper_left"></div>
      </div>
      <div id="img_lower_right"></div>
      <div className="login_container pt-5">
        <div className="login_container_data pt-5">
          <div className="row d-flex align-items-center justify-content-center flex-column">
            <div className="col-lg-4 col-md-8 col-10">
              <div className="text-center">
                <h1 className="main_heading pb-5">Login</h1>
              </div>
              <Input
                type="email"
                className="p-1"
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
                className="p-1 mt-2"
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
              <h6 className="pt-2">
                <Link
                  to="/"
                  className="text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password
                </Link>
              </h6>
              <Button
                type="submit"
                className="w-100 mt-3 py-2"
                variant="primary"
                style={{ background: "black", color: "white" }}
              >
                Login
              </Button>
              <h5 className="text-center pt-4 fw-normal">
                <span className="text-muted">Don't have an account</span>{" "}
                <Link
                  to="/signup"
                  className="text-dark fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  Signup
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

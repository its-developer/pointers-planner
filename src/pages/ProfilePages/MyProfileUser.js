import { Link } from "react-router-dom";

function MyProfileUser() {
  return (
    <>
      <h3 className="fw-bolder ms-3">
        <i className="fa fa-user"></i> Users
      </h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                alt="#ImgNotFound"
                width="30px"
                height="30px"
                style={{ borderRadius: "100%" }}
              />
              &emsp; John Doe
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-3">
                  <h6 className="fw-bold">Email :</h6>
                  <p>itxhamza@gmail.com</p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold">Message :</h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="col-3">
                  <Link
                    to="/my_profile/send_email"
                    type="button"
                    className="btn"
                    style={{
                      float: "right",
                      background: "#EFECCE",
                      fontSize: "18px",
                    }}
                  >
                    <b>Send Emails</b>
                  </Link>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        {/* Other Items */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button bg-muted collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                alt="#ImgNotFound"
                width="30px"
                height="30px"
                style={{ borderRadius: "100%" }}
              />
              &emsp; John Doe
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-3">
                  <h6 className="fw-bold">Email :</h6>
                  <p>itxhamza@gmail.com</p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold">Message :</h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="col-3">
                  <Link
                    to="/my_profile/send_email"
                    type="button"
                    className="btn"
                    style={{
                      float: "right",
                      background: "#EFECCE",
                      fontSize: "18px",
                    }}
                  >
                    <b>Send Emails</b>
                  </Link>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                alt="#ImgNotFound"
                width="30px"
                height="30px"
                style={{ borderRadius: "100%" }}
              />
              &emsp; John Doe
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-3">
                  <h6 className="fw-bold">Email :</h6>
                  <p>itxhamza@gmail.com</p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold">Message :</h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="col-3">
                  <Link
                    to="/my_profile/send_email"
                    type="button"
                    className="btn"
                    style={{
                      float: "right",
                      background: "#EFECCE",
                      fontSize: "18px",
                    }}
                  >
                    <b>Send Emails</b>
                  </Link>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfileUser;

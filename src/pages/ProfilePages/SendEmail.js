import { Link } from "react-router-dom";

function SendEmail() {
  return (
    <>
      <h3 className="fw-bolder ms-3">
        <i className="fa fa-user-circle-o"></i> Users/Email
      </h3>
      <div className="compose_email mt-5">
        <div className="bg-dark">
          <p className="text-light p-2">
            &ensp;<i className="fa fa-send"></i>&emsp; Send to
            johndoe123@gmail.com
          </p>
        </div>
        <br />
        <h6 className="mt-3 mx-3 border-bottom border-2 border-muted pb-1 fw-bold">
          From: <span className="fw-normal">johndoe123@gmail</span>
        </h6>
        <h5 className="mt-3 mx-3 border-bottom border-2 border-muted pb-1">
          <input
            type="text"
            placeholder="Subject"
            style={{
              width: "80%",
              border: "none",
              outline: "none",
            }}
          />
        </h5>

        <h5 className="mt-2 mx-3 border-bottom border-2 border-muted pb-1">
          <textarea
            rows="5"
            className="mt-3"
            placeholder="Your Email"
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              resize: "none",
            }}
          ></textarea>
        </h5>

        <button
          type="button"
          className="btn"
          style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}
        >
          <b>Send Emails</b>
        </button>
      </div>
    </>
  );
}

export default SendEmail;

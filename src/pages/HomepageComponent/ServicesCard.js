import { Link } from "react-router-dom";

function ServiceCard() {
  return (
    <>
      <div
        className="card p-3 my-4 mx-3"
        style={{
          boxShadow: " 0px 0px 25px rgba(0, 0, 0, 0.12)",
          border: "none",
        }}
      >
        <div
          className="card-body text-center rounded"
          style={{ border: "1px solid #FCBDFC" }}
        >
          <i
            className="fa fa-camera"
            style={{ fontSize: "50px", color: "#C876C9" }}
          ></i>
          <h5 style={{ color: "#B89562" }} className="pt-3 fw-bold">
            Photography/ Videography
          </h5>
          <p className="card-text text-muted small">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi ducimus perspiciatis assumenda doloremque cupiditate officiis
            non accusamus expedita iure.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;

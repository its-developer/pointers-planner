import { Link } from "react-router-dom";
import Charts from "./Chart";

function MyProfileHome() {
  return (
    <div className="px-4">
      <h3 className="fw-bolder ms-2">
        <i className="fa pe-2 fa-home"></i> Home
      </h3>

      <div className="container-fluid">
        <div className="row mb-4 mt-2">
          {[0, 1, 2].map((item) => {
            return (
              <div key={item} className="col-md-4 mt-3">
                <div className="d-flex align-items-center justify-content-center py-4 flex-row bg-white shadow rounded">
                  <h1 style={{ fontSize: 60 }}>
                    <i className="fa pe-2 fa-user"></i>
                  </h1>
                  <div className="d-flex flex-column">
                    <h3 className="fw-bold">$50,000</h3>
                    <p className="p-0 m-0 fw-bold">Revenue</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Charts />
      <Charts />
      <Charts />
    </div>
  );
}

export default MyProfileHome;

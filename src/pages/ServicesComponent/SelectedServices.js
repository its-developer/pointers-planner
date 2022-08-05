import { Link } from "react-router-dom";
import LuxuryWeddingImg from "../../content/images/LuxuryWeddingImg.jpg";

function SelectedServices() {
  return (
    <>
      <div className="service_div container-xl">
        <div className="pt-4 text-center">
          <h1 className="main_heading">Our Services</h1>
          <p className="text-muted fw-bold">
            You can select One or Multiple services with your Location.
          </p>
        </div>
        <div className="selected_services">
          <h3 className="sub_heading">Selected Services</h3>
          <div
            className="card"
            style={{ border: "2px solid #E2B9E3", borderRadius: "15px" }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 image_section order-md-2 d-flex align-items-center justify-content-center justify-content-md-end">
                  <img
                    src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h"
                    alt="#ImgNotFound"
                    style={{
                      maxHeight: 250,
                      maxWidth: 250,
                      borderRadius: "15px",
                    }}
                  />
                </div>
                <div className="col-md-8 detail_section order-md-1">
                  <img
                    src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png"
                    alt="#ImgNotFound"
                    width="50px"
                    height="50px"
                    className="my-3 my-lg-0"
                  />
                  <h3 className="sub_heading_with_color pt-3">How we work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi cupiditate voluptates ut iusto autem, enim dolore
                    vitae laboriosam maiores iste repellendus ad, tenetur odit
                    dignissimos sint quidem asperiores! Dolor, excepturi. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                    cupiditate voluptates ut iusto autem.
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-4 image_section order-md-2 d-flex align-items-center justify-content-center justify-content-md-end">
                  <img
                    src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h"
                    alt="#ImgNotFound"
                    style={{
                      maxHeight: 250,
                      maxWidth: 250,
                      borderRadius: "15px",
                    }}
                  />
                </div>
                <div className="col-md-8 detail_section order-md-1">
                  <img
                    src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png"
                    alt="#ImgNotFound"
                    width="50px"
                    height="50px"
                    className="my-3 my-lg-0"
                  />
                  <h3 className="sub_heading_with_color pt-3">How we work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi cupiditate voluptates ut iusto autem, enim dolore
                    vitae laboriosam maiores iste repellendus ad, tenetur odit
                    dignissimos sint quidem asperiores! Dolor, excepturi. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                    cupiditate voluptates ut iusto autem.
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <p className="m-0 p-0 fw-bold">Multiple days event</p>
                </div>
                <div className="col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <p className="m-0 p-0 fw-bold">
                    Start Date: <span className="fw-normal">20, mar 200</span>
                  </p>
                </div>
                <div className="col-md-4 col-12 d-flex align-items-center justify-content-center">
                  <p className="m-0 p-0 fw-bold">
                    End Date: <span className="fw-normal">20, mar 200</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn mt-3 py-2 px-4"
            style={{ float: "right", background: "#EFECCE", fontSize: "20px" }}
            data-bs-toggle="modal"
            data-bs-target="#OpenModalForPayment"
          >
            <b>Procees to payment</b>
          </button>
        </div>
        <br />
        <br />
        <h1 className="main_heading">Contact us</h1>
        <div className="row">
          <div className="col-lg-6 pt-3">
            <iframe
              src="https://www.google.com/maps/embed?"
              width="100%"
              frameborder="0"
              style={{ border: "0", maxHeight: "300px", height: "300px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="col-lg-6 pt-3">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-100 form-control"
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-100 form-control"
                />
              </div>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-100 form-control mb-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-100 form-control mb-3"
            />
            <textarea
              rows="5"
              className="form-control"
              style={{ width: "100%" }}
            ></textarea>
            <button
              type="button"
              className="btn mt-3 py-2 px-4"
              style={{
                float: "right",
                background: "#EFECCE",
                fontSize: "18px",
              }}
            >
              <b>Send</b>
            </button>
          </div>
        </div>

        <div className="gallery_div container-xl px-3">
          <h3 className="sub_heading">Gallery</h3>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding1">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding2">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding3">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding4">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-md-4 col-lg-3 p-2 luxury_wedding5">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-md-4 col-lg-3 p-2 luxury_wedding6">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-md-4 col-lg-3 p-2 luxury_wedding7">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
            <div className="col-md-4 col-lg-3 p-2 luxury_wedding8">
              <img
                src={LuxuryWeddingImg}
                alt="#ImgNotFound"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="OpenModalForPayment"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="OpenModalForPaymentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className="modal-header"></div> */}
            <div className="modal-body px-3 py-4">
              <button
                type="button"
                className="btn-close position-absolute end-0 top-0 p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h5 className="sub_heading_color fw-bold">Payment Details</h5>
              <p>You can make your payment with card</p>
              <br />
              <div className="row">
                <div className="col-6">
                  <h5 className="fw-bold">Total Amount</h5>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <h5 className="fw-bold">$1000</h5>
                </div>
              </div>
              <input
                type="text"
                placeholder="Card holder name rounded"
                className="w-100 form-control mt-2 rounded"
                style={{
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                  borderRadius: "0",
                }}
              />
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-100 form-control mt-2 rounded"
                    style={{
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderRadius: "0",
                    }}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-100 form-control mt-2 rounded"
                    style={{
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderRadius: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark w-100"
                data-bs-toggle="modal"
                data-bs-target="#OpenModalForPaymentSuccess"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="OpenModalForPaymentSuccess"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="OpenModalForPaymentSuccessLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body px-3 py-4 text-center">
              <button
                type="button"
                className="btn-close position-absolute end-0 top-0 p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h5 className="sub_heading_color">Congrulations</h5>
              <p>
                Your order has been confirmed. we will contact you in a while.
              </p>
              <h5>Order details</h5>
              <p>Multiple days event</p>
              <p>20,07,2022 to 25,07,2022</p>
              <h5>$1000</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark w-100"
                data-bs-dismiss="modal"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}

export default SelectedServices;

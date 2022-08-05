import React from "react";
import ReserveDateBackground from "../content/images/reserve_date_background.png";
import CalendarImage from "../content/images/calendar_image.png";

const ReserveTheDate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ReserveDateBackground})`,
        backgroundSize: "cover",
        minHeight: 356,
      }}
      className="d-flex align-items-center justify-content-center mt-5 pt-5"
    >
      <div className="date_intro_and_calendar container-xl p-5 mt-5 ">
        <div className="row">
          <div className="col-md-6 col-xl-5 image_section order-md-2">
            <img
              src={CalendarImage}
              alt="#ImgNotFound"
              className="w-100"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-6 col-xl-7 detail_section order-md-1">
            <h3 className="sub_heading_with_color pt-3 pt-md-0">
              Reserves the date
            </h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam
              maiores iste repellendus ad, tenetur odit dignissimos sint quidem
              asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Commodi cupiditate voluptates ut
              iusto autem.
            </p>
            <button
              type="button"
              className="btn btn-dark py-2 px-3"
              style={{ float: "right" }}
            >
              Reserves the date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTheDate;

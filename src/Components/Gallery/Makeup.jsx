import React from "react";
import MakeupImg from "../../content/images/MakeupImg.jpg";
import MakeupImg2 from "../../content/images/MakeupImg2.png";
import MakeupImg3 from "../../content/images/MakeupImg3.png";

const Makeup = () => {
  return (
    <div className="makeup_div container-xl px-3">
      <h3 className="sub_heading">Makeup</h3>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 p-2 makeup1">
          <img
            src={MakeupImg}
            alt="#ImgNotFound"
            style={{ height: 250, width: "100%" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-2 makeup2">
          <img
            src={MakeupImg2}
            alt="#ImgNotFound"
            style={{ height: 250, width: "100%" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-2 makeup3">
          <img
            src={MakeupImg3}
            alt="#ImgNotFound"
            style={{ height: 250, width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Makeup;

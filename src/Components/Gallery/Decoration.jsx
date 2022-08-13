import React from "react";
// Decoration Images
import DecorationImg from "../../content/images/decoration.png";
import DecorationImg2 from "../../content/images/decoration2.png";
import DecorationImg3 from "../../content/images/decoration3.png";

const Decoration = () => {
  return (
    <div className="decoration_div container-xl px-3">
      <h3 className="sub_heading">Decoration</h3>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 p-2 decoration1">
          <img src={DecorationImg} alt="#ImgNotFound" className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-2 decoration2">
          <img src={DecorationImg2} alt="#ImgNotFound" className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-2 decoration3">
          <img src={DecorationImg3} alt="#ImgNotFound" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Decoration;

import LuxuryWeddingImg from "../content/images/LuxuryWeddingImg.jpg";
import MakeupImg from "../content/images/MakeupImg.jpg";
import DecorationImg from "../content/images/DecorationImg.jpg";
import { useEffect } from "react";
import GalleryImageSection from "./GalleryImageSection/GalleryImageSection";
import ReserveTheDate from "../Components/ReserveTheDate";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-4 text-center">
        <h1 className="main_heading">Gallery</h1>
        <p className="text-muted fw-bold">
          Checkout our luxury wedding photography, Videography, Makeup & c.
          Declaration
        </p>
      </div>
      <div className="photography_div container-xl px-3">
        <h3 className="sub_heading">Photography</h3>
        <GalleryImageSection />
        {/* <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding1">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding2">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding3">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding4">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding5">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding6">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding7">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding8">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                </div> */}
      </div>

      <div className="videography_div container-xl px-3">
        <h3 className="sub_heading">Videography</h3>
        <div
          id="CarouselHomepageSlider"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#CarouselHomepageSlider"
              data-bs-slide-to="0"
              className="carouselIndicator active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#CarouselHomepageSlider"
              className="carouselIndicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#CarouselHomepageSlider"
              className="carouselIndicator"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ maxHeight: "750px", minHeight: "100%" }}
            >
              <div className="row">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="col-sm-6 col-md-4 col-lg-3 p-2 videography1"
                  >
                    <iframe
                      width="100%"
                      height="400px"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ maxHeight: "750px", minHeight: "100%" }}
            >
              <div className="row">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="col-sm-6 col-md-4 col-lg-3 p-2 videography1"
                  >
                    <iframe
                      width="100%"
                      height="400px"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ maxHeight: "750px", minHeight: "100%" }}
            >
              <div className="row">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="col-sm-6 col-md-4 col-lg-3 p-2 videography1"
                  >
                    <iframe
                      width="100%"
                      height="400px"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="makeup_div container-xl px-3">
        <h3 className="sub_heading">Makeup</h3>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 p-2 makeup1">
            <img src={MakeupImg} alt="#ImgNotFound" className="w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 makeup2">
            <img src={MakeupImg} alt="#ImgNotFound" className="w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 makeup3">
            <img src={MakeupImg} alt="#ImgNotFound" className="w-100" />
          </div>
        </div>
      </div>

      <div className="decoration_div container-xl px-3">
        <h3 className="sub_heading">Decoration</h3>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 p-2 decoration1">
            <img src={DecorationImg} alt="#ImgNotFound" className="w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 decoration2">
            <img src={DecorationImg} alt="#ImgNotFound" className="w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-2 decoration3">
            <img src={DecorationImg} alt="#ImgNotFound" className="w-100" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <ReserveTheDate />
    </>
  );
}

export default Gallery;

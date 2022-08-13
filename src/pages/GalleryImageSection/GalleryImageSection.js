import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import LuxuryWeddingImg from "../../content/images/LuxuryWeddingImg.jpg";
import WeedingGalleryImg from "../../content/images/weeding-gallery.png";
import WeedingGallery2Img from "../../content/images/weeding-gallery2.png";

function GalleryImageSection() {
  const photos = [
    {
      src: `${WeedingGalleryImg}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGallery2Img}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGalleryImg}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGallery2Img}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGalleryImg}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGallery2Img}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGalleryImg}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
    {
      src: `${WeedingGalleryImg}`,
      width: 1,
      style: {
        padding: "8px 16px 8px 0px",
        cursor: "pointer",
      },
      height: 1.3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryImageSection;

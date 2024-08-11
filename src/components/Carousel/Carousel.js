"use client";
import React from "react";
import Image from "next/image";
import "../../styles/Carousel.css";

export default function Carousel() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 820px) {
          .carousel-control-prev {
            left: 0px !important;
          }

          .carousel-control-next {
            right: 0px !important;
          }
        }
      `}</style>
      <div
        id="carouselExampleIndicators"
        className="carousel slide px-3 px-md-3 px-lg-5 mt-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/fix foto dan jutnalistik (1).png"
              className=""
              alt="Carousel Image - Foto dan Jurnalistik"
              style={{ objectFit: "cover" }}
              loading="lazy"
              fill
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/learning-with-bestie-min.png"
              className=""
              alt="Carousel Image - Learning With Bestie"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{ left: "110px" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{ right: "110px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

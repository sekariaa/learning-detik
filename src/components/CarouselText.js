import React from "react";
import Image from "next/image";
import "../styles/CarouselText.css";

export default function CarouselText() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active bg-white p-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Image
                  src="/fix foto dan jutnalistik (1).png"
                  alt="Carousel Image - Foto dan Jurnalistik"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="col-6">
                <h3 className="fw-bold">
                  Spreadsheet Introduction for Professional User
                </h3>
                <p>
                  Kursus &quot;Spreadsheet Introduction for Professional
                  User&quot; ini dirancang untuk memberikan pemahaman tentang
                  penggunaan dasar Google Spreadsheet bagi pengguna spreadsheet
                  tingkat pemula hingga menengah yang ingin meningkatkan
                  keterampilan mereka untuk pe ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg-white p-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Image
                  src="/seo-writing.jpg"
                  alt="Carousel Image - SEO Writing"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="col-6">
                <h3 className="fw-bold">SEO Writing</h3>
                <p>
                  Kursus &quot;SEO Writing&quot; dalam Digital Journalism
                  Bootcamp ini akan mengenalkan kamu dengan organic traffic
                  sebagai sumber traffic, keuntungan SEO bagi jurnalis, dan tips
                  menulis artikel yang SEO friendly.Kursus ini dibagi menjadi
                  dua bagian:1. Organic T ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg-white p-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Image
                  src="/potret-jutnalistik.jpg"
                  alt="Carousel Image - Memotret Jurnalistik dengan Telepon Genggam"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="col-6">
                <h3 className="fw-bold">
                  Memotret Jurnalistik dengan Telepon Genggam
                </h3>
                <p>
                  Kursus &quot;Memotret Jurnalistik dengan Telepon Genggam&quot;
                  dalam Digital Journalism Bootcamp memberikan pemaham mengenai
                  cara praktikal menggunakan telepon genggam sebagai alat
                  memotret untuk jurnalis. Di kursus ini, kalian juga akan
                  belajar tujuh hal dasa ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg-white p-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Image
                  src="/foto-dan-jutnalistik.jpg"
                  alt="Carousel Image - Foto dan Jurnalistik"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="col-6">
                <h3 className="fw-bold">Foto dan Jurnalistik di Era Digital</h3>
                <p>
                  Kursus &quot;Foto dan Jurnalistik di Era Digital&quot; dalam
                  Digital Journalism Bootcamp memberikan pemahaman mengenai
                  perubahan praktik dan metode jurnalistik akibat perkembangan
                  media sosial. Selain itu, kursus ini juga mengajarkan kamu
                  dalam mengaplikas ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ left: "-15px" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ right: "-15px" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

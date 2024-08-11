"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/CarouselKategori.css";
import { Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="swiperKategori"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <h2 className="fw-bold">Business</h2>
          <h3>Business related courses</h3>
          <Image
            src="/business.png"
            alt="Carousel Image Kategori"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="fw-bold">Content</h2>
          <h3>Content related courses</h3>
          <Image
            src="/content.png"
            alt="Carousel Image Kategori"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="fw-bold">Corporate</h2>
          <h3>Corporate related courses</h3>
          <Image
            src="/corporate.png"
            alt="Carousel Image Kategori"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="fw-bold">Product</h2>
          <h3>Product related courses</h3>
          <Image
            src="/product.png"
            alt="Carousel Image Kategori"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="fw-bold">Self Development</h2>
          <h3>Self development related courses</h3>
          <Image
            src="/self-development.png"
            alt="Carousel Image Kategori"
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

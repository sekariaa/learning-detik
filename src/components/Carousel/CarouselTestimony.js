"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/CarouselTestimony.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function CaraouselTestimony() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="swiperTestimony"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="user-container">
          <Image
            src="/testimonial-quote.svg"
            alt="quote"
            width={25}
            height={25}
          />
          <p className="user-testimony">
            Sebagai seorang jurnalis, detikLearning telah menjadi aset berharga
            dalam pengembangan keterampilan saya. Materi pembelajaran mereka
            sangat relevan dan memberikan wawasan yang berharga dalam bidang
            jurnalistik. Ini adalah tempat yang luar biasa untuk meningkatkan
            kemampuan saya dalam menyampaikan informasi dengan lebih efektif
          </p>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
          <p className="user-profile">
            Adib Dwi Kusuma | UI/UX Designer | CTARSA Foundation
          </p>
        </SwiperSlide>
        <SwiperSlide className="user-container">
          <Image
            src="/testimonial-quote.svg"
            alt="quote"
            width={25}
            height={25}
          />
          <p className="user-testimony">
            detikLearning adalah teman terbaik dalam perjalanan pembelajaran
            saya. Saya telah menjelajahi berbagai kursus yang sangat informatif
            dan berharga. Melalui platform ini, saya dapat terus meningkatkan
            pengetahuan saya di berbagai bidang, dan hasil belajar saya bahkan
            diakui dengan sertifikat yang sangat bermanfaat. Terima kasih
            detikLearning karena telah membuat pembelajaran begitu menyenangkan
            dan bermanfaat!
          </p>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
          <p className="user-profile">
            Ridha Fatima Az-Zahra | Employer Branding | detikcom
          </p>
        </SwiperSlide>
        <SwiperSlide className="user-container">
          <Image
            src="/testimonial-quote.svg"
            alt="quote"
            width={25}
            height={25}
          />
          <p className="user-testimony">
            detikLearning benar-benar mengubah cara saya belajar secara online.
            Materi pembelajaran yang mereka tawarkan sangat bermanfaat dan
            relevan dengan pekerjaan saya. Saya sangat menghargai kebebasan
            untuk menjelajahi berbagai kelas tanpa batasan, dan mendapatkan
            sertifikat setelah menyelesaikan kursus memberikan nilai tambah
            untuk karir saya. Terima kasih detikLearning, saya merasa lebih
            percaya diri dan siap menghadapi tantangan baru di tempat kerja
          </p>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
          <p className="user-profile">
            Fatimah Az-Zahra | Learning & Organization Development | detikcom
          </p>
        </SwiperSlide>
        <SwiperSlide className="user-container">
          <Image
            src="/testimonial-quote.svg"
            alt="quote"
            width={25}
            height={25}
          />
          <p className="user-testimony">
            detikLearning adalah platform edukatif yang visioner, yang mewakili
            komitmen manajemen dalam mengembangkan potensi karyawan. Sebagai
            seorang pegawai magang, saya sangat menghargai kelas-kelas yang
            ditawarkan di sini karena sangat membantu saya dalam meningkatkan
            kemampuan dan pengetahuan saya
          </p>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
          <p className="user-profile">Pryananda | Video Editor | detikcom</p>
        </SwiperSlide>
        <SwiperSlide className="user-container">
          <Image
            src="/testimonial-quote.svg"
            alt="quote"
            width={25}
            height={25}
          />
          <p className="user-testimony">
            detikLearning benar-benar mengubah cara saya belajar secara online.
            Materi pembelajaran yang mereka tawarkan sangat bermanfaat dan
            relevan dengan pekerjaan saya. Saya sangat menghargai kebebasan
            untuk menjelajahi berbagai kelas tanpa batasan, dan mendapatkan
            sertifikat setelah menyelesaikan kursus memberikan nilai tambah
            untuk karir saya. Terima kasih detikLearning, saya merasa lebih
            percaya diri dan siap menghadapi tantangan baru di tempat kerja
          </p>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
          <p className="user-profile">
            Kadek Ari | Front-End Desginer | detikcom
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

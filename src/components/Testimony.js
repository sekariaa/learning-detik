import React from "react";
import Image from "next/image";

export default function Testimony() {
  return (
    <div className="px-5">
      <div className="container mt-4 bg-white rounded p-2">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src="/testimonial-quote.svg"
              alt="quote"
              className="image-quote d-block d-sm-none"
            />
            <Image src="/ari.png" width={150} height={150} />
          </div>
          <div className="col col-lg-9 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-2">
            <h1 className="text-primary text-center text-lg-start">
              Kadek Ari | Front-End Designer | detikcom
            </h1>
            <p>
              detikLearning benar-benar mengubah cara saya belajar secara
              online. Materi pembelajaran yang mereka tawarkan sangat bermanfaat
              dan relevan dengan pekerjaan saya. Saya sangat menghargai
              kebebasan untuk menjelajahi berbagai kelas tanpa batasan, dan
              mendapatkan sertifikat setelah menyelesaikan kursus memberikan
              nilai tambah untuk karir saya. Terima kasih detikLearning, saya
              merasa lebih percaya diri dan siap menghadapi tantangan baru di
              tempat kerja.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4 bg-white rounded p-2">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src="/testimonial-quote.svg"
              alt="quote"
              className="image-quote d-block d-sm-none"
            />
            <Image src="/nanda.png" width={150} height={150} />
          </div>
          <div className="col col-lg-9 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-2">
            <h1 className="text-primary text-center text-lg-start">
              Pryananda | Video Editor | detikcom
            </h1>
            <p>
              detikLearning adalah platform edukatif yang visioner, yang
              mewakili komitmen manajemen dalam mengembangkan potensi karyawan.
              Sebagai seorang pegawai magang, saya sangat menghargai kelas-kelas
              yang ditawarkan di sini karena sangat membantu saya dalam
              meningkatkan kemampuan dan pengetahuan saya.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4 bg-white rounded p-2">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src="/testimonial-quote.svg"
              alt="quote"
              className="image-quote d-block d-sm-none"
            />
            <Image src="/fatimah.png" width={150} height={150} />
          </div>
          <div className="col col-lg-9 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-2">
            <h1 className="text-primary text-center text-lg-start">
              Fatimah Az-Zahra | Learning & Organization Development | detikcom
            </h1>
            <p>
              detikLearning benar-benar mengubah cara saya belajar secara
              online. Materi pembelajaran yang mereka tawarkan sangat bermanfaat
              dan relevan dengan pekerjaan saya. Saya sangat menghargai
              kebebasan untuk menjelajahi berbagai kelas tanpa batasan, dan
              mendapatkan sertifikat setelah menyelesaikan kursus memberikan
              nilai tambah untuk karir saya. Terima kasih detikLearning, saya
              merasa lebih percaya diri dan siap menghadapi tantangan baru di
              tempat kerja
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4 bg-white rounded p-2">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src="/testimonial-quote.svg"
              alt="quote"
              className="image-quote d-block d-sm-none"
            />
            <Image src="/zahra.png" width={150} height={150} />
          </div>
          <div className="col col-lg-9 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-2">
            <h1 className="text-primary text-center text-lg-start">
              Ridha Fatima Az-Zahra | Employer Branding | detikcom
            </h1>
            <p>
              detikLearning adalah teman terbaik dalam perjalanan pembelajaran
              saya. Saya telah menjelajahi berbagai kursus yang sangat
              informatif dan berharga. Melalui platform ini, saya dapat terus
              meningkatkan pengetahuan saya di berbagai bidang, dan hasil
              belajar saya bahkan diakui dengan sertifikat yang sangat
              bermanfaat. Terima kasih detikLearning karena telah membuat
              pembelajaran begitu menyenangkan dan bermanfaat!
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4 bg-white rounded p-2">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src="/testimonial-quote.svg"
              alt="quote"
              className="image-quote d-block d-sm-none"
            />
            <Image src="/ngab-adib.png" width={150} height={150} />
          </div>
          <div className="col col-lg-9 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start pt-2">
            <h1 className="text-primary text-center text-lg-start">
              Adib Dwi Kusuma | UI/UX Designer | CTARSA Foundation
            </h1>
            <p>
              Sebagai seorang jurnalis, detikLearning telah menjadi aset
              berharga dalam pengembangan keterampilan saya. Materi pembelajaran
              mereka sangat relevan dan memberikan wawasan yang berharga dalam
              bidang jurnalistik. Ini adalah tempat yang luar biasa untuk
              meningkatkan kemampuan saya dalam menyampaikan informasi dengan
              lebih efektif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

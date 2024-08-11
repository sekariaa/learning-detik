import Carousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar";
import CarouselText from "@/components/Carousel/CarouselText";
import CarouselKategori from "@/components/Carousel/CarouselKategori";
import CarouselTestimony from "@/components/Carousel/CarouselTestimony";
import Statistic from "@/components/Statistic";
import Video from "@/components/Video";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="text-center mb-5">
        <Carousel></Carousel>
        <div className="px-1 px-md-3 px-lg-5">
          <h1 className="text-primary fw-bold mt-2">
            Upgrade Dirimu, Upgrade karirmu! 🚀
          </h1>
          <h4>Belajar bersama detikcom kapan pun dan dimana pun!</h4>
          <button type="button" className="btn btn-secondary">
            Mulai Belajar Sekarang!
          </button>
        </div>
      </main>
      <article className="container justify-center mt-2 mb-5">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center">
            <h1 className="text-primary fw-bold">Kelas Terbaru</h1>
            <h4>
              Temukan ilmu baru dengan berbagai judul kelas terbaru di
              detikLearning!
            </h4>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn btn-secondary">
                Lihat Semua
              </button>
            </div>
          </div>
          <div className="col-lg-9 d-flex flex-column justify-content-center">
            <CarouselText></CarouselText>
          </div>
        </div>
      </article>
      <article className="d-flex flex-column justify-content-center px-1 px-md-3 px-lg-5 mb-5">
        <div className="mb-2 text-center">
          <h1 className="text-primary fw-bold">Berbagai Macam Kategori</h1>
          <h4>Eksplor berbagai kelas inspiratifdi setiap kategori</h4>
        </div>
        <CarouselKategori></CarouselKategori>
      </article>
      <article className="custom-bg p-4 px-1 px-md-3 px-lg-5 mb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex flex-column justify-content-center">
              <h1 className="text-white">Apa Kata Mereka?</h1>
              <h4 className="text-white">
                Mari lihat ulasan dan pendapat #anakdetik tentang pembelajaran
                di detikLearning
              </h4>
              <div className="d-flex justify-content-start mt-3">
                <Link href="/testimony" className="btn btn-light">
                  Baca Semua
                </Link>
              </div>
            </div>
            <div className="col-lg-9 d-flex flex-column justify-content-center">
              <CarouselTestimony></CarouselTestimony>
            </div>
          </div>
        </div>
      </article>
      <article className="container justify-center mt-2 mb-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 className="text-primary fw-bold">Cek Kredensial 🕵️</h1>
            <h4>Verifikasi nomor sertifikat kamu di sini!</h4>
          </div>
          <div className="col-lg-6 d-flex flex-row justify-content-center align-items-center gap-3">
            <div>
              <button
                className="btn btn-outline-primary custom-btn"
                type="button"
              >
                Lihat Caranya
              </button>
            </div>
            <div>
              <button className="btn btn-primary custom-btn" type="button">
                Coba Verifikasi
              </button>
            </div>
          </div>
        </div>
      </article>
      <Statistic></Statistic>
      <Video></Video>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}

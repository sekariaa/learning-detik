import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";

export default function page() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mb-5">
        <div className="text-center">
          <h1 className="text-primary mt-5 fw-bold">Apa Kata Mereka? 💼</h1>
          <h4>
            Mari lihat ulasan dan pendapat #anakdetik tentang pembelajaran di
            detikLearning!
          </h4>
        </div>
        <Testimony></Testimony>
      </main>
      <Footer></Footer>
    </>
  );
}

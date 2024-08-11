import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start d-flex flex-column ">
      <div className="bg-white p-5">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column align-items-lg-start align-items-center gap-3 py-2">
              <Image src="/logo.png" width={240} height={30} alt="logo detik" />
              <div className="d-flex flex-row gap-2">
                <Image
                  src="/sosmed/facebook.png"
                  width={40}
                  height={40}
                  alt="sosmed"
                />
                <Image
                  src="/sosmed/twitter.png"
                  width={40}
                  height={40}
                  alt="sosmed"
                />
                <Image
                  src="/sosmed/instagram.png"
                  width={40}
                  height={40}
                  alt="sosmed"
                />
                <Image
                  src="/sosmed/linkedin.png"
                  width={40}
                  height={40}
                  alt="sosmed"
                />
                <Image
                  src="/sosmed/youtube.png"
                  width={40}
                  height={40}
                  alt="sosmed"
                />
              </div>
            </div>
            <div className="col d-flex flex-row gap-lg-5 gap-2 justify-content-end">
              <a href="#" className="link-hover-underline text-primary">
                All Courses
              </a>
              <a href="#" className="link-hover-underline text-primary">
                My Courses
              </a>
              <a href="#" className="link-hover-underline text-primary">
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 text-primary"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2024 detikcom Learning. All rights reserved.
      </div>
    </footer>
  );
}

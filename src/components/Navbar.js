"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }

        if (window.scrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);
  return (
    <nav
      className={`navbar navbar-expand-lg shadow-lg bg-white py-2 px-1 px-md-3 px-lg-5 fixed-top ${
        scrollDirection === "down" ? "d-none" : "d-flex"
      } ${isAtTop ? "bg-opacity-100" : "bg-opacity-75"}  d-flex`}
    >
      <button
        className="navbar-toggler my-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand px-1" href="/">
        <Image src="/logo.png" alt="Bootstrap" width={120} height={20} />
      </a>
      {/* Posisi 1 */}
      <div className="d-flex d-lg-none flex-row gap-1 ms-auto">
        <button className="btn btn-outline-primary" type="button">
          Register
        </button>
        <button className="btn btn-primary" type="button">
          Login
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex">
          <div className="input-group input-group-focus">
            <span className="input-group-text border-end-0 rounded-pill rounded-end">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="form-control border-start-0 rounded-pill rounded-start border-none"
              type="search"
              placeholder="Cari Course"
              aria-label="Search"
            />
          </div>
        </form>
        <ul className="navbar-nav d-flex flex-grow-1 flex-lg-row flex-lg-grow-0 ms-auto my-3 my-lg-0 mx-1">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="">
              All Course
            </a>
          </li>
        </ul>
      </div>
      {/* Posisi 2 */}
      <div className="d-none d-lg-flex flex-row gap-1 ms-auto">
        <button className="btn btn-outline-primary" type="button">
          Register
        </button>
        <button className="btn btn-primary" type="button">
          Login
        </button>
      </div>
    </nav>
  );
}

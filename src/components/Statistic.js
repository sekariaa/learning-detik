import React from "react";

export default function Statistic() {
  return (
    <div className="d-flex flex-column bg-white p-5 mx-3 mx-lg-5 mb-5 rounded">
      <h1 className="text-primary fw-bold mb-4 text-center">
        Only for Detikcom
      </h1>
      <div className="d-flex flex-column flex-lg-row justify-content-lg-between gap-4">
        <div className="d-flex gap-1 flex-row justify-content-center align-items-center">
          <h2 className="text-primary fw-bold display-4">1000++</h2>
          <small>
            Employees <br></br>Learners
          </small>
        </div>
        <div className="d-flex gap-1 flex-row justify-content-center align-items-center">
          <h2 className="text-primary fw-bold display-4">40+</h2>
          <small>
            Amazing <br></br>classes
          </small>
        </div>
        <div className="d-flex gap-1 flex-row justify-content-center align-items-center">
          <h2 className="text-primary fw-bold display-4">160+</h2>
          <small>
            Amazing <br></br>videos
          </small>
        </div>
      </div>
    </div>
  );
}

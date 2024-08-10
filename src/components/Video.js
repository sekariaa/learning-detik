import React from "react";

export default function Video() {
  return (
    <div className="mb-5 bg-white p-5">
      <div className="container">
        <div className="row gap-3 d-flex flex-column flex-lg-row justify-content-center">
          <div className="col">
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe src="https://www.youtube.com/embed/ZWydMRFGKU4?si=btDjWOl8Q4wsUYrc"></iframe>
            </div>
          </div>
          <div className="col">
            <h1 className="fw-bold text-primary">
              Get To Know: detikLearning💡
            </h1>
            <p>
              detikLearning adalah platform Learning Management System (LMS)
              yang disediakan oleh detikcom sebagai sarana untuk pembelajaran
              dan pengembangan diri #anakdetik, karyawan detikcom. Platform ini
              memungkinkan karyawan untuk mengakses beragam video pembelajaran
              dari instruktur yang berpengalaman di bidangnya, dengan
              ketersediaan akses di mana saja dan kapan saja. Melalui
              detikLearning, detikcom memberikan fasilitas yang memungkinkan
              karyawan menjalani proses pembelajaran yang fleksibel, mendalam,
              dan sesuai dengan kebutuhan #anakdetik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

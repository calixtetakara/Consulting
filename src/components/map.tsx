"use client";

import React from "react";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.5716185102706!2d1.1919578!3d9.5458952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102b8b0073b7e1ad%3A0x79524933fd9725!2sCabinet%202SP%20Consulting%20(Statistiques%2C%20SIG%20et%20Planification)!5e0!3m2!1sfr!2stg!4v1773416870070!5m2!1sfr!2stg";

const MapSection: React.FC = () => {
  return (
    <section id="localisation" className="w-full h-[400px] p-0 m-0">
      <iframe
        src={MAP_URL}
        title="Cabinet 2SP Consulting — Kara, Togo"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default MapSection;
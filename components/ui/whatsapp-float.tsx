"use client";
import React from "react";

// Color naranja principal (ajustable si tienes un valor exacto)
const ORANGE = "#FF8000";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51906684284"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 perspective"
    >
      <span
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg whatsapp-coin"
        style={{
          background: ORANGE,
          color: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          fontSize: 0,
        }}
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 32 32"
          fill="white"
          style={{ display: "block" }}
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.653.87 5.1 2.35 7.118L4 29l7.147-2.28A12.927 12.927 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.1 0-4.147-.62-5.87-1.787l-.42-.27-4.25 1.36 1.38-4.14-.27-.44C6.7 18.08 6 16.573 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.26-7.447c-.293-.146-1.73-.852-1.997-.95-.267-.1-.46-.146-.653.147-.193.293-.747.95-.915 1.146-.167.193-.34.22-.633.073-.293-.146-1.237-.456-2.36-1.453-.872-.779-1.46-1.74-1.633-2.033-.167-.293-.018-.45.127-.596.13-.13.293-.34.44-.513.146-.173.193-.293.293-.487.1-.193.05-.366-.025-.513-.073-.146-.653-1.58-.894-2.167-.236-.567-.476-.49-.653-.5-.167-.007-.366-.009-.56-.009-.193 0-.507.073-.773.366-.267.293-1.017.996-1.017 2.427 0 1.43 1.04 2.81 1.185 3.007.146.193 2.05 3.13 5.07 4.267.71.243 1.262.39 1.694.5.712.18 1.36.155 1.872.094.571-.068 1.73-.707 1.977-1.39.246-.684.246-1.27.172-1.39-.073-.12-.267-.193-.56-.34z" />
        </svg>
      </span>

    </a>
  );
}

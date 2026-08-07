"use client"; // 1. MUST be at the very top line so the browser handles click events!

import { useState } from "react";

export default function ConsultationButton() {
  const [booked, setBooked] = useState(false);

  return (
    <button 
      onClick={() => setBooked(true)}
      style={{
        padding: "10px 20px",
        backgroundColor: booked ? "#059669" : "#1E40AF",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {booked ? "✅ Consultation Booked!" : "Book Free Assessment"}
    </button>
  );
}
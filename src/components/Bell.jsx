import { useState } from "react";

export default function Bell() {
  const [ringing, setRinging] = useState(false);

  const ringBell = () => {
    const audio = new Audio("/bell.mp3");
    audio.play();

    setRinging(true);

    setTimeout(() => {
      setRinging(false);
    }, 1000);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div
        onClick={ringBell}
        style={{
          fontSize: "50px",
          cursor: "pointer",
          display: "inline-block",
          animation: ringing ? "shake 0.5s infinite" : "none"
        }}
      >
        🔔
      </div>

      <p>Ring the temple bell</p>

      <style>
        {`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
          75% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
        `}
      </style>
    </div>
  );
}
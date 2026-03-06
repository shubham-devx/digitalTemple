import { useState } from "react";

export default function Diya() {

  const [lit, setLit] = useState(false);

  const lightDiya = () => {
    setLit(true);
  };

  const stopDiya = () => {
    setLit(false);
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>

      <div
        style={{
          fontSize: "80px",
          transition: "0.5s",
          filter: lit ? "drop-shadow(0 0 25px orange)" : "none"
        }}
      >
        🪔
      </div>

      {lit && <div className="flame"></div>}

      <div style={{ marginTop: "15px" }}>

        <button onClick={lightDiya}>
          Light Diya
        </button>

        <button onClick={stopDiya} style={{ marginLeft: "10px" }}>
          Stop
        </button>

      </div>

      {!lit && <p>Click Light Diya to start prayer 🙏</p>}
      {lit && <p>Diya lit with devotion ✨</p>}

      <style>
        {`
        button{
          padding:10px 18px;
          border:none;
          border-radius:8px;
          background:#8B4513;
          color:white;
          cursor:pointer;
          font-size:16px;
        }

        button:hover{
          background:#a0522d;
        }

        .flame{
          width:18px;
          height:28px;
          background: radial-gradient(circle, yellow 0%, orange 60%, transparent 80%);
          margin:auto;
          border-radius:50%;
          animation: flameMove 0.5s infinite alternate;
          filter: drop-shadow(0 0 10px orange);
        }

        @keyframes flameMove{
          0%{ transform:translateY(-10px) scale(1); }
          50%{ transform:translateY(-12px) scale(1.1); }
          100%{ transform:translateY(-10px) scale(0.95); }
        }
        `}
      </style>

    </div>
  );
}
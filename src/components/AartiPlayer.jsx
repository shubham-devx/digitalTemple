import { useRef, useState } from "react";

export default function AartiPlayer({ deity }) {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playAarti = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`/${deity}.mpeg`);
    }

    audioRef.current.play();
    setPlaying(true);
  };

  const stopAarti = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPlaying(false);
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>

      <button onClick={playAarti}>Play Aarti</button>

      <button onClick={stopAarti} style={{ marginLeft: "10px" }}>
        Stop
      </button>

      {playing && (
        <div
          style={{
            fontSize: "60px",
            marginTop: "20px",
            animation: "rotateAarti 3s linear infinite"
          }}
        >
          🪔
        </div>
      )}

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

        @keyframes rotateAarti{
          0%{ transform: rotate(0deg); }
          100%{ transform: rotate(360deg); }
        }
        `}
      </style>

    </div>
  );
}
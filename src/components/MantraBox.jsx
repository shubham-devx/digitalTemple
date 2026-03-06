const mantras = {
  Krishna: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
  Shiva: "Om Namah Shivaya",
  Hanuman: "Om Hanumate Namah",
  Ganesha: "Om Gan Ganapataye Namah"
};

export default function MantraBox({ deity }) {
  return (
    <div
      style={{
        marginTop: "30px",
        fontSize: "22px",
        color: "#FFD700",
        textShadow: "0 0 10px gold",
        animation: "pulse 2s infinite"
      }}
    >
      <h3>Mantra</h3>
      <p>{mantras[deity]}</p>

      <style>
        {`
        @keyframes pulse {
          0% { opacity:1 }
          50% { opacity:0.6 }
          100% { opacity:1 }
        }
        `}
      </style>
    </div>
  );
}
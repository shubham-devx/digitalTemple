import { useEffect } from "react";

export default function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio("/music/temple.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch(() => {});

  }, []);

  return null;
}
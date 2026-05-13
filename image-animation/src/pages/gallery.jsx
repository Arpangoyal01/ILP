import { useRef } from "react";
import AnimationCard from "../components/AnimationCard";
export default function Gallery() {
  const containerRef = useRef(null);

  const replayAnimations = () => {
    const cards = containerRef.current.querySelectorAll("img");

    cards.forEach((card, index) => {
      card.animate(
        [
          { transform: "scale(0.5) rotate(0deg)", opacity: 0 },
          { transform: "scale(1) rotate(360deg)", opacity: 1 },
        ],
        { duration: 1500, delay: index * 500, fill: "forwards" },
      );
    });
  };

  return (
    <div className="page">
      <h1>Gallery Animations</h1>

      <button className="btn" onClick={replayAnimations}>
        Replay Animations
      </button>

      <div className="gallery" ref={containerRef}>
        <AnimationCard
          image="https://picsum.photos/id/1015/300/300"
          title="Mountain"
          delay={0}
        />
        <AnimationCard
          image="https://picsum.photos/id/1025/300/300"
          title="Dog"
          delay={1000}
        />

        <AnimationCard
          image="https://picsum.photos/id/1035/300/300"
          title="River"
          delay={2000}
        />
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";

export default function AnimationCard({ image, title, delay }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      imageRef.current.animate(
        [
          {
            transform: "translateY(-100px) rotate(0deg) scale(0.5)",
            opacity: 0,
          },
          {
            transform: "translateY(0px) rotate(360deg) scale(1)",
            opacity: 1,
          },
        ],
        {
          duration: 2000,
          fill: "forwards",
        },
      );
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className="card">
      <img ref={imageRef} src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

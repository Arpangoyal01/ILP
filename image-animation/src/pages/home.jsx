import { useEffect, useRef } from "react";
// import Loader from "../components/Loader";
export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.animate(
      [
        {
          letterSpacing: "0px",
          transform: "scale(0.3)",
          opacity: 0,
        },
        {
          letterSpacing: "5px",
          transform: "scale(1)",
          opacity: 1,
        },
      ],
      {
        duration: 2000,
        fill: "forwards",
      },
    );
  }, []);

  return (
    <div className="page">
      <h1 ref={titleRef}>Advanced React Animation App</h1>
      <p>
        This project demonstrates sequential animations, route handling, hover
        effects, loaders, reusable components, and multiple animation styles.
      </p>
      {/* <Loader /> */}
    </div>
  );
}

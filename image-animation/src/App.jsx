import { useRef } from "react";

function App() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  // animation style
  const animationFram = [
    {
      transform: "rotate(0deg) scale(1)",
      opacity: 0.5,
    },
    {
      transform: "rotate(360deg) scale(1.3)",
      opacity: 1,
    },
  ];

  // animation config
  const animationConfig = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };

  // func to animate the img
  const animationImg = async (imgRef) => {
    const animationObj = await imgRef.current.animate(
      animationFram,
      animationConfig,
    );
    await animationObj.finished;
  };

  // sequential animation
  const startSequentialAnimation = async () => {
    await animationImg(img1Ref);
    await animationImg(img2Ref);
    await animationImg(img3Ref);
  };

  // useEffect(() => {
  //   startSequentialAnimation();
  // }, []);

  return (
    <div style={styles.container}>
      <h1>Sequential Image Animation</h1>

      <div style={styles.imageContainer}>
        <img
          ref={img1Ref}
          src="https://picsum.photos/id/1015/200/200"
          alt="img1"
          style={styles.image}
        />

        <img
          ref={img2Ref}
          src="https://picsum.photos/id/1025/200/200"
          alt="img2"
          style={styles.image}
        />

        <img
          ref={img3Ref}
          src="https://picsum.photos/id/1035/200/200"
          alt="img3"
          style={styles.image}
        />
      </div>
      <br />
      <br />
      <button styles={styles.btn} onClick={() => startSequentialAnimation()}>
        Play
      </button>
    </div>
  );
}
export default App;

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "12px",
    objectFit: "cover",
  },
};

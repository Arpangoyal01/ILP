import { useState, useEffect } from "react";

function App() {
  const [avatar, setAvatar] = useState(0);
  const [style, setStyle] = useState("adventurer");

  const styles = [
    "adventurer",
    "bottts",
    "pixel-art",
    "fun-emoji",
    "micah",
    "thumbs",
  ];
  // generate avatar trigger
  const generateAvatar = () => {
    const randomSeed = crypto.randomUUID(); //Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;

    setAvatar(url);
  };

  // auto generate when style changes

  useEffect(() => {
    generateAvatar();
  }, [style]);

  // download avatar

  const downloadAvatar = async () => {
    try {
      const response = await fetch(avatar);

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;

      link.download = "avatar.svg";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log("download failed", error);
    }
  };

  return (
    <div style={stylesCSS.container}>
      <div style={stylesCSS.card}>
        <h1 style={stylesCSS.heading}>Avatar Generator</h1>

        {/* category buttons */}
        <div style={stylesCSS.buttonContainer}>
          {styles.map((item) => (
            <button
              key={item}
              onClick={() => setStyle(item)}
              style={{
                ...stylesCSS.categoryButton,
                backgroundColor: style === item ? "#4f46e5" : "#e5e7eb",
                color: style === item ? "white" : "black",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* avatar image */}
      <div style={stylesCSS.imageContainer}>
        <img src={avatar} alt="Avatar" width={250} />
      </div>

      <div style={stylesCSS.actionButtons}>
        <button style={stylesCSS.generateButton} onClick={generateAvatar}>
          Next Avatar
        </button>
        <button style={stylesCSS.downloadButton} onClick={downloadAvatar}>
          Download Image
        </button>
      </div>
    </div>
  );
}

const stylesCSS = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    fontFamily: "Arial",
    gap: "10px",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },

  heading: {
    marginBottom: "20px",
  },

  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px",
  },

  categoryButton: {
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },

  imageContainer: {
    marginBottom: "25px",
  },

  actionButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  generateButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#10b981",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  downloadButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default App;

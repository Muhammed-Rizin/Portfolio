import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [bufferProgress, setBufferProgress] = useState(0);

  useEffect(() => {
    if (progress > bufferProgress) {
      setBufferProgress(progress);
    }
  }, [progress]); //eslint-disable-line

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {bufferProgress !== 0 ? `${bufferProgress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};


export default CanvasLoader;

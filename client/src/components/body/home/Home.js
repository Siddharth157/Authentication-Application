import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        padding: "20px",
        background: "rgb(255, 249, 215)",
        color: "#333",
      }}
    >
      <h2 style={{ fontSize: "2rem", margin: "10px 0", color: "crimson" }}>
        Hello everyone!
      </h2>
      <p
        style={{
          color: "#888556",
          lineHeight: "1.5",
          margin: "10px 0",
          fontStyle: "-moz-initial",
        }}
      >
        This is a simple web application for user authentication only
      </p>
    </div>
  );
}

export default Home;

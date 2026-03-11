import React from "react";

function App() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      fontFamily: "Segoe UI, Arial"
    }}>
      
      <div style={{
        background: "white",
        padding: "40px 60px",
        borderRadius: "18px",
        boxShadow: "0 10px 35px rgba(0,0,0,0.15)",
        textAlign: "center"
      }}>
        
        <h1 style={{
          marginBottom: "15px",
          color: "#d63384",
          fontSize: "34px",
          letterSpacing: "1px"
        }}>
          Mugupuram Kavya Amrutha
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#6c2c5a",
          margin: "6px"
        }}>
          2023BCS0221
        </p>

        <p style={{
          fontSize: "18px",
          color: "#a64d79",
          marginTop: "8px"
        }}>
          IOE321
        </p>

      </div>

    </div>
  );
}

export default App;
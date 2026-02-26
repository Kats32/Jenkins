import React from "react";

function App() {
  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "100px",
      fontFamily: "Arial"
    }}>
      <h1>🚀 React Frontend Running</h1>
      <p>If you see this, Jenkins did its job.</p>
      <button 
        onClick={() => alert("Button works!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
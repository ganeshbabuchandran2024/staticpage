import React from "react";

const SingleSection = () => {
  return (
    <div id="main-section" style={{ padding: "20px" }}>
      <h1>Main Section</h1>
      <div id="section-item-1" style={{ marginBottom: "50px" }}>
        <h2>Item 1</h2>
        <p>Details about Item 1...</p>
      </div>
      <div id="section-item-2" style={{ marginBottom: "50px" }}>
        <h2>Item 2</h2>
        <p>Details about Item 2...</p>
      </div>
      <div id="section-item-3">
        <h2>Item 3</h2>
        <p>Details about Item 3...</p>
      </div>
    </div>
  );
};

export default SingleSection;

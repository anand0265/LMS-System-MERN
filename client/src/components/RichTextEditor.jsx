import React, { useState } from "react";
import ReactQuill from "react-quill";
 import "react-quill/dist/quill.snow.css";
// import "quill/dist/quill.snow.css"; // ✅ Alternate for Vite

function RichTextEditor({ input, setInput }) {
  const handleChange = (content) => {
    setInput({ ...input, description: content });
  };

  return (
    <ReactQuill
      theme="snow"
      value={input.description}
      onChange={handleChange}
      placeholder="Write your content here"
    />
  );
}

export default RichTextEditor;

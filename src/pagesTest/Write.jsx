import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <div className="editorContainer" style={{height: "400px", overflow: "scroll"}}>
        <ReactQuill theme="snow" value={value} onChange={setValue} style={{height: "100%", border: "none"}}/>
      </div>
      <div className="item">
        <h2>Publish</h2>
        <span><b>Status:</b>Draft </span>
        <span><b>Visibility:</b> Public</span>
        <input type="file" id="file" name="" style={{display:"none"}}/>
        <label htmlFor="file">Dodaj zdjęcie</label>
        <button>Safe as a draft</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default Write;

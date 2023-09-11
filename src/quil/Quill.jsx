import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-span-6 mt-5">
          <h1 className="text-center">React Quill</h1>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="mt-3"
          />
          ;
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

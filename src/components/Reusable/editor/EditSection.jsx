import React, { useRef, useState } from "react";
import Quill from "quill";
import Editor from "./Editor";
import Swal from "sweetalert2";
import { Button } from "antd";

const TextEditor = ({ data, section,onChange, }) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const quillRef = useRef(null);

 
  const getContentFromData = () => {
    if (!data) return "";
    

    if (typeof data === 'object' && data.text) {
      return data.text;
    }
    
   
    if (typeof data === 'string') {
      return data;
    }
    
    return "";
  };

  const handleUpdate =  () => {
          const content = quillRef.current?.root.innerHTML || "";
          console.log(content)
          onChange('descriptions', content)
  };

  return (
    <div
      className="flex w-full bg-white flex-col gap-4 p-3 relative"
      style={{
        minHeight: "200px",
        boxShadow: "0px 0px 10px 0px #0000001A",
      }}
    >
      <Editor
        ref={quillRef}
        readOnly={readOnly || isLoading}
        defaultValue={getContentFromData()} 
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />

{/* <Button onClick={handleUpdate} >Hwe</Button> */}
    </div>
  );
};

export default TextEditor;
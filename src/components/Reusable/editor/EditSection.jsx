import React, { useRef, useState } from "react";
import Quill from "quill";
import Editor from "./Editor";
import Swal from "sweetalert2";

const EditSection = ({ data, section }) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const quillRef = useRef(null);

  // Extract the actual content from the API response
  const getContentFromData = () => {
    if (!data) return "";
    
    // If data has a 'text' property, use that
    if (typeof data === 'object' && data.text) {
      return data.text;
    }
    
    // If data is already a string, use it directly
    if (typeof data === 'string') {
      return data;
    }
    
    return "";
  };

  const handleUpdate = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#343F4F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setIsLoading(true);
          // Get the updated content from Quill editor
          const content = quillRef.current?.root.innerHTML || "";
          
          // Prepare the data payload
          const payload = { text: content };
          
          // Show success message
          Swal.fire({
            position: "top center",
            icon: "success",
            title: "Content updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          
        } catch (error) {
          // Handle error
          console.error("Update failed:", error);
          Swal.fire({
            position: "top center",
            icon: "error",
            title: "Update failed!",
            text: "There was an error updating the content. Please try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        } finally {
          setIsLoading(false);
        }
      }
    })
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
        defaultValue={getContentFromData()} // Use the extracted content
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />


    </div>
  );
};

export default EditSection;
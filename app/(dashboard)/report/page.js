"use client";
import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Uploaded Successfully: ${data.filePath}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage("Upload failed!");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-800 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold">Upload Evidence</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-400
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-600 file:text-white
          hover:file:bg-indigo-700
        "
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Upload
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}

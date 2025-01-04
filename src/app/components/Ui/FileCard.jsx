import React from "react";

const formatFileSize = (sizeInBytes) => {
  if (sizeInBytes < 1024) return `${sizeInBytes} B`;
  const kb = sizeInBytes / 1024;
  if (kb < 1024) return `${kb.toFixed(2)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(2)} MB`;
  const gb = mb / 1024;
  return `${gb.toFixed(2)} GB`;
};

const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');
  return hrs > 0
    ? `${hrs}:${formattedMins}:${formattedSecs}`
    : `${formattedMins}:${formattedSecs}`;
};

const FileCard = ({ file }) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = file.link;
    link.download = file.title || "download.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{maxWidth:'35rem',marginTop:'2rem'}} className="w-full bg-white rounded-lg shadow-lg p-5 hover:scale-105 transform transition-transform duration-300 ease-in-out">
      <h2 className="text-lg font-bold mb-2 text-gray-800">{file?.title}</h2>

      <div className="flex flex-col mb-3 text-sm text-gray-600">
        <p>
          <strong>File Size:</strong> {formatFileSize(file?.filesize || 0)}
        </p>
        <p>
          <strong>Duration:</strong> {formatDuration(file?.duration || 0)}
        </p>
      </div>

      <button
        className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        onClick={downloadFile}
      >
        Download
      </button>
    </div>
  );
};

export default FileCard;

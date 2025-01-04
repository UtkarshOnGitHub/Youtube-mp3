import React from "react";

export function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-opacity-80"></div>
    </div>
  );
}

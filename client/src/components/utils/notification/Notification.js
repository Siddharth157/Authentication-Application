import React from "react";
import "./notification.css";

export const showErrMsg = (msg) => {
  return (
    <div
      className="errorMessage"
    >
      {msg}
    </div>
  );
};

export const showSuccessMsg = (msg) => {
  return <div className="successMsg">{msg}</div>;
};

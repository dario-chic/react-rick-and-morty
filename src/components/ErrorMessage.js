import React from "react";
import Button from "./Button";

const ErrorMessage = ({ error, url, home, goBack }) => {
  return (
    <div className="err-c">
      {" "}
      <div className="error-container">
        <h3 className="error-message">
          {`Error: ${error.status}`} <br /> {`${error.statusText}`}
        </h3>
        <p>
          There are no results for this request or something else is going wrong
        </p>
        {goBack && (
          <button className="btn" onClick={(e) => window.history.back()}>
            Go back
          </button>
        )}
        <span> </span>
        {home && <Button url="/">Go home</Button>}
        <span> </span>
      </div>
    </div>
  );
};

export default ErrorMessage;

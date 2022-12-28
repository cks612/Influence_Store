import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <FontAwesomeIcon className="spinner" icon={faSpinner} size="2xl" spin />
  );
};

export default Loading;

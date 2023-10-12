import React from "react";
import Loader from "react-loader-spinner";
import "./QnaLoader.scss";
function QnaLoader() {
  return (
    <div className="qnaLoader">
      <div>Model Loading....</div>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default QnaLoader;

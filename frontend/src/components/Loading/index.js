import React from "react";
import "./styles.scss";

export default function Loading() {
  return (
    <div className="loading">
      Loading
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

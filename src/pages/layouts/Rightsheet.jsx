//eslint-disable
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function Rightsheet({ active, onoff }) {
  return (
    <div className={"global_right" + (active ? " active" : "")}>
      <div className="col_wrap col_gap_16">
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
        <div className="col col_12">
          <div className="testBox"></div>
        </div>
      </div>
    </div>
  );
}

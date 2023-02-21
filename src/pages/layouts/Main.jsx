import React, { useCallback, useState } from "react";
import "../../circle_percentage.css";
import styled from "styled-components";

import Moment from "react-moment";
import moment from "moment";

// import testdata from "../db/testWorkData";
import Tabtest3 from "../test/Tabtest3";
import {
  current,
  cerrentDate,
  currenttime,
  dayWork,
} from "../../components/Current";
import TodoCharts from "../../components/dashboard/TodoCharts";
import CalendarSmall from "../../components/dashboard/CalendarSmall";
import CalendarTimeline from "../../components/dashboard/CalendarTimeline";

// const current = new Date();
// const cerrentDate = moment(current).format("DD MM YYYY");
// const currenttime = moment(current).format("hh:mm:ss");

// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

export default function Main() {
  const [sDate, setSDate] = useState(moment(current).format("YYYY-MM-DD"));

  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <div className="col_wrap">
        <div className="col col_12 mb20">
          <Moment interval={1000}>1976-04-19T12:59-0500</Moment>
          <br />
          <Moment interval={10000} format="hh:mm:ss" date={current}></Moment>
        </div>
        <div className="col col_12">
          <Tabtest3></Tabtest3>
        </div>
        <div className="col col_6">
          <div style={{ background: "#999" }}>
            <TodoCharts></TodoCharts>
          </div>
        </div>
        <div className="col col_6">
          <div style={{ background: "#999" }}>
            <CalendarSmall setSDate={setSDate}></CalendarSmall>
          </div>

          <p className="text-center">
            <span className="bold">Selected Date: {sDate}</span>
          </p>
        </div>
        <div className="col col_12">
          <CalendarTimeline></CalendarTimeline>
        </div>
      </div>
    </>
  );
}

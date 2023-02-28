import React, { useCallback, useState } from "react";
import "../../circle_percentage.css";
import styled from "styled-components";
import Moment from "react-moment";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarSmall.css";
import { dayWork } from "../../components/Current";

function Dotted() {
  return (
    <div
      className="dotted"
      style={{
        height: "8px",
        width: "8px",
        backgroundColor: "#f87171",
        borderRadius: "50%",
        display: "flex",
        marginLeft: "1px",
      }}
    ></div>
  );
}

export default function CalendarSmall({ setSDate }) {
  return (
    <>
      <Calendar
        onChange={(date, event) => setSDate(moment(date).format("YYYY-MM-DD"))}
        calendarType="US"
        className="calendar_small"
        formatDay={(locale, date) => moment(date).format("D")} // 일표시 ex : "D일"
        navigationAriaLabel="go up"
        minDetail="decade"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        showNavigation={true} // 상단날짜네비게이션
        showNeighboringMonth={true} // 이전,이후달의 날짜 노출여부
        // onClickDay={(date) =>
        //   console.log(moment(date).format("YYYY-MM-DD"))
        // }
        // formatLongDate={(locale, date) =>
        //   console.log(moment(date).format("YYYY-MM-DD"))
        // }
        // selectRange={true} 범위설정 (width allowPartialRange)

        // tileClassName={({ date, view }) => {
        //   if (
        //     dayWork.find((x) => x.date === moment(date).format("YYYY-MM-DD"))
        //   ) {
        //     return "highlight";
        //   }
        // }}
        // tileContent={({ date, view }) => {
        //   if (dayWork.find((x) => x.date === moment(date).format("YYYY-MM-DD")))
        //     return (
        //       <>
        //         <div className="flex justify-center items-center absoluteDiv">
        //           <Dotted className="dot"></Dotted>
        //         </div>
        //       </>
        //     );
        // }}
      ></Calendar>
    </>
  );
}

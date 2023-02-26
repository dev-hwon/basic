import React, { useCallback, useState } from "react";
import "../../circle_percentage.css";
import Moment from "react-moment";
import moment from "moment";
import {
  current,
  cerrentDate,
  currenttime,
  dayWork,
} from "../../components/Current";
import TodoCharts from "../../components/dashboard/TodoCharts";
import CalendarSmall from "../../components/dashboard/CalendarSmall";
// import CalendarTimeline from "../../components/dashboard/CalendarTimeline";
import TodoList from "../todos/TodoList";
import TodosHeader from "../../components/todos/TodosHeader";

const filters = ["all", "active", "completed"];
export default function Main() {
  const [sDate, setSDate] = useState(moment(current).format("YYYY-MM-DD"));
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <h2>클리닉리포트</h2>
      <div className="col_wrap col_gap_14">
        <div className="col col_custom">
          <div>
            <TodoCharts></TodoCharts>
          </div>
        </div>
        <div className="col col_auto">
          <div>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
          </div>
        </div>
        <div className="col col_custom">
          <div>핳하ㅏㅎ</div>
        </div>
        <div className="col col_custom">
          <div>
            <CalendarSmall setSDate={setSDate}></CalendarSmall>
            <div className="text_center bold">Selected Date: {sDate}</div>
          </div>
        </div>
      </div>
      <h2>오늘 해야 할 일</h2>
      <div className="col_wrap col_gap_14">
        <div className="col col_custom">
          <div></div>
        </div>
        <div className="col col_custom">
          <div></div>
        </div>
        <div className="col col_custom">
          <div></div>
        </div>
        <div className="col col_custom">
          <div></div>
        </div>
      </div>
      <h2>해야 할 일 목록</h2>
      <div className="col_wrap col_gap_14">
        <div className="col col_12 mb20">
          <div></div>
        </div>
        <div className="col col_12 mb20">
          <Moment interval={1000}>1976-04-19T12:59-0500</Moment>
          <br />
          <Moment interval={10000} format="hh:mm:ss" date={current}></Moment>
        </div>
        <div className="col col_12">
          {/* <CalendarTimeline></CalendarTimeline> */}
        </div>
      </div>
    </>
  );
}

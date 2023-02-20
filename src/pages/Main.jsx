import React, { useCallback, useState } from "react";
import "../circle_percentage.css";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import moment from "moment";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import momentPlugin from "@fullcalendar/moment";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { headerSetting, buttonTexts } from "./FullcalendarSetting";
// import testdata from "../db/testWorkData";
import Tabtest3 from "./Tabtest3";
import { current, cerrentDate, currenttime } from "./Current";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius - 15) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "10px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const handleDateClick = (arg) => {
  console.log(arg.dateStr);
};
const dayWork = [
  { title: "event 1", date: "2023-02-13" },
  { title: "event 2", date: "2023-02-14" },
  { title: "event 3", date: "2023-02-18" },
  { title: "event 4", date: "2023-02-19" },
  { title: "event 5", date: "2023-02-22" },
];

// const current = new Date();
// const cerrentDate = moment(current).format("DD MM YYYY");
// const currenttime = moment(current).format("hh:mm:ss");

// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const [sDate, setSDate] = useState(moment(current).format("YYYY-MM-DD"));

  return (
    <>
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
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                onMouseEnter={onPieEnter}
                activeIndex={activeIndex}
                activeShape={false}
                labelLine={false}
                label={renderCustomizedLabel}
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={80}
                fill="red"
                paddingAngle={0}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="red"
                    strokeWidth={0}
                  ></Cell>
                ))}
                <g>
                  <text
                    x="50.95531024191172"
                    y="50"
                    fill="white"
                    text-anchor="start"
                    dominant-baseline="central"
                    style="font-size: 10px;"
                  >
                    test
                  </text>
                  <text>text</text>
                </g>
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="col col_6">
          <div style={{ background: "#999" }}>
            <Calendar
              onChange={(date, event) =>
                setSDate(moment(date).format("YYYY-MM-DD"))
              }
              calendarType="US"
              className="qwer1234"
              formatDay={(locale, date) => moment(date).format("D")} // 일표시 ex : "D일"
              navigationAriaLabel="go up"
              minDetail="decade"
              maxDetail="month"
              showNavigation={true} // 상단날짜네비게이션
              showNeighboringMonth={true} // 이전,이후달의 날짜 노출여부
              // onClickDay={(date) =>
              //   console.log(moment(date).format("YYYY-MM-DD"))
              // }
              // formatLongDate={(locale, date) =>
              //   console.log(moment(date).format("YYYY-MM-DD"))
              // }
              // selectRange={true} 범위설정 (width allowPartialRange)

              tileClassName={({ date, view }) => {
                if (
                  dayWork.find(
                    (x) => x.date === moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return "highlight";
                }
              }}
              tileContent={({ date, view }) => {
                if (
                  dayWork.find(
                    (x) => x.date === moment(date).format("YYYY-MM-DD")
                  )
                )
                  return (
                    <>
                      <div className="flex justify-center items-center absoluteDiv">
                        <Dotted className="dot"></Dotted>
                      </div>
                    </>
                  );
              }}
            ></Calendar>
          </div>

          <p className="text-center">
            <span className="bold">Selected Date: {sDate}</span>
          </p>
        </div>
        <div className="col col_12">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              momentPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            headerToolbar={headerSetting}
            // titleFormat={"YYYY-MM-DD"}
            titleFormat={"YYYY.M.D"}
            buttonText={buttonTexts}
            initialView="dayGridMonth"
            events={dayWork}
            dateClick={(date) => handleDateClick(date)}
            eventContent={(e) => renderEventContent(e)}
            editable={true}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    </>
  );
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
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

const TileContent = styled.div`
  height: 8px;
  width: 8px;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

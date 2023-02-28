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
import CalendarSmall from "../../components/dashboard/CalendarSmall";
// import CalendarTimeline from "../../components/dashboard/CalendarTimeline";
import TodoList from "../todos/TodoList";
import TodosHeader from "../../components/todos/TodosHeader";
import TodoAchievementChart from "../../components/todos/TodoAchievementChart";
import { Box, BoxCont, GridTitle, GridCol, GridWrap, BoxHead } from "./Layout";
import Reviews from "../reviews/Reviews";

const filters = ["all", "active", "completed"];
export default function Main() {
  const [sDate, setSDate] = useState(moment(current).format("YYYY-MM-DD"));
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <GridTitle>제목1</GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <BoxHead>오늘의 업무 완료</BoxHead>
            <TodoAchievementChart
              percent={75}
              trackLength={0.6}
              chartDirection={0.625}
            />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <BoxHead>리뷰 한번에 보기</BoxHead>
            <Reviews></Reviews>
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <BoxHead>지역 리뷰 비교</BoxHead>
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <CalendarSmall setSDate={setSDate}></CalendarSmall>
            {/* <div className="text_center bold">Selected Date: {sDate}</div> */}
          </Box>
        </GridCol>
      </GridWrap>

      <GridTitle className="mt20">투두리스트1</GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
          </Box>
        </GridCol>
      </GridWrap>

      <GridTitle className="mt20">투두리스트2</GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Moment interval={1000}>1976-04-19T12:59-0500</Moment>
          <br />
          <Moment interval={10000} format="hh:mm:ss" date={current}></Moment>
        </GridCol>
        <GridCol>
          <Box>2</Box>
        </GridCol>
        <GridCol>
          <Box>3</Box>
        </GridCol>
        <GridCol>
          <Box>4</Box>
        </GridCol>
      </GridWrap>
    </>
  );
}

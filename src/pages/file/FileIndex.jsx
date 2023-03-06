import React from "react";
// import Moment from "react-moment";
// https://flamingotiger.github.io/javascript/momentjs/
import moment from "moment";
const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const current = new Date();
const currentDate = moment(current).format("YYYY-DD-MM");
const currentDataMonth = moment(current).format("MM");
const currenttime = moment(current).format("hh:mm:ss");

// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

export default function FileIndex() {
  return <div></div>;
}

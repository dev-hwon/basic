// import Moment from "react-moment";
// https://flamingotiger.github.io/javascript/momentjs/
import { useState, useEffect } from "react";
import moment from "moment";
export const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
export const current = new Date();
export const currentDate = moment(current).format("YYYY-MM-DD");
export const currentDataMonth = moment(current).format("MM");
export const Currenttime = () => {
  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="neon pink" style={{ fontFamily: "alarm_clock" }}>
        {moment(time).format("YYYY-MM-DD")}
      </div>
      <div className="neon blue"> {moment(time).format("HH:mm:ss")}</div>
    </div>
  );
};

// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));
export default moment;

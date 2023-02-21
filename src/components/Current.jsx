import Moment from "react-moment";
import moment from "moment";

const current = new Date();
const cerrentDate = moment(current).format("DD MM YYYY");
const currenttime = moment(current).format("hh:mm:ss");
// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

const dayWork = [
  { title: "event 1", date: "2023-02-13" },
  { title: "event 2", date: "2023-02-14" },
  { title: "event 3", date: "2023-02-18" },
  { title: "event 4", date: "2023-02-19" },
  { title: "event 5", date: "2023-02-22" },
];

export { current, cerrentDate, currenttime, dayWork };

// import Moment from "react-moment";
import moment from "moment";
// https://flamingotiger.github.io/javascript/momentjs/
export const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
export const current = new Date();
export const currentDate = moment(current).format("YYYY-MM-DD");
export const currentDataMonth = moment(current).format("MM");
export const currenttime = moment(current).format("hh:mm:ss");
// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

// export function getData() {
//   fetch(todosUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch(() => {
//       console.log("error!");
//     });
// }
// let data = getData();
// let monthWorkData = data.filter((d) => d.todos);
export const monthWorkList = [];

export default moment;

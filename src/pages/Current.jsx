import Moment from "react-moment";
import moment from "moment";

const current = new Date();
const cerrentDate = moment(current).format("DD MM YYYY");
const currenttime = moment(current).format("hh:mm:ss");

export { current, cerrentDate, currenttime };

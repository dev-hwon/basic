import { v4 as uuidv4 } from "uuid";

export default function AuthorReducer(name, action) {
  switch (action.type) {
    case "update": {
      // updateData(name);
      return "";
    }
    case "change": {
      return action.name;
      // const { changeName } = action;
      // return changeName;
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}

// function updateData(name) {
//   fetch(`${process.env.REACT_APP_TEST_JSONSERVER_AUTHOR}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id: uuidv4(), name }),
//   })
//     .then((response) => response.json())
//     .then(() => {
//       // onAdd({ id: uuidv4(), name });
//     });
// }

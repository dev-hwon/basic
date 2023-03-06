export default function TodosReducer(todo, action) {
  switch (action.type) {
    case "TODOS_SUCCESS":
      const [todos] = action;
      return {
        loading: false,
        errorMessage: "",
        authors: todos, // res.data payload로 전달
      };
    case "TODOS_SUCCESS": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        authors: {},
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}

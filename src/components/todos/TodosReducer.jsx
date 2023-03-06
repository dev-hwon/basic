export default function TodosReducer(todo, action) {
  switch (action.type) {
    case "TODOS_SUCCESS":
      const { category, filter } = action;
      return {
        loading: false,
        errorMessage: "",
        // categorys: category, // res.data payload로 전달
        categorys: category.filter((list) => list.id === filter), // res.data payload로 전달
      };
    case "TODOS_ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        categorys: "{}",
      };
    }
    case "TODOS_UPDATE": {
      return {
        loading: false,
        errorMessage: "",
        categorys: "",
      };
    }
    case "TODOS_DELETE": {
      return {
        loading: false,
        errorMessage: "",
        categorys: "",
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입 : ${action.type}`);
    }
  }
}

export default function TodosReducer(todo, action) {
  switch (action.type) {
    case "TODOS_SUCCESS":
      const { datas, objName, filter } = action;
      return {
        loading: false,
        errorMessage: "",
        todos: objName === "todos" && datas,
        categorys:
          objName === "categorys" &&
          datas.filter((list) => (filter ? list.id === filter : list)),
      };
    case "TODOS_ERROR": {
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        categorys: "{}",
      };
    }
    case "TODOS_UPDATE": {
      const { postData } = action;

      return {
        ...todo,
        categorys: [...todo.todosName, postData],
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

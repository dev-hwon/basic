export default function AuthorReducer(author, action) {
  switch (action.type) {
    case "AUTHOR_SUCCESS":
      return {
        loading: false,
        errorMessage: "",
        authors: action.dataReverse, // res.data payload로 전달
      };
    case "AUTHOR_ERROR":
      return {
        loading: false,
        errorMessage: "Something went wrong!",
        authors: {},
      };
    case "AUTHOR_ADD": {
      const { addTarget } = action;
      return {
        ...author,
        authors: [addTarget, ...author.authors],
      };
    }
    case "AUTHOR_DELETE": {
      const { authors, deleteTarget } = action;
      return {
        ...author,
        authors: authors.filter((a) => a.id !== deleteTarget.id),
      };
    }
    case "AUTHOR_CHANGE": {
      return author;
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

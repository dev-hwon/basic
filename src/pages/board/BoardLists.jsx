import {
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

function List({ boardlists, param }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/board/${param.boardName}/${id}`, { replace: true });
  };
  console.log(param.id);
  return (
    <tbody>
      {boardlists.map(
        (list, idx) =>
          list.type === param.boardName && (
            <tr key={idx} onClick={() => handleClick(list.id)}>
              <td>{idx}</td>
              <td>{list.subject}</td>
              <td>{list.author}</td>
              <td>{list.resDate}</td>
              <td>{list.viewCount}</td>
            </tr>
          )
      )}
    </tbody>
  );
}

export default function BoardLists({ boardlists, param }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회</td>
          </tr>
        </thead>

        <List boardlists={boardlists} param={param} />
      </table>
    </>
  );
}

import { useCallback, useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import BoardLists from "../../components/board/BoardLists";
import BoardWrite from "../../components/board/BoardWrite";
const boardlistsUrl = `${process.env.REACT_APP_TEST_JSONSERVER_BOARDLISTS}`;
const boardNameKR = {
  manual: "우리 병원 매뉴얼",
  notice: "공지사항",
  free: "자유게시판",
};
export default function BoardIndex() {
  const param = useParams();
  const [modalProps, setModalProps] = useState([]);
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, boardlists } = dataList;
  const getBoardLists = useCallback(() =>
    fetch(boardlistsUrl).then((res) => res.json())
  );
  useEffect(() => {
    getBoardLists()
      .then((res) => {
        const boardlistsData = res;
        dataDispatch({ type: "SUCCESS", boardlistsData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
  }, []);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

  return (
    <>
      <div className="">
        {boardNameKR[param.boardName]}
        <ModalOpenBtn
          modalWidth="800px"
          className=""
          children={<BoardWrite modalProps={setModalProps} />}
          buttonName="글쓰기"
          modalProps={setModalProps}
        />
      </div>
      {loading ? (
        "loading.."
      ) : (
        <BoardLists boardlists={boardlists} param={param} />
      )}
      {errorMessage ? errorMessage : null}
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          children={modalProps.children}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}

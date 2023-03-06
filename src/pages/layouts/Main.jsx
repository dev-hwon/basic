import React, { useCallback, useState } from "react";
import "../../circle_percentage.css";
import moment, {
  current,
  currentDate,
  currenttime,
  dayWork,
  getData,
} from "../../components/Current";
import CalendarSmall from "../../components/dashboard/CalendarSmall";
// import CalendarTimeline from "../../components/dashboard/CalendarTimeline";
import TodoIndex from "../todos/TodoIndex";
import TodosHeader from "../../components/todos/TodosHeader";
import TodoAchievementChart from "../../components/todos/TodoAchievementChart";
import {
  Box,
  BoxHead,
  BoxCont,
  GridTitle,
  TitleText,
  GridCol,
  GridWrap,
  ButtonGroup,
} from "./Layout";
import Reviews from "../reviews/Reviews";
import Modal from "../../components/modal/Modal";
import Addtodo from "../../components/todos/Addtodo";
let num = 0;
const filters = ["all", "active", "completed"];
export default function Main() {
  const [sDate, setSDate] = useState(moment(current).format("YYYY-MM-DD"));
  const [modalProps, setModalProps] = useState(
    { visible: false },
    { width: "90%" }
  );
  const [filter, setFilter] = useState(filters[0]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <GridTitle>제목1</GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <BoxHead>오늘의 업무 완료</BoxHead>
            <TodoAchievementChart
              percent={75}
              trackLength={0.6}
              chartDirection={0.625}
            />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <BoxHead>리뷰 한번에 보기</BoxHead>
            <Reviews></Reviews>
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <BoxHead>지역 리뷰 비교</BoxHead>
            <ModalOpenBtn
              buttonName="자세히보기"
              modalWidth="600px"
              modalProps={setModalProps}
            ></ModalOpenBtn>
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <CalendarSmall setSDate={setSDate}></CalendarSmall>
            {/* <div className="text_center bold">Selected Date: {sDate}</div> */}
          </Box>
        </GridCol>
      </GridWrap>

      <GridTitle className="mt20">
        <TitleText>투두리스트1</TitleText>
        <ButtonGroup position="">
          <ModalOpenBtn
            buttonName="일감추가"
            modalWidth="400px"
            modalProps={setModalProps}
          ></ModalOpenBtn>
        </ButtonGroup>
      </GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <TodoIndex filter={"active"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodoIndex filter={"completed"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodoIndex filter={filter} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodosHeader
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoIndex filter={filter} />
          </Box>
        </GridCol>
      </GridWrap>

      <GridTitle className="mt20">투두리스트2</GridTitle>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            {currentDate}
            <br />
            {currenttime}
          </Box>
        </GridCol>
        <GridCol>
          <Box>2</Box>
        </GridCol>
        <GridCol>
          <Box>3</Box>
        </GridCol>
        <GridCol>
          <Box>4</Box>
        </GridCol>
      </GridWrap>
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          width={modalProps.modalWidth}
        >
          <Addtodo></Addtodo>
        </Modal>
      )}
    </>
  );
}

function ModalOpenBtn({ modalWidth, buttonName, modalProps }) {
  const openModal = () => {
    console.log(num++);
    modalProps({ visible: true, modalWidth });
  };

  return (
    <button
      onClick={openModal}
      className="common_btn btn_sm btn_default bt__detail_view"
    >
      {buttonName}
    </button>
  );
}

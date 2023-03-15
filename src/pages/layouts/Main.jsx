import React, { useEffect, useCallback, useState, useContext } from "react";
import "../../circle_percentage.css";
import moment, {
  current,
  currentDate,
  Currenttime,
  dayWork,
  getData,
} from "../../components/Current";
import CalendarSmall from "../../components/dashboard/CalendarSmall";
// import CalendarTimeline from "../../components/dashboard/CalendarTimeline";
import TodoAchievementChart from "../../components/todos/TodoAchievementChart";
import {
  Box,
  BoxHead,
  BoxCont,
  CommontitleH3,
  CommonSummary,
  GridCol,
  GridWrap,
  ButtonWrapper,
} from "../../components/Style";
import Reviews from "../reviews/Reviews";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import TodoIndex from "../todos/TodoIndex";
import Addtodo from "../../components/todos/Addtodo";
import TodosCategorySet from "../../components/todos/TodosCategorySet";

// const filters = ["all", "active", "completed"];
export default function Main() {
  const [modalProps, setModalProps] = useState([]);
  // const [filter, setFilter] = useState(filters[0]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <Currenttime></Currenttime>
      <CommontitleH3>제목1</CommontitleH3>
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
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <CalendarSmall />
            {/* <div className="text_center bold">Selected Date: {sDate}</div> */}
          </Box>
        </GridCol>
      </GridWrap>

      <CommontitleH3 className="mt20">
        투두리스트1
        <ButtonWrapper position="">
          <ModalOpenBtn
            modalWidth="400px"
            className=""
            children={<Addtodo modalProps={setModalProps} />}
            buttonName="일감추가"
            modalProps={setModalProps}
          />
          <ModalOpenBtn
            modalWidth="500px"
            className=""
            children={<TodosCategorySet modalProps={setModalProps} />}
            buttonName="카테고리 설정"
            modalProps={setModalProps}
          />
        </ButtonWrapper>
      </CommontitleH3>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <TodoIndex filter={"category1"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodoIndex filter={"category2"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>{/* <TodoIndex filter={"category3"} /> */}</Box>
        </GridCol>
        <GridCol>
          <Box>
            {/* <TodoIndex filter={"category4"} /> */}
            {/* <TodoIndex filter={filter} />  */}
          </Box>
        </GridCol>
      </GridWrap>

      <CommontitleH3 className="mt20">투두리스트2</CommontitleH3>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            {currentDate}
            <br />
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

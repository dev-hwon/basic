import React from "react";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "../../components/Style";

// const tabinfo = [
//   { tabname: "카테고리1", tabcontent: <FaqCategory1 /> },
//   { tabname: "카테고리2", tabcontent: <FaqCategory3 /> },
//   { tabname: "카테고리3", tabcontent: <FaqCategory3 /> },
//   { tabname: "카테고리4", tabcontent: <FaqCategory4 /> },
// ];
// function Tabcontent({ tabStatus }) {
//   return <div className="tabContent">{tabinfo[tabStatus].tabcontent}</div>;
// }
// function TabMenu({ tabStatus, setTabStatus }) {
//   const handleClick = (status) => {
//     setTabStatus(status);
//   };
//   return (
//     <div className="setting_header">
//       <ul>
//         {tabinfo.map((d, idx) => (
//           <li key={idx} className={idx === tabStatus ? "active" : ""}>
//             <button onClick={() => handleClick(idx)}>{d.tabname}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
export default function Guide() {
  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">서비스 가이드</CommontitleH4>
          <CommonSummary>
            메디밸류 클리닉 업무 관리의 이용 방법을 알아봐요
          </CommonSummary>
        </GridCol>
      </GridWrap>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">자주찾는 질문</CommontitleH4>
        </GridCol>
        <GridCol>
          {/* <TabMenu tabStatus={tabStatus} setTabStatus={setTabStatus} /> */}
        </GridCol>
      </GridWrap>
      {/* <Tabcontent tabStatus={tabStatus} /> */}
    </>
  );
}

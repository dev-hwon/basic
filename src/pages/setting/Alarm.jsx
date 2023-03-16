import React, { useState } from "react";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "../../components/Style";
export default function Alarm() {
  const [alarmPcA, setAlarmPcA] = useState(false);
  const [alarmPcB, setAlarmPcB] = useState(false);
  const [alarmChromeA, setAlarmChromeA] = useState(false);
  const [alarmChromeB, setAlarmChromeB] = useState(false);
  const handleClickPcAll = () => {
    setAlarmPcA(true);
    setAlarmPcB(true);
  };
  const handleClickChromeAll = () => {
    setAlarmChromeA(true);
    setAlarmChromeB(true);
  };

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">알람 설정</CommontitleH4>
          <CommonSummary>메디밸류 알람을 설정해 보세요.</CommonSummary>
        </GridCol>
      </GridWrap>
      <GridWrap colGap={16} colWidth="33.3333%">
        <GridCol>PC 웹페이지</GridCol>
        <GridCol>
          <div>
            <div>모든 알람 받기</div>
            <div>클리닉 업무관리 우측 알림 영역에서 볼 수 있어요</div>
            <button
              onClick={handleClickPcAll}
              className={alarmPcA && alarmPcB ? "active" : ""}
            >
              버튼
            </button>
          </div>
          <div className="">
            <div>MV재료 알람 받기</div>
            <div>메디밸류 재료 스토어의 배송 현황 알림을 받아요.</div>
            <button
              onClick={() => setAlarmPcA(true)}
              className={alarmPcA ? "active" : ""}
            >
              ON
            </button>
            <button
              onClick={() => setAlarmPcA(false)}
              className={!alarmPcA ? "active" : ""}
            >
              OFF
            </button>
          </div>
          <div className="">
            <div>MV기공 알람 받기</div>
            <div>메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.</div>
            <button
              onClick={() => setAlarmPcB(true)}
              className={alarmPcB ? "active" : ""}
            >
              ON
            </button>
            <button
              onClick={() => setAlarmPcB(false)}
              className={!alarmPcB ? "active" : ""}
            >
              OFF
            </button>
          </div>
        </GridCol>
      </GridWrap>
      <GridWrap colGap={16} colWidth="33.3333%">
        <GridCol>크롬 브라우저</GridCol>
        <GridCol>
          <div>
            <div>모든 알람 받기</div>
            <div>클리닉 업무관리 우측 알림 영역에서 볼 수 있어요</div>
            <button
              onClick={handleClickChromeAll}
              className={alarmPcA && alarmPcB ? "active" : ""}
            >
              버튼
            </button>
          </div>
          <div className="">
            <div>MV재료 알람 받기</div>
            <div>메디밸류 재료 스토어의 배송 현황 알림을 받아요</div>
            <button
              onClick={() => setAlarmChromeA(true)}
              className={alarmPcA ? "active" : ""}
            >
              ON
            </button>
            <button
              onClick={() => setAlarmChromeA(false)}
              className={!alarmPcA ? "active" : ""}
            >
              OFF
            </button>
          </div>
          <div className="">
            <div>MV기공 알람 받기</div>
            <div>메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.</div>
            <button
              onClick={() => setAlarmChromeB(true)}
              className={alarmPcB ? "active" : ""}
            >
              ON
            </button>
            <button
              onClick={() => setAlarmChromeB(false)}
              className={!alarmPcB ? "active" : ""}
            >
              OFF
            </button>
          </div>
        </GridCol>
      </GridWrap>
    </>
  );
}

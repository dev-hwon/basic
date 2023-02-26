import React, { useState } from "react";

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
      <div>
        <div className="">
          알람 설정<small>메대밸류 알람을 설정해 보세요</small>
        </div>
        <div className="setting_pc">
          <div className="">
            PC 웹페이지
            <small>클리닉 업무관리 우측 알림 영역에서 볼 수 있어요</small>
            <button
              onClick={handleClickPcAll}
              className={alarmPcA && alarmPcB ? "active" : ""}
            >
              모든 알람 받기
            </button>
          </div>
          <div className="">
            <div className="">
              MV재료 알람 받기
              <small>메대밸류 재료 스토어의 배송 현황 알림을 받아요.</small>
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
              MV기공 알람 받기
              <small>메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.</small>
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
          </div>
        </div>
        <div className="setting_chrome">
          <div className="">
            PC 웹페이지
            <small>클리닉 업무관리 우측 알림 영역에서 볼 수 있어요</small>
            <button
              onClick={handleClickChromeAll}
              className={alarmChromeA && alarmChromeB ? "active" : ""}
            >
              모든 알람 받기
            </button>
          </div>
          <div className="">
            <div className="">
              MV재료 알람 받기
              <small>메대밸류 재료 스토어의 배송 현황 알림을 받아요.</small>
              <button
                onClick={() => setAlarmChromeA(true)}
                className={alarmChromeA ? "active" : ""}
              >
                ON
              </button>
              <button
                onClick={() => setAlarmChromeA(false)}
                className={!alarmChromeA ? "active" : ""}
              >
                OFF
              </button>
            </div>
            <div className="">
              MV기공 알람 받기
              <small>메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.</small>
              <button
                onClick={() => setAlarmChromeB(true)}
                className={alarmChromeB ? "active" : ""}
              >
                ON
              </button>
              <button
                onClick={() => setAlarmChromeB(false)}
                className={!alarmChromeB ? "active" : ""}
              >
                OFF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

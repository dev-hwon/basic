import React, { useState } from "react";
import { useEffect } from "react";
import Alarm from "./Alarm";
import Author from "./Author";
import Guide from "./Guide";
export default function SettingIndex() {
  const [tabStatus, setTabStatus] = useState(0);
  useEffect(() => {
    setTabStatus(0);
    return () => {
      setTabStatus(0);
    };
  }, []);

  return (
    <div>
      <div className="setting_header">
        <div className="setting_title">
          설정관리<small>다양한 설정을 직접 관리하세요</small>
        </div>
        <ul>
          <li>
            <button onClick={() => setTabStatus(0)}>글쓴이</button>
          </li>
          <li>
            <button onClick={() => setTabStatus(1)}>알람</button>
          </li>
          <li>
            <button onClick={() => setTabStatus(2)}>서비스 가이드</button>
          </li>
        </ul>
      </div>

      <div className="tabContent">
        <div className={tabStatus === 0 ? "active" : ""}>
          <Author />
        </div>
        <div className={tabStatus === 1 ? "active" : ""}>
          <Alarm />
        </div>
        <div className={tabStatus === 2 ? "active" : ""}>
          <Guide />
        </div>
      </div>
    </div>
  );
}

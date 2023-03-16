import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AchievementDescript = (props) => {
  const { percent } = props;
  return (
    <div className="">
      전체 업무 중{percent}%<br />
      완료되었어요
    </div>
  );
};
const AchievementChart = (props) => {
  const { percent, trackLength } = props;
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  let chartDirection = 0.55;

  return (
    <div style={{ width: "200px", height: "140px" }}>
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0094FF" />
            <stop offset="100%" stopColor="#00AFAF" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="beige"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 90 * 0.6} ${
            2 * Math.PI * 90 * 0.4
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#linear)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 90 * perValue} ${
            2 * Math.PI * 90 * emptyPerValue
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
      </svg>
    </div>
  );
};

export default function TodosAchievementChart({ percent, trackLength }) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <AchievementChart percent={percent} trackLength={trackLength} />
          <AchievementDescript percent={percent} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
const AnimatedCircle = styled.circle`
  animation: circle-fill-animation 1.5s ease;

  @keyframes circle-fill-animation {
    0% {
      stroke-dasharray: 0 ${2 * Math.PI * 90};
    }
  }
`;

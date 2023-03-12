import styled, { keyframes, css } from "styled-components";
export const modalShow = keyframes`
from {
  opacity: 0;
  margin-top: -50px;
}
to {
  opacity: 1;
  margin-top: 0;
}
`;
export const modalBgShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  width: 16px;
  height: 16px;
  min-height: 1px;
  font-size: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  z-index: 10;

  &::before {
    content: "";
    width: 1px;
    height: calc(100% - 2px);
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    content: "";
    width: 1px;
    height: calc(100% - 2px);
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  animation: ${modalBgShow} 0.3s;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => (props.modalWidth ? props.modalWidth : "auto")};
  top: 50%;
  transform: translateY(-50%);
  max-width: 90%;
  max-height: 90%;
  margin: 0 auto;
  padding: 0;
  transition: all 0.4s;
  overflow: auto;
  text-align: center;
  animation: ${modalShow} 0.3s;
`;

// export const ModalHeader = styled.div`
//   position: sticky;
//   top: 0;
//   padding: 0;
//   text-align: left;
//   min-height: 60px;
//   line-height: 60px;
//   background-color: #fff;
//   font-size: 18px;
//   font-weight: bold;
//   line-height: 25px;
// `;
export const ModalContent = styled.div`
  padding: 32px;
`;

export const ModalTitle = styled.div`
  position: sticky;
  top: 0;
  padding: 0;
  text-align: left;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;
export const ModalSummary = styled.div`
  font-size: 12px;
  color: #aaa;
  text-align: left;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowarp;
  margin-top: 4px;
`;
export const ButtonWrapper = styled.div`
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
export const CancelButton = styled.button`
  width: 96px;
  border-radius: 32px;
`;
export const ConfirmButton = styled.button`
  width: 96px;
  border-radius: 32px;
`;

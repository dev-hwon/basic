import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import Portal from "./Portal";

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner vertical_scroll">
          <ModalHeader>
            {closable && (
              <CloseButton className="modal-close" onClick={close} />
            )}
          </ModalHeader>
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const modalShow = keyframes`
from {
  opacity: 0;
  margin-top: -50px;
}
to {
  opacity: 1;
  margin-top: 0;
}
`;
const modalBgShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  width: 40px;
  height: 40px;
  background-color: #fff;

  &::before {
    content: "";
    width: 1px;
    height: 90%;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    content: "";
    width: 1px;
    height: 90%;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const ModalWrapper = styled.div`
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

const ModalOverlay = styled.div`
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

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0 0 30px;
  transition: all 0.4s;
  max-height: 90%;
  overflow: auto;
  text-align: center;
  animation: ${modalShow} 0.3s;
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 0;
  text-align: center;
  min-height: 60px;
  line-height: 60px;
  background-color: #fff;
`;
export default Modal;

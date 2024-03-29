import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";
import {
  CloseButton,
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  ModalContent,
} from "../Style";

export function ModalOpenBtn({
  modalWidth,
  className,
  buttonName,
  // title,
  children,
  modalProps,
}) {
  const openModal = () => {
    modalProps({
      visible: true,
      modalWidth: modalWidth,
      maskClosable: true,
      closable: true,
      className: className,
      // title: title,
      children: children,
    });
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

export default function Modal({
  visible,
  modalWidth,
  className,
  onClose,
  maskClosable,
  closable,
  // title,
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
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner
          className="modal-inner"
          tabIndex={0}
          modalWidth={modalWidth}
        >
          {closable && <CloseButton className="modal-close" onClick={close} />}
          {/* <ModalHeader className="modal_haed">{title}</ModalHeader> */}
          <ModalContent>{children}</ModalContent>
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

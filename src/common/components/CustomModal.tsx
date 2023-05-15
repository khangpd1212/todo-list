import { Modal, ModalProps } from "antd";
import React from "react";

interface CustomModalProps {
  children: React.ReactNode;
}
export default function CustomModal(props: ModalProps & CustomModalProps) {
  return <Modal {...props}>{props.children}</Modal>;
}

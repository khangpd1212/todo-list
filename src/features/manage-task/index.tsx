import { PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useState } from "react";
import { styled } from "styled-components";
import CustomButton from "../../common/components/CustomButton";
import CustomModal from "../../common/components/CustomModal";
import CardProcess from "./components/CardProcess";
import CustomCard from "./components/CustomCard";
import FormTask from "./components/FormTask";

function ManageTask() {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const style = {
    button: {
      justifyContent: "flex-start",
    },
  };

  const showModalAdd = () => {
    setOpenModal(true);
  };
  const cancelModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <ContainerCard>
        <WrapperCard>
          <CardProcess />
          <ContainerItemCard>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </ContainerItemCard>
          <CustomButton type="text" style={style.button} onClick={showModalAdd}>
            <PlusOutlined /> Add new task
          </CustomButton>
        </WrapperCard>
        <WrapperCard>
          <CardProcess />
          <ContainerItemCard>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </ContainerItemCard>
        </WrapperCard>
      </ContainerCard>
      <CustomModal
        open={openModal}
        onCancel={cancelModal}
        title="Create a new task"
        okText="Create"
        cancelText="Cancel"
      >
        <FormTask form={form} />
      </CustomModal>
    </>
  );
}
const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 94%;
`;
const ContainerCard = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
`;
const ContainerItemCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0%;
  margin-bottom: 24.5px;
`;
export default ManageTask;

import { PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CustomButton from "../../common/components/CustomButton";
import CustomModal from "../../common/components/CustomModal";
import { RootState, useAppDispatch } from "../../store/store";
import CardProcess from "./components/CardProcess";
import CustomCard from "./components/CustomCard";
import FormTask from "./components/FormTask";
import { Article, RequestArticle } from "./state/ManageTaskState";
import { getTask, getTasks, updateTask } from "./state/manageTaskActions";

const style = {
  button: {
    justifyContent: "flex-start",
  },
};
function ManageTask() {
  const dispatch = useAppDispatch();
  const { loading, data } = useSelector((state: RootState) => state.manageTask);
  const [form] = Form.useForm<RequestArticle>();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    data.article && initialValuesForm(data.article);
  }, [data.article]);

  const showModalUpdate = (slug: string) => {
    setOpenModal(true);
    dispatch(getTask(slug));
  };

  const initialValuesForm = (data: Article) => {
    console.log(data);
    if (data)
      form.setFieldsValue({
        title: data.title,
        body: data.body,
        description: data.description,
        tagList: data.tagList,
      });
  };
  const cancelModal = () => {
    setOpenModal(false);
  };

  const submitModal = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setOpenModal(false);
        handleUpdateTask(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleUpdateTask = (values: RequestArticle) => {
    if (data.article) {
      dispatch(
        updateTask({
          slug: data.article.slug,
          articleData: { ...values, body: "", tagList: [] },
        })
      ).then(() => dispatch(getTasks()));
    }
  };

  return (
    <>
      <ContainerCard>
        <WrapperCard>
          <CardProcess title="Open" />
          <ContainerItemCard>
            {data &&
              data.articles.map((task) => (
                <CustomCard
                  key={task.id}
                  heading={task.title}
                  description={task.description}
                  onClick={() => showModalUpdate(task.slug)}
                />
              ))}
          </ContainerItemCard>
          <CustomButton type="text" style={style.button}>
            <PlusOutlined /> Add new task
          </CustomButton>
        </WrapperCard>
        <WrapperCard>
          <CardProcess title="Open" count={10} />
          <ContainerItemCard>
            {/* <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard /> */}
          </ContainerItemCard>
        </WrapperCard>
      </ContainerCard>
      <CustomModal
        open={openModal}
        onOk={submitModal}
        onCancel={cancelModal}
        title="Update a task"
        okText="Update"
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
  padding: 12px;
  border: 1px solid rgba(35, 35, 35, 0.2);
  border-radius: 8px;
`;
export default ManageTask;

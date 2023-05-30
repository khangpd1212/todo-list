import { PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import CustomButton from "../../common/components/CustomButton";
import CustomModal from "../../common/components/CustomModal";
import { StatusTask } from "../../common/types/common";
import { RequestTask, Task } from "../../common/types/task";
import { addTask, getTasks, updateTask } from "../../services/task";
import CardProcess from "./components/CardProcess";
import CardTextArea from "./components/CardTextArea";
import CustomCard from "./components/CustomCard";
import FormTask from "./components/FormTask";
import { ContainerFlexButton } from "../../common/styles";

function ManageTask() {
  const [form] = Form.useForm<Task>();
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isActionAdd, setIsActionAdd] = useState(false);
  const [titleTask, setTitleTask] = useState("");
  const itemCardRef = useRef<HTMLDivElement>();
  const taskId = useRef("");

  const fetchTasks = () => {
    getTasks((docs) => {
      const data = docs.map((doc) => ({ ...doc.data(), id: doc.id } as Task));
      setTasks(data);
    });
  };

  useEffect(() => fetchTasks(), []);

  const showModalUpdate = (id: string) => {
    taskId.current = id;
    setOpenModal(true);
    const getTask = tasks.find((task) => task.id === id);
    initialValuesForm(getTask);
  };

  const toggleShowInputTask = () => {
    // itemCardRef.current.;
    return setIsActionAdd(!isActionAdd);
  };

  const initialValuesForm = (task?: Task) => {
    form.setFieldsValue({
      title: task?.title,
      description: task?.description,
      // image: task.image,
    });
  };

  const cancelModal = () => {
    setOpenModal(false);
  };

  const handleUpdateTask = (values: RequestTask) => {
    updateTask(taskId.current, values);
  };

  const handleAddTask = () => {
    addTask(titleTask);
    setIsActionAdd(false);
  };

  const submitModal = () => {
    form
      .validateFields()
      .then((values) => {
        const data = {
          ...values,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          status: StatusTask.OPEN,
        };
        handleUpdateTask(data);
        form.resetFields();
        setOpenModal(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onChangeTextArea = (value: string) => {
    setTitleTask(value);
  };

  function BtnAddTitle() {
    return (
      <>
        {isActionAdd ? (
          <ContainerFlexButton>
            <StyleBtnAdd type="primary" onClick={handleAddTask} isWidthAuto>
              Save
            </StyleBtnAdd>
            <StyleBtnAdd onClick={toggleShowInputTask} isWidthAuto>
              Cancel
            </StyleBtnAdd>
          </ContainerFlexButton>
        ) : (
          <StyleBtnAdd type="text" onClick={toggleShowInputTask}>
            <PlusOutlined /> Add new task
          </StyleBtnAdd>
        )}
      </>
    );
  }
  return (
    <>
      <ContainerCard>
        <WrapperCard>
          <CardProcess title="Open" />
          <ContainerItemCard ref={itemCardRef}>
            {tasks &&
              tasks.map((task) => (
                <CustomCard
                  key={task.id}
                  title={task.title}
                  imgSrc={task.image}
                  description={task.description}
                  onClick={() => showModalUpdate(task.id)}
                />
              ))}
            {isActionAdd && (
              <CardTextArea
                placeholder="Input title for this task"
                callback={onChangeTextArea}
              />
            )}
          </ContainerItemCard>
          <BtnAddTitle />
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
        okText="Save"
        cancelText="Cancel"
      >
        <FormTask form={form} />
      </CustomModal>
    </>
  );
}

const StyleBtnAdd = styled(CustomButton)`
  text-align: left;
  padding: 6px 20px;
`;

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
  margin-bottom: 16.5px;
  padding: 12px;
  border: 1px solid rgba(35, 35, 35, 0.2);
  border-radius: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default ManageTask;

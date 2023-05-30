import { notification } from "antd";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";
import { RequestTask, Task } from "../common/types/task";

const collectionRefTasks = collection(db, "tasks");

const getTasks = (
  callback: (doc: QueryDocumentSnapshot<DocumentData>[]) => void
) => {
  return onSnapshot(
    collectionRefTasks,
    (snapshot) => {
      callback(snapshot.docs);
    },
    (error) => {
      notification.error({
        message: "Manage Task",
        description: error.message,
      });
    }
  );
};

const getTask = async (id: string) => {
  try {
    const docRefOneTask = doc(collectionRefTasks, id);
    const docSnap = await getDoc(docRefOneTask);
    if (docSnap.exists()) {
      return docSnap.data() as Task;
    } else {
      notification.error({
        message: "Manage Task",
        description: "Could not find document!",
      });
    }
  } catch (error: any) {
    notification.error({
      message: "Manage Task",
      description: error.message,
    });
  }
};

const updateTask = async (id: string, task: RequestTask) => {
  try {
    const data = {
      ...task,
      timestamp: serverTimestamp(),
    };
    const docRefOneTask = doc(collectionRefTasks, id);
    await updateDoc(docRefOneTask, data);
    notification.success({
      message: "Manage Task",
      description: "Update task successfully",
    });
  } catch (error: any) {
    notification.error({
      message: "Manage Task",
      description: error.message,
    });
  }
};

const addTask = async (title: string) => {
  try {
    const data = {
      title,
      timestamp: serverTimestamp(),
    };
    await addDoc(collectionRefTasks, data);
    notification.success({
      message: "Manage Task",
      description: "Add task successfully",
    });
  } catch (error: any) {
    notification.error({
      message: "Manage Task",
      description: error.message,
    });
  }
};
export { getTasks, getTask, updateTask, addTask };

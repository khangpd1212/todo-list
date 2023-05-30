import { StatusTask } from "./common";

export interface Task {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface RequestTask {
  title: string;
  description: string;
  status: StatusTask;
}

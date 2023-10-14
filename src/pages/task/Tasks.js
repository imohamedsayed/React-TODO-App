import { useLoaderData } from "react-router-dom";
import TasksList from "../../components/TasksList";

const Tasks = () => {
  const tasks = useLoaderData();

  return (
    <div className="tasks">
      <TasksList tasks={tasks} />
    </div>
  );
};

// loader function
export const tasksLoader = async () => {
  return [];
};
export default Tasks;

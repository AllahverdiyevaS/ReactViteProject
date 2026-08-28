import TaskCard from "./TaskCard";

const TasksList = ({ tasks }) => {
  return (
    <>
      <h1>Tasks List</h1>
      <div className="task_list">
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
      </div>
    </>
  );
};

export default TasksList;

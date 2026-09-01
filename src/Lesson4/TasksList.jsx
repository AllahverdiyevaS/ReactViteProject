import TaskCard from "./TaskCard";

const TasksList = ({ tasks, onDelete }) => {
  return (
    <>
      <h1>Tasks List</h1>
      <div className="task_list">
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default TasksList;

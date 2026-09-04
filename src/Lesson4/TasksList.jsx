import TaskCard from "./TaskCard";

const TasksList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <>
      <h1>Tasks List</h1>
      <div className="task_list">
        {tasks.map((task, index) => (
          <TaskCard
            task={task}
            key={index}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default TasksList;

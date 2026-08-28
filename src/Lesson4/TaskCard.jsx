const TaskCard = ({ task }) => {
  return (
    <div className="task_card">
      <h4>{task.title}</h4>
      <h4>Task description</h4>
      <p>{task.description}</p>
      <div className="button_container">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;

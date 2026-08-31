const TaskCard = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  return (
    <div className="task_card">
      <h1>{task.title}</h1>
      <h4>Task description</h4>
      <p>{task.description}</p>
      <div className="button_container">
        <button onClick={handleDeleteClick}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;

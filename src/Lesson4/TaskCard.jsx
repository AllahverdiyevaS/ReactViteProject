import { useState } from "react";
import TaskCreatForm from "./TaskCreatForm";
const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(true);
  };
  const handleSubmit = (id, title, description) => {
    setShowEdit(false);

    onUpdate(id, title, description);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreatForm task={task} updateTask={true} onUpdate={handleSubmit} />
      ) : (
        <div className="task_card">
          <h1>{task.title}</h1>
          <h4>Task description</h4>
          <p>{task.description}</p>
          <div className="button_container">
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;

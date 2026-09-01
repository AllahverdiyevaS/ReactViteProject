import { useState } from "react";

const TaskCreatForm = ({ onCreate, task, updateTask }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onCreate(title, description);
    setTitle("");
    setDescription("");
  }
  return (
    <>
      {updateTask ? (
        <div className="edit_container">
          <h1>Edit Task</h1>
          <form className="form_edit">
            <label>Title</label>
            <input
              type="text"
              className="title_input"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Description</label>
            <textarea
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button className="create_button" onClick={handleSubmit}>
              Save changes
            </button>
          </form>
        </div>
      ) : (
        <div className="form_container">
          <h1>Create Task</h1>
          <form className="form">
            <label>Title</label>
            <input
              type="text"
              className="title_input"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Description</label>
            <textarea
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button className="create_button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default TaskCreatForm;

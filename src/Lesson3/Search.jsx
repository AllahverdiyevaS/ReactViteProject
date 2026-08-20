import { useState } from "react";

const Search = ({ search }) => {
  const [valueInput, setValueInput] = useState("");
  const handleChangeInput = (event) => {
    setValueInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input_for_search"
          type="text"
          placeholder="Ne axtarirsiz?"
          value={valueInput}
          onChange={handleChangeInput}
        />
      </form>
    </div>
  );
};

export default Search;

import { useDispatch } from "react-redux";
import { deleteItem, checkComplete } from "../redux-store/itemSlice";
import { Item } from "../interfaces";

const TodoItem = ({ id, title, selectedColor, completed }: Item) => {
  const dispatch = useDispatch();

  const handleCheckComplete = () => {
    dispatch(checkComplete({ id: id, completed: !completed }));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem({ id: id }));
  };
  return (
    <li
      style={{ backgroundColor: `${selectedColor}` }}
      className={`list-group-item ${completed && "list-group-item-success"}`}
    >
      <div className="d-flex justify-content-between">
        <span
          className="d-flex align-items-center"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCheckComplete}
          ></input>
          {title}
        </span>
        <button onClick={handleDeleteItem} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

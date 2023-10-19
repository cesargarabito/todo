import { Item, RootState } from "../interfaces";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodoList = () => {
  const items = useSelector((state: RootState) => state.items);

  return (
    <ul className="list-group justify-content-center">
      <h3>List:</h3>
      <h5>
        {items.length === 0 ? (
          <span style={{ fontStyle: "italic", color: "lightgray" }}>Empty</span>
        ) : null}
      </h5>

      {items.map((item: Item) => (
        <TodoItem
          id={item.id}
          title={item.title}
          selectedColor={item.selectedColor}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;

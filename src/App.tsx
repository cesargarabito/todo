import "bootstrap/dist/css/bootstrap.min.css";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import TotalItems from "./components/TotalItems";

const App = () => {
  return (
    <div className="container p-4 mt-5">
      <h1>Simple TODO List App</h1>
      <AddItem />
      <TodoList />
      <TotalItems />
    </div>
  );
};

export default App;

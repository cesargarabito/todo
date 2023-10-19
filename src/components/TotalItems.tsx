import { useSelector } from "react-redux";
import { RootState } from "../interfaces";

const TotalItems = () => {
  const itemsCount = useSelector((state: RootState) => {
    return state.items;
  });
  return <h4 className="mt-3">Total Items: {itemsCount.length}</h4>;
};

export default TotalItems;

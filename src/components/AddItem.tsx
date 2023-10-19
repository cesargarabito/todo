import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux-store/itemSlice";
import axios from "axios";
import ColorOption, { SelectChangeEvent } from "../redux-store/interfaces";

const AddItem = () => {
  const [value, setValue] = useState<string>("");
  const [color, setColor] = useState<ColorOption[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const dispatch = useDispatch();
  const colors = async () => {
    try {
      const response = await axios.get(
        "https://www.colr.org/json/colors/random/10"
      );
      setColor(response.data.colors);
    } catch (error) {}
  };
  useEffect(() => {
    colors();
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addItem({
        title: value,
        selectedColor: selectedColor,
      })
    );
    setValue("");
    setSelectedColor("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form-inline mt-3 mb-3 justify-content-center"
    >
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="What do you need to do?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      ></input>
      <select
        className="form-control mb-2 mr-sm-2 form-control-sm"
        style={{ backgroundColor: `${selectedColor}` }}
        value={selectedColor}
        onChange={(e: SelectChangeEvent) => setSelectedColor(e.target.value)}
        required
      >
        <option style={{ backgroundColor: "#fff" }} value="">
          Select a color
        </option>
        {color.map((colorOption: ColorOption) => (
          <option
            key={colorOption.id}
            style={{ backgroundColor: `#${colorOption.hex}` }}
            value={`#${colorOption.hex}`}
          >
            <span></span>
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddItem;

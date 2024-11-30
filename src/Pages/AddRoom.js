import React, { useContext, useState } from "react";
import { RoomContext } from "../RoomProvider";
import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRoom = () => {
  const { allRooms, setAllRooms } = useContext(RoomContext);
  const [selctedValue, setSlectedValue] = useState("Choose New Room");
  const [nameRoom, setNameRoom] = useState("");
  const [colorRoom, setColorRoom] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { setHasUpdate } = useContext(RoomContext);
  const nav = useNavigate();

  const validNameRoom = (name) => {
    if (name.length <= 9) {
      setNameRoom(name);
    } else {
      toast.error("Room name cannot be more than 9 characters.");
    }
  };
  const handleColorChange = (color) => {
    setColorRoom(color.hex);
  };
  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };
  const addroom = () => {
    if (colorRoom && nameRoom !== "" && selctedValue !== "Choose New Room") {
      const room = {
        id: allRooms.length + 1,
        whichRoom: selctedValue,
        roomName: nameRoom,
        roomColor: colorRoom,
        products: [],
        productsStatus: [],
      };
      setAllRooms([...allRooms, room]);
      nav("/");
    } else {
      toast.error("Error");
      setHasUpdate(false);
      nav("/");
    }
  };
  return (
    <div className="container-addroom">
      <select
        value={selctedValue}
        onChange={(e) => setSlectedValue(e.target.value)}
      >
        <option disabled>Choose New Room</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <input
        type="text"
        placeholder="Enter Room Name"
        value={nameRoom}
        onChange={(e) => validNameRoom(e.target.value)}
      ></input>
      <div>
        <button onClick={toggleColorPicker}>
          {showColorPicker ? "Close Color Picker" : "Choose Room Color"}
        </button>
      </div>
      {showColorPicker && (
        <div>
          <SketchPicker
            color={colorRoom}
            onChangeComplete={handleColorChange}
          />
        </div>
      )}
      <button onClick={addroom}>Add</button>
      <ToastContainer />
    </div>
  );
};

export default AddRoom;

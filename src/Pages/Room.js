import React, { useContext, useState } from "react";
import { RoomContext } from "../RoomProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ProductDetails from "../Components/ProductDetails";
import "react-toastify/dist/ReactToastify.css";

const Room = () => {
  const { allRooms, setAllRooms } = useContext(RoomContext);
  const { roomId } = useParams();
  const nav = useNavigate();
  const roomIndex = roomId - 1;
  const room = allRooms[roomIndex];
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const productsInRoom = room.products || [];
  const productsStatus = room.productsStatus || [];
  const handleAddProduct = () => {
    if (selectedProduct === "Stereo" && productsInRoom.includes("Stereo")) {
      toast.error("Error");
      return;
    }
    if (selectedProduct === "Water Heater" && room.whichRoom !== "Bathroom") {
      toast.error("Error");
      return;
    }
    if (productsInRoom.length >= 5) {
      toast.error("Error");
      return;
    }
    const updatedRoom = {
      ...room,
      products: [...productsInRoom, selectedProduct],
      productsStatus: [...productsStatus, false],
    };

    const updatedRooms = [...allRooms];
    updatedRooms[roomIndex] = updatedRoom;

    setAllRooms(updatedRooms);

    setShowAddProduct(false);
  };
  const add = () => {
    setShowAddProduct(true);
  };
  const toggleProduct = (index, isOn) => {
    const updatedRoom = { ...room };
    updatedRoom.productsStatus[index] = isOn;

    const updatedRooms = [...allRooms];
    updatedRooms[roomIndex] = updatedRoom;

    setAllRooms(updatedRooms);
  };
  const back = () => {
    nav("/");
  };
  return (
    <div className="room">
      <div className="room-container">
        <div className="room-details">
          <p>Name of room : {room.roomName}</p>
          <p>Wiche Room : {room.whichRoom}</p>
          <button className="btn-add-room-page" onClick={add}>
            Add
          </button>
        </div>

        {showAddProduct && (
          <div className="add-product-container">
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Choose a product</option>
              <option value="Air Conditioner">Air Conditioner</option>
              <option value="Water Heater">Water Heater</option>
              <option value="Stereo">Stereo</option>
              <option value="Lamp">Lamp</option>
            </select>
            <button onClick={handleAddProduct}>Add</button>
          </div>
        )}
        <div className="product-details-container">
          {productsInRoom.length > 0 &&
            productsInRoom.map((product, index) => (
              <ProductDetails
                key={index}
                product={product}
                index={index}
                isOn={productsStatus[index]} // Pass the current status of the product
                toggleProduct={toggleProduct} // Function to toggle the product's state
              />
            ))}
        </div>
        <ToastContainer />
      </div>

      <button className="btn-room-back" onClick={back}>
        back
      </button>
    </div>
  );
};

export default Room;

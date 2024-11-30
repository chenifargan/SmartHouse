import React from "react";
import { useContext } from "react";
import { RoomContext } from "../RoomProvider";
import { useNavigate } from "react-router-dom";
import Room from "../Components/Room";

const Home = () => {
  const { hasUpdate, setHasUpdate } = useContext(RoomContext);
  const { allRooms } = useContext(RoomContext);
  const nav = useNavigate();
  const chooseNew = () => {
    // setHasUpdate(true);
    nav("/addroom");
  };
  const handleRoomClick = (roomId) => {
    nav(`/room/${roomId}`);
  };
  return (
    <div className="container-home">
      <div className="room-list-container">
        {allRooms.length > 0 &&
          allRooms.map((room, index) => (
            <div
              key={index}
              className="room-item"
              onClick={() => handleRoomClick(room.id)}
            >
              <Room key={index} room={room} />
            </div>
          ))}
      </div>
      <button className="btn-add-room" onClick={chooseNew}>
        +
      </button>
    </div>
  );
};

export default Home;

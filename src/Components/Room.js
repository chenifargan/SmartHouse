import React from "react";

const Room = ({ room }) => {
  return (
    <div
      className="room-card"
      style={{
        backgroundColor: room.roomColor,
        padding: "15px",
        borderRadius: "10px",
        width: "150px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

        color: "#fff",
      }}
    >
      <h3>{room.roomName}</h3>
    </div>
  );
};

export default Room;

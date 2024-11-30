import React, { createContext, useState } from "react";
export const RoomContext = createContext();
export const RoomProvider = ({ children }) => {
  const [hasUpdate, setHasUpdate] = useState(false);
  const [allRooms, setAllRooms] = useState([]);
  return (
    <RoomContext.Provider
      value={{ hasUpdate, setHasUpdate, allRooms, setAllRooms }}
    >
      {children}
    </RoomContext.Provider>
  );
};

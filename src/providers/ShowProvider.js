import React, { useContext, createContext, useState } from "react";

const ShowContext = createContext();
const SetShowContext = createContext();

const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <SetShowContext.Provider value={setShow}>
      <ShowContext.Provider value={show}>{children}</ShowContext.Provider>
    </SetShowContext.Provider>
  );
};

export default ShowProvider;

export const useShow = () => useContext(ShowContext);
export const useShowAction = () => useContext(SetShowContext);

import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();
const SetUserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  console.log(user);
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("new"));
    setUser(save);
  }, []);

  useEffect(() => {
    if (user?.length) {
      localStorage.setItem("new", JSON.stringify(user));
    }
  }, [user]);

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
export const useUserAction = () => useContext(SetUserContext);

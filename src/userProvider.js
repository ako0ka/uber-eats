import { useContext, useState, createContext } from "react";

export const UserContext = createContext();
export const UserContextUpdate = createContext();
// export const VisibilityContext = createContext();
// export const VisibilityUpdateContext = createContext();

// export const VisibileState = () => {
//   return useContext(VisibilityContext);
// };

// export const VisibleStateUpdate = () => {
//   return useContext(VisibilityUpdateContext);
// };

export const Shop = () => {
  return useContext(UserContext);
};

export const Updateshop = () => {
  return useContext(UserContextUpdate);
};

const testUrl = require("../assets/images/shopCartTestImage.png");

export const User = () => {
  return useContext(UserContext);
};

// export const UpdateUser = () => {
//   return useContext(UserContextUpdate);
// };

export const UserProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState([]);

  const updateShop = (item) => {
    setShopItems([...shopItems, item]);
  };
  // const [user, setUser] = useState(0);
  // const [visible, setVisible] = useState(false);

  // const changeState = () => {
  //   setVisible((prev) => !prev);
  // };

  // const userLogeed = (user) => {
  //   setUser(user);
  // };

  return (
    <UserContext.Provider value={shopItems}>
      <UserContextUpdate.Provider value={updateShop}>
        {/* <VisibilityContext.Provider value={visible}> */}
        {/* <VisibilityUpdateContext.Provider value={changeState}> */}
        {children}
        {/* </VisibilityUpdateContext.Provider> */}
        {/* </VisibilityContext.Provider> */}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};

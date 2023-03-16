import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  const style = {
    logoutButton: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
  };

  return <button className={style.logoutButton} onClick={() => auth.signOut()}>Log Out</button>;
};

export default LogOut;

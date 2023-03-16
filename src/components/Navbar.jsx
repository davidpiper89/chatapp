import React from "react";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const style = {
    navContainer: `flex justify-center mt-5`,
    title: `py-2 px-4 font-bold`,
  };
  return (
    <nav className={style.navContainer}>
      <div className={style.title}>Piper's Chat</div>
      <div>{user ? <LogOut /> : ""}</div>
    </nav>
  );
};

export default Navbar;

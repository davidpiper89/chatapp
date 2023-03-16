import React from "react";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const style = { navContainer: `flex justify-center gap-20 mt-5` };
  return (
    <nav className={style.navContainer}>
      <div>Piper's Chat</div>
      <div>{user ? <LogOut /> : ""}</div>
    </nav>
  );
};

export default Navbar;

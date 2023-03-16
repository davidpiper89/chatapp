import React from "react";
import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";

function App() {
  const [user] = useAuthState(auth);

  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col items-center h-[90vh] bg-gray-100 mt-10 shadow-xl border relative `,
  };

  return (
    <div className={style.appContainer}>
      <Navbar />
      <section className={style.sectionContainer}>
        {user ? <ChatRoom /> : <Signin />}
      </section>
    </div>
  );
}

export default App;

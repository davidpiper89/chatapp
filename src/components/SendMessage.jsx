import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const style = {
    sendButton: `bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`,
    sendMessage: `py-2 px-4 rounded border border-black`,
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message === "") {
      alert("please enter a valid message");
      return;
    }

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <form onSubmit={sendMessage}>
      <input
        value={message}
        onInput={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Message"
        className={style.sendMessage}
      ></input>
      <button className={style.sendButton}>Send</button>
    </form>
  );
};

export default SendMessage;

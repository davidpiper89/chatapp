import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

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
    scroll.current.scollIntoView({ behaviour: "smooth" });
  };
  return (
    <form onSubmit={sendMessage}>
      <input
        value={message}
        onInput={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Message"
      ></input>
      <button>Send</button>
    </form>
  );
};

export default SendMessage;

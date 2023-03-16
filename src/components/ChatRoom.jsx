import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main>
        {messages && messages.map((msg) => <Message key={msg.id} msg={msg} />)}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chatroom;

import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, datebase } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();

    if (!channelId) {
      return false;
    }

    datebase.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      avatar: user?.photoURL,
    });

    chatRef?.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <InputContainer>
      <form action="post">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </InputContainer>
  );
}

export default ChatInput;

const InputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    outline: none;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid gray;
    width: 60%;
    @media (max-width: 660px) {
      width: 40%;
    }
  }

  > form > button {
    display: none !important;
  }
`;

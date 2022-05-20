import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { datebase } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName,channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();

    if (!channelId) {
      return false;
    }

    datebase.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: serverTimestamp(),
      user: "Test User",
      avatar: "https://i.stack.imgur.com/dr5qp.jpg",
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
  }

  > form > button {
    display: none !important;
  }
`;

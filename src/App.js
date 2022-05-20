import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppContentBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />}></Route>
            </Routes>
          </AppContentBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppContentBody = styled.div`
  display: flex;
  height: 100vh;
`;

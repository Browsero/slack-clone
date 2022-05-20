import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : <>
          <Header />
          <AppContentBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />}></Route>
            </Routes>
          </AppContentBody>
        </>}
        
      </Router>
    </div>
  );
}

export default App;

const AppContentBody = styled.div`
  display: flex;
  height: 100vh;
`;

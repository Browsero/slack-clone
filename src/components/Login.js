import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { auth, provider, providerGithub } from '../firebase';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    const signIn = event => {
        event.preventDefault();
        auth.signInWithPopup(provider).catch(err=>{alert(err.message)});
    };
  return (
    <LoginContainer>
        <LoginInner>
            <img alt='logo' src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' />
            <h1>Sign In</h1>
            <p>test.slackclone.com</p>
            <Button onClick={signIn}><GoogleIcon /> Sign in with Google</Button>
        </LoginInner>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
background-color: #f7f7f7;
height: 100vh;
display: grid;
place-items: center
`;

const LoginInner = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
>img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}
>p {
    margin-bottom: 20px;
}
>Button{
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    text-transform: inherit !important;
    background-color: #7A306C;
    color: white;
    :hover{
        background-color: #8E8DBE;
    }
}
`;
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import logo from "./imgs/logo_b.png";

const LoginContainer = styled.div`
  width: 1920px;
  height: 1040px;
  margin: auto;
`;

// ----------------------------------------------------------------------------------

const LoginSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: ;
  margin: auto;
  margin-top: 300px;
  position: relative;
  width: 500px;
  height: 740px;

  text-align: center;
  background: #f4f4f4;
  img {
    margin-top: 30px;
    width: 424px;
    height: 120px;
    margin-bottom: 30px;
  }
`;

const LoginTitle = styled.div`
  width: 500px;
  height: 40px;
  h1 {
    font-weight: bold;
    font-size: 36px;
  }
`;

const InputBox = styled.div`
text-align: center;
 margin-top: 30px;
  width: 480px;
   height: 370px;
  box-sizing: border-box;
  
  text-align: center;
  input {
  border:none;
  padding-left:15px;
  width: 460px;
   height: 60px;
    color: #111111;
    background: #f4f4f4
  font-weight: medium ;
    font-size: 20px;
  
  }
   input:nth-child(2) {
      margin-bottom: 10px;}

}
`;

const IdFind = styled.div`
  float: left;
  margin: 12px 50px 12px 100px;
  width: 90px;
  height: 16px;
  display: flex;

  a {
    text-decoration: none;
  }
  h6 {
    font-weight: regular;
    font-size: 16px;
    color: #111111;
  }
`;
const PwFind = styled.div`
  margin: 12px 100px 12px 30px;
  float: right;
  width: 110px;
  height: 16px;
  display: flex;
  a {
    text-decoration: none;
  }
  h6 {
    font-weight: regular;
    font-size: 16px;
    color: #111111;
  }
`;
const LoginButton = styled.div`
 float: left;
margin-top:12px;
margin-left:10px;
margin-bottom:30px;
display: flex;
align-items: center;
  justify-content: center;
width: 460px;
  height: 60px;
    background:#111111 ;
     color: #ffffff;
      font-weight: medium ;
    font-size: 20px;
  }
`;
const SignupButton = styled.div`
 float: left;
margin-left:10px;
margin-bottom:30px;
display: flex;
align-items: center;
justify-content: center;
width: 460px;
  height: 60px;
    background:#111111 ;
     color: #ffffff;
      font-weight: medium ;
    font-size: 20px;
  }
`;

function SignIn() {
  return (
    <LoginContainer>
      <LoginSection>
        <img src={logo} />
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>

        <InputBox>
          <input type="text" placeholder="아이디"></input>
          <input type="password" placeholder="비밀번호"></input>
          <IdFind>
            <Link to="/findId">
              <h6>아이디찾기</h6>
            </Link>
          </IdFind>
          <PwFind>
            <Link to="/findWd">
              <h6>비밀번호찾기 </h6>
            </Link>
          </PwFind>
          <LoginButton to="/signIn">로그인</LoginButton>
          <SignupButton to="/signup">회원가입</SignupButton>
        </InputBox>
      </LoginSection>
    </LoginContainer>
  );
}

export default SignIn;

import React, { useEffect } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
import Button from "../../Common/Button";

const LoginPage = () => {
  const { data } = useSession();

  console.log(data);

  return (
    <>
      <StyledLogin>
        <Image
          src={"/images/Login/naver.png"}
          width={120}
          height={30}
          alt="naver"
          onClick={() => signIn("naver")}
          priority
        />
        <Image
          src={"/images/Login/kakao.png"}
          width={120}
          height={30}
          alt="naver"
          onClick={() => signIn("kakao")}
          priority
        />
        <Image
          src={"/images/Login/google.png"}
          width={120}
          height={30}
          alt="naver"
          onClick={() => signIn("google")}
          priority
        />
        <Button
          width="130px"
          height="30px"
          border="2px solid #5278ff"
          borderRadius="4px"
          background="transparent"
          color="#5278ff"
          fontWeight="700"
          handler={() => signOut()}
        >
          로그아웃
        </Button>
      </StyledLogin>
    </>
  );
};

export default LoginPage;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;

  img {
    cursor: pointer;
  }
`;

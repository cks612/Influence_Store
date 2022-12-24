import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const GNB_MENU = [
  { id: 1, label: "소개", url: "/introduce" },
  { id: 2, label: "가게 찾기", url: "/store" },
  { id: 3, label: "무료 급식소", url: "/soupKitchen" },
  { id: 4, label: "QnA", url: "/qna" },
];

const Gnb = () => {
  const { data, status } = useSession();
  const [isUserImgClicked, setIsUserImgClicked] = useState(false);

  return (
    <GnbWrapper>
      <Link href="/">
        <Image
          src="/images/Logo/pageLogo.png"
          width={60}
          height={60}
          alt="logo"
          priority
        />
      </Link>

      <GnbMenu>
        {GNB_MENU.map(menu => {
          const { id, label, url } = menu;
          return (
            <Link key={id} href={url}>
              <p>{label}</p>
            </Link>
          );
        })}

        {status === "authenticated" ? (
          <>
            <UserInfoContainer>
              <UserImg>
                <Image
                  src={data.user?.image!}
                  alt="img"
                  width={35}
                  height={35}
                  objectFit="cover"
                  layout="fixed"
                  onClick={() => setIsUserImgClicked(!isUserImgClicked)}
                />
              </UserImg>
            </UserInfoContainer>
            {isUserImgClicked && (
              <UserModalInfo>
                <h3> {data.user?.name}님</h3>
                <hr />
                <h3 onClick={() => signOut()}>로그아웃</h3>
              </UserModalInfo>
            )}
          </>
        ) : (
          <Link href={"/login"}>
            <p>로그인</p>
          </Link>
        )}
      </GnbMenu>
    </GnbWrapper>
  );
};

export default Gnb;

const GnbWrapper = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px 20px;
`;

const GnbMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.2em;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.text2};
    }
  }
`;

const UserInfoContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    ${({ theme }) => theme.widthHeightSize("100%", "100%")}
    content: "";
    position: absolute;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: borderAnimate 4s linear infinite;
  }

  @keyframes borderAnimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const UserImg = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")};
  ${({ theme }) => theme.border("6px solid", "50%")};

  overflow: hidden;
  cursor: pointer;

  img {
    z-index: 1;
  }
`;

const UserModalInfo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: cneter;
  right: -30px;
  top: 60px;
  width: 120px;
  height: 120px;
  padding: 20px 20px;
  border: 2px solid #424242;
  border-radius: 32px;
  background: #fff;
  box-shadow: 2px 3px 5px 0;
  color: #000;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 60px;
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #424242;
  }

  hr {
    width: 90%;
  }

  h3 {
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #5278ff;
    }
  }
`;

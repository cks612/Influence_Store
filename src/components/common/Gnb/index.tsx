import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const GNB_MENU = [
  { id: 1, label: "소개", url: "/introduce" },
  { id: 2, label: "가게 찾기", url: "/store" },
  { id: 3, label: "무료 급식소", url: "/soupKitchen" },
  { id: 4, label: "QnA", url: "/qna" },
  { id: 5, label: "로그인", url: "/login" },
];

const Gnb = () => {
  return (
    <GnbWrapper>
      <Link href="/" as="image">
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

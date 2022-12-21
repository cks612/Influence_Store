import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";
import ContentWrapper from "../../Content/ContentWrapper";
import NewsSwiper from "../../Swiper";

const MainPage = () => {
  return (
    <>
      <ContentWrapper>
        <NewsSwiper />
        <SectionContainer>
          <IntroduceSection>
            <h3>
              &apos;아이들을 돕는다&apos; 라는 공동의 목표로 무료로 음식 등을
              제공하는 &apos;선한 영향력 가게&apos;를 아시나요?
            </h3>

            <p>
              코로나19 장기화로 모두가 어려움을 겪고 있는 상황 속에서도,
              소외계층에 온정을 베푸는 자영업자들이 늘어나고 있습니다. 현재
              전국의 3800여개의 다양한 업종의 소상공인들이 선한 영향력으로
              동참하고 있습니다. 아름답고 따듯한 대한민국을 만들기 위해
              신청해주세요!
            </p>
            <LineThrough />
          </IntroduceSection>

          <RegisterInfluenceStore>
            <Image
              src="/images/pageLogo.png"
              width={200}
              height={200}
              alt="logo"
              priority
            />
            <Link
              href={"https://xn--o39akkz01az4ip7f4xzwoa.com/apply"}
              target="_blank"
            >
              <Button>
                선한영향력 동행 신청<span className="arrow"> &gt; </span>
              </Button>
            </Link>
            <Link href={"https://basket.fund/goodimpact/3"} target="_blank">
              <Button>
                선한영향력 후원하기<span className="arrow"> &gt; </span>
              </Button>
            </Link>
          </RegisterInfluenceStore>
        </SectionContainer>
      </ContentWrapper>
    </>
  );
};

export default MainPage;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const IntroduceSection = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  h3 {
    flex: 0 0 50%;
    color: #000;
    font-size: 1.5em;
    font-weight: 800;
    line-height: 30px;
    z-index: 10;
  }

  p {
    flex: 0 0 50%;
    padding: 10px 10px;
    font-size: 1.1em;
    line-height: 20px;
    font-weight: 300;
  }
`;

const LineThrough = styled.div`
  position: absolute;
  left: 220px;
  top: 50px;
  width: 155px;
  height: 6px;
  background: #17acff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
`;

const arrowAnimate = keyframes`
    0%,100% {
        transform: translateX(5px);
      }
      50% {
        transform: translateX(10px);
      }

`;

const RegisterInfluenceStore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .arrow {
    position: absolute;
    transition: 0.5s;
    animation: ${arrowAnimate} 2s linear infinite;
  }
`;

const Button = styled.button`
  width: 190px;
  height: 50px;
  background: transparent;
  color: #5278ff;
  font-weight: 700;
  border: 2px solid #5278ff;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    border: 2px solid #fff;
    background: #5278ff;
    color: #fff;
  }
`;

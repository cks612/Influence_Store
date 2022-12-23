import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ContentTitle from "../../Content/ContentTitle";

const IntroducePage = () => {
  return (
    <>
      <ContentTitle>
        Inroduce
        <LineThrough />
      </ContentTitle>
      <StyledContainer>
        <Image
          src="/images/Introduce/IntroducePage.png"
          width={950}
          height={500}
          alt="logo"
          priority
        />
        <p>
          전국에 배고프고 어려움을 겪고 있는 아동 소아계층을 위해서 전국의 여러
          소상공인들이 선한 마음으로 아이들의 마음과 몸을 따뜻하게 만들고
          있습니다. <br /> <br />
          이러한 선한 영향력을 뿜고 있는 자영업자들과 아이들을 위해 조금이라도
          도움이 되기 위해 경기도 한정적으로 그들에 대해 소개해 드리고
          싶었습니다. <br /> <br />
          또한 무료 급식소 위치를 보여드림으로서 아이들 뿐만 아니라 어려움을
          겪고 있는 모두가 배고프지 않는 세상을 만들고 싶어서 이 사이트를 만들게
          되었습니다.
        </p>
      </StyledContainer>
    </>
  );
};

export default IntroducePage;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.3em;
  font-weight: 500;
  line-height: 20px;

  img {
    width: 100%;
  }
`;

const LineThrough = styled.div`
  position: absolute;
  left: 5px;
  width: 9%;
  height: 4px;
  background: #17acff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

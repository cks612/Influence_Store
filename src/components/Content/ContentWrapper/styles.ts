import styled from "styled-components";

export const StyledContainer = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "")}
  ${({ theme }) => theme.commonPadding()};
  gap: 50px;
  overflow: hidden;

  .swiper {
    &-wrapper {
      display: flex;
      gap: 20px;
    }
  }
`;

import styled from "styled-components";

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  left: 50%;
  flex-grow: 0;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;

  .picture {
    border-radius: 20px;
  }
`;

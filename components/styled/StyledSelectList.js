import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "90%" : "70%")};
  position: relative;
  height: fit-content;
  border-radius: 5px;

  &.open {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 2px;
    height: fit-content !important;
  }

  button {
    background-color: transparent;
    border: none;
    font-family: Circular Std Bold;
    font-size: 14px;
    width: 100%;
    display: flex;
    padding: 15px 37px 0px 37px;

    &:hover {
      cursor: pointer;
    }
    span {
      font-size: 15px;
      width: 100%;
      text-align: left;
      padding-right: 5px;
    }

    div.arrow-container {
      width: fit-content;
      justify-self: end;
      align-self: center;
      text-align: end;
      padding-right: 0.5%;
      svg {
        &.down {
          transform-origin: center center center;
          transform: scaleY(1);
          transition: 150ms linear all;
        }
        &.up {
          transform-origin: center center center;
          transform: scaleY(-1);
          transition: 150ms linear all;
          stroke-width: 0.3px;
          path {
            fill: #6044f2;
          }
        }
      }
    }
  }
`;

export const StyledDropdownMenu = styled.div`
  position: relative;
  visibility: hidden;
  max-height: 0px;
  height: 0px;
  max-width: 100%;
  width: 100%;
  transition: max-height 0.6s ease !important;
  background-color: white;
  margin-top: 1%;
  z-index: 1000;
  overflow: hidden;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;

  hr {
    border: 0.5px solid #e8e7ee;
  }

  &.visible {
    width: 100%;
    visibility: visible;
    height: 100%;
    max-height: 500px;
    opacity: 1;
    transition: max-height 2.5s ease !important;
  }
`;

export const StyledDropdownItem = styled.div`
  text-align: left;
  margin-top: 8px;
  padding: 15px 17px 15px 17px;
  font-family: Circular Std Medium;
  font-size: 14px;
  overflow-wrap: break-word;
  border-radius: 5px;
  width: 100%;

  &:hover {
    color: #6044f2;
    cursor: pointer;
  }

  &:active {
    background-color: #f1eeff;
    color: #6044f2;
  }
`;

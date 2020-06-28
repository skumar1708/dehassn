import styled from 'styled-components';

const StyledTab = styled.a`
  /* Adapt the colors based on primary prop */
  padding: 20px;
  background: #fff;
  // border-top: ${({ top }) => top}px solid;
  // border-right: ${({ right }) => right}px solid;
  border-bottom: ${({ isSelected }) => isSelected ? "2px solid palevioletred" : ""};
  // border-left: ${({ left }) => left}px solid;
  cursor: pointer;
  float: ${({ float }) => float};
  &:hover {
    background-color: ${({ isBtn }) => isBtn ? "palevioletred" : ""};
    color: ${({ isBtn }) => isBtn ? "#fff" : ""};
    border-bottom: 2px solid palevioletred;
  }
`;

export {
  StyledTab
};
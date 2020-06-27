import styled from 'styled-components';

const StyledTab = styled.a`
  /* Adapt the colors based on primary prop */
  padding: 20px;
  background: #fff;
  border-top: ${({top}) => top}px solid;
  border-right: ${({right}) => right}px solid;
  border-bottom: ${({bottom}) => bottom}px solid;
  border-left: ${({left}) => left}px solid;
  cursor: pointer;
  float: ${({float}) => float};
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export {
  StyledTab
};
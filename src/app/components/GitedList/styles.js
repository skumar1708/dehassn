import styled from 'styled-components';

const StyledUl = styled.ul`
  /* Adapt the colors based on primary prop */
  list-style: none;
  
`;
const StyledLi = styled.li`
  /* Adapt the colors based on primary prop */
  padding: 5px;
  &:hover {
    background: #ccc;
  }
`;

export {
  StyledUl,
  StyledLi
};
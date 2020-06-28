import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from './styles';
const Button = styled(({
    primary,
    label,
    onClick,
    padding
}) => {

  return (
  <StyledButton onClick={onClick} primary={primary} padding={padding}>{label}</StyledButton>
  )
})``
Button.propTypes = {
    primary: PropTypes.bool
};
export {
    Button
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from './styles';
const Button = styled(({
    primary,
    label,
    onClick
}) => {

  return (
  <StyledButton onClick={onClick} primary={primary}>{label}</StyledButton>
  )
})``
Button.propTypes = {
    primary: PropTypes.bool
};
export {
    Button
};
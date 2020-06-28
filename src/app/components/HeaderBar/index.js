import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTab } from './styles';
const HeaderBar = styled(({ config }) => {

    return (
        <div style={{ height: "80px" }}>{
            config.map(item => {
                return <StyledTab
                    key={item.label.toLowerCase()}
                    onClick={item.onClick} {...item}>
                    {item.label}
                </StyledTab>;
            })
        }</div>
    )
})``
HeaderBar.propTypes = {
    // primary: PropTypes.bool
};
export {
    HeaderBar
};
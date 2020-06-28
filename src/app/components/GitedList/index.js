import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledUl, StyledLi } from './styles';
import { Button } from '../Button';
const GiftedList = styled(({ list: data, addToCollection, ctaJSX, labelWidth }) => {

    if (!data.length) return <h3>Enter keywords and click search to explore</h3>;

    return (
        <StyledUl>
            {data.map(item => {
                return <div key={item.id}>
                    <StyledLi>
                        <p style={{
                            display: "inline-block",
                            width: `${labelWidth ? labelWidth : 86}%`,
                            margin: 0,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        }}>{item.title}
                        </p>
                        {ctaJSX(item)}
                    </StyledLi>

                </div>
            })}
        </StyledUl>
    )
})``
GiftedList.propTypes = {
    primary: PropTypes.bool
};
export {
    GiftedList
};
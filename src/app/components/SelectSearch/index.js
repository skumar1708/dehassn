import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from "../Button";
import { StyledSelect, StyledBox } from './styles';
const SearchBar = styled(({ barConfig }) => {

    // const barConfig = {
    //     searchBtnLabel: "Search",
    //     searchPlaceHolder: `Search by ${searchBy}`,
    //     selectOptions: ["Title", "Author", "Series", "Periodical", "Publisher", "Year", "Identifier", "md5", "Extension"],
    //     onSearch: () => { console.log("searching...") },
    //     onSelectOption: () => { console.log("onSelectOption...") }
    // }

    return (<div>
        <StyledSelect onChange={barConfig.onSelectOption}>
            {barConfig.selectOptions.map(item => {
                return <option key={item}>{item}</option>
            })}
        </StyledSelect>
        <StyledBox placeholder={barConfig.searchPlaceHolder} onChange={barConfig.onSearchChange}/>
        <Button primary label={barConfig.searchBtnLabel} padding={"0.5em 2em"} onClick={barConfig.onBtnClick}/>
    </div>)
})``
SearchBar.propTypes = {
    // primary: PropTypes.bool
};
export {
    SearchBar
};
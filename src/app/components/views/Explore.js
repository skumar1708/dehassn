import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { SearchBar } from "../SelectSearch"
import { changeRoute } from "../../actions";
import { setSessionData, setUserData, getUserData } from "../../utils";
// import { urls } from "../constants";
import { getData } from "../api";
import { GiftedList } from "../GitedList";
import { libData }  from "../../mock";
import { Button } from "../Button";

const Explore = () => {
    const [searchBy, setSearchBy] = useState("title");
    const [searchText, setSearchText] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [dataList, setData] = useState([]);


    const onSelectChange = (value) => {
        console.log("current selected", value);
        setSearchBy(value.toLowerCase());
    }

    const options = {
        mirror: 'http://gen.lib.rus.ec',
        query: searchText,
        count: 50,
        sort_by: 'year',
        reverse: true,
        search_in: searchBy
    }

    const onSearchClick = async () => {
        if(!searchText) return alert("please enter keyword to search");
        setLoading(true);
        let response = await getData("http://demo7767767.mockable.io/libgen", options);//libData;
        setLoading(false);
        setData(response.data);
        // setData(response);
    }
    const onSearchChange =  (val) => {
        setSearchText(val);
    }
    const addToCollection =  (item) => {
        const user = getUserData("_loggedinuser");
        const myColl = getUserData(user);
        item.tag = "New";
        if(myColl) {
            let myList = myColl.list;
            setUserData(user, { list: Object.assign({}, myList, {
                [item.id]: item
            })});
        } else {
            setUserData(user, { list: {
                [item.id]: item
            }});
        }
    }
    const getCtaJSX = (item) => {
        return <Button label="Add to Collection" onClick={() => {
            return addToCollection(item);
        }}/>
    }
    const barConfig = {
        searchBtnLabel: "Search",
        searchPlaceHolder: `Search by ${searchBy}`,
        selectOptions: ["Title", "Author", "Series", "Periodical", "Publisher", "Year", "Identifier", "md5", "Extension"],
        onBtnClick: () => {
            return onSearchClick()
        },
        onSelectOption: (evt) => {
            return onSelectChange(evt.currentTarget.value);
        },
        onSearchChange: (evt) => {
            return onSearchChange(evt.currentTarget.value);
        }
    }
    return <div>
        <SearchBar barConfig={barConfig} />
        {isLoading ? <h3>Loading...</h3> : <GiftedList list={dataList}  ctaJSX={getCtaJSX}/>}
    </div>;
}

export default Explore;
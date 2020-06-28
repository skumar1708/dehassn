import React, { useState } from "react";
import styled from 'styled-components';
import {  getUserData, setUserData } from "../../utils";

import { GiftedList } from "../GitedList";
import { Button } from "../Button";


const SingleSelect = styled.select`
  /* Adapt the colors based on primary prop */
  padding: 5px;
  width: 10%;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Collection = () => {

    const iamUsr = getUserData("_loggedinuser");
    const [myCollection, setMyColl] = useState(getUserData(iamUsr));
    const TAGS = ["New", "Read", "Reading"];

    const removeItemFrom = (item) => {
        let myColl = myCollection.list;
        delete myColl[item.id]
        setUserData(iamUsr, { list: myColl});
        setMyColl(getUserData(iamUsr));
    }

    const onTagChange = (item, tag) => {
        let myColl = myCollection.list;
        myColl[item.id].tag = tag
        setUserData(iamUsr, { list: myColl});
        setMyColl(getUserData(iamUsr));
    }

    const getCtaJSX = (item) => {
        return <div style={{display: "inline"}}>
            <Button label="Download" onClick={() => {
                // window.open(`http://gen.lib.rus.ec/book/index.php?md5=${item.md5.toLowerCase()}`, "_blank")
                let downloadUrl = `http://93.174.95.29/main/${item.coverurl.substr(0, item.coverurl.indexOf("-"))}/${item.author} - ${item.title} (${item.year}).${item.extension}`
                 window.open(encodeURI(downloadUrl), "_blank")
            }} />
            <Button label="Delete" onClick={() => {
                return removeItemFrom(item)
            }} />
            <SingleSelect defaultValue={item.tag} onChange={(evt) => {
                return onTagChange(item, evt.currentTarget.value);
            }}>
                {TAGS.map(tag => {
                    return <option key={tag}>{tag}</option>
                })}
            </SingleSelect>
        </div>;
    }

    return <div>
        {(myCollection && Object.values(myCollection.list).length) ? <GiftedList labelWidth={75} list={Object.values(myCollection.list)} ctaJSX={getCtaJSX} /> : <h3>No collectionn found</h3>}
    </div>;
}

export default Collection;
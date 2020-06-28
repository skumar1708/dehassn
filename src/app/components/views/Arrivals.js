import React, { useState, useEffect } from "react";
import { getUserData, setUserData } from "../../utils";
// import { urls } from "../constants";
import { getData } from "../api";
import { GiftedList } from "../GitedList";
import { Button } from "../Button";
import { libData } from "../../mock";

const Arrivals = () => {

    const [isLoading, setLoading] = useState(true);
    const iamUser = getUserData("_loggedinuser");
    const getArrivals = () => {
        return libData.sort(() => .5 - Math.random()).slice(0, 10);
    }
    const [arrivals, setArrivals] = useState([]);

    useEffect(() => {
        //As libgen apis were donw so used mock data
        (async () => {
            // setLoading(true);
            let response = await getData("https://demo7767767.mockable.io/libgen", {});//libData;
            // setLoading(false);
            setArrivals(response.data.sort(() => .5 - Math.random()).slice(0, 10));
            setLoading(false);
        })();
    }, []);

    // const [dataList, setData] = useState([getLatestUploads()]);

    const addToCollection = (item) => {
        const myColl = getUserData(iamUser);
        item.tag = "New";
        if (myColl) {
            let myList = myColl.list;
            setUserData(iamUser, {
                list: Object.assign({}, myList, {
                    [item.id]: item
                })
            });
        } else {
            setUserData(iamUser, {
                list: {
                    [item.id]: item
                }
            });
        }
        setArrivals(arrivals.map(aItem => {
            if (aItem.id == item.id) {
                aItem.tag = item.tag;
            }
            return aItem;
        }));
    }

    const getCtaJSX = (item) => {
        return <Button label={item.tag ? "Added" : "Add to Collection"} onClick={() => {
            return addToCollection(item);
        }} />
    }

    return <div>
        {isLoading ? <h3>Loading new arrival Collection...</h3> : <GiftedList list={arrivals} ctaJSX={getCtaJSX} />}
    </div>;
}

export default Arrivals;
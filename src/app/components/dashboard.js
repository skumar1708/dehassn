import React, { useState } from "react";
import { HeaderBar } from "./HeaderBar"
import { useDispatch } from "react-redux";
import { changeRoute } from "../actions";
import { setSessionData, getUserData, setUserData } from "../utils";
import Collection from "./views/Collections";
import Explore from "./views/Explore";
import Arrivals from "./views/Arrivals";

const Dashboard = () => {
    const screens = [<Explore key="explore" />, <Collection key="coll" />, <Arrivals key="arrivals" /> ];
    const dispatch = useDispatch();
    const [hash, setHash] = useState(getUserData("_hash"));
    const getCurrScreen = (viewId) => {
        return screens[viewId - 1];
    }
    const [screen, setScreen] = useState(getCurrScreen(+hash));
    const logMeOut = () => {
        dispatch(changeRoute({ route: "/" }));
        setSessionData("path", "/");
    };
    
    const setView = (viewId) => {
        setScreen(screens[viewId - 1])
        setUserData("_hash", viewId);
        setHash(viewId);
    };
    const headerConfig = [
        { label: "Explore", float: "left", onClick: () => { setView(1) }, right: 1, isSelected: hash == 1 },
        { label: "Collection", float: "left", onClick: () => { setView(2) }, right: 1, isSelected: hash == 2 },
        { label: "Arrivals", float: "left", onClick: () => { setView(3) }, isSelected: hash == 3 },
        { label: "Logout", float: "right", onClick: logMeOut, isBtn: true },
    ];
    return (<div>
        <HeaderBar key="headerbar" config={headerConfig} />
        {screen}
    </div>);
}

export default Dashboard;
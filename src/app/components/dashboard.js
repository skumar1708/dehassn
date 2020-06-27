import React from "react";
import { HeaderBar } from "./HeaderBar"
import { useDispatch } from "react-redux";
import { changeRoute } from "../actions";
import { setSessionData } from "../utils";

const Dashboard = () => {
    const dispatch = useDispatch();
    const logMeOut = () => {
        dispatch(changeRoute({ route: "/"}));
        setSessionData("path", "/");
    };
    const headerConfig = [
        {label: "Explore", float: "left", onClick: () => {console.log("logout")}, right: 1},
        {label: "Collection", float: "left", onClick: () => {console.log("logout")}, right: 1},
        {label: "Arrivals", float: "left", onClick: () => {console.log("logout")}},
        {label: "Logout", float: "right", onClick: logMeOut},
    ];
    return <HeaderBar config={headerConfig}/>;
}

export default Dashboard;
import React from "react";
import Main from "./main";
import About from "./about";
import Address from "./address";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

const Profile = () => {
    return (
        <Card>
            <Main />
            <div className="shrink-0 bg-border h-[1px] w-auto mx-8"></div>
            <About />
            <div className="shrink-0 bg-border h-[1px] w-auto mx-8"></div>
            <Address />
        </Card>
    );
};

export default Profile;

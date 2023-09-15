import React from "react";
import { Star } from "lucide-react";
import profile_logo from "../assests/dc-logo.png";

const colors = ["#DE8D82", "#8BB08F", "#E1AF73", "#CE8DB8", "#C9C073"];

export const TeamCard = ({ color }) => {
    return (
        <div className="flex justify-start items-center gap-x-4 mb-3">
            <div
                style={{backgroundColor: `${color}`}}
                className="rounded-full overflow-hidden border-4  border-white drop-shadow-lg"
            >
                <img
                    src={profile_logo}
                    alt=""
                    className={`w-12 h-12 p-2 m-2`}
                />
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold">Member Name</h1>
                <p className="text-sm -mt-1">property dealer</p>
                <div className="flex items-center ">
                    <Star size={10} fill="#5CA500" color="#5CA500" />
                    <Star size={10} fill="#5CA500" color="#5CA500" />
                    <Star size={10} fill="#5CA500" color="#5CA500" />
                    <Star size={10} fill="#5CA500" color="#5CA500" />
                    <Star size={10} fill="#5CA500" color="#5CA500" />
                    <p className="ml-2 text-xs text-neutral-400">5.0</p>
                    <p className="text-neutral-400 ml-8 text-xs">725 Reviews</p>
                </div>
            </div>
        </div>
    );
};
const Team = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg mb-2">Our Team Members</h1>
                <p className="text-sm text-[#E36957]">view all</p>
            </div>
            {colors.map((c) => (
                <TeamCard key={c} color={c} />
            ))}
        </div>
    );
};

export default Team;

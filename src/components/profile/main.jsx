import { PlusIcon, MoreHorizontal, Star } from "lucide-react";
import { Button } from "../ui/button";
import profile_logo from "../../assests/dc-logo.png";
import React from "react";

const Main = () => {
    return (
        <div className="pb-6">
            <div className="h-40 bg-[#F3E7FD]"></div>
            <div className="-mt-16 ml-10 rounded-full overflow-hidden w-[124px] border-[6px] border-white shadow-xl">
                <img
                    src={profile_logo}
                    alt="profile-pic"
                    className="w-28 h-28 p-6 bg-[#4A148C]"
                />
            </div>
            <div className="flex justify-end gap-4 mr-4 -mt-10">
                <Button
                    variant="outline"
                    className="border-2 border-neutral-300"
                >
                    <MoreHorizontal className="text-neutral-400" />
                </Button>
                <Button variant="outline" className="text-xs w-24 border-2">
                    Hire me
                </Button>
                <Button className="text-xs w-24">
                    <PlusIcon size={14} className="mr-1" />
                    Follow
                </Button>
            </div>
            <div className="flex flex-col items-start ml-6 mt-2">
                <h1 className="text-2xl font-bold">Owner/Customer</h1>
                <p className="font-semibold">Property Dealer</p>
                <div className="flex justify-start gap-8 text-sm text-neutral-400 text-semibold">
                    <p>1k+ Followers </p>
                    <p>1.6k+ Contacts</p>
                </div>
                <div className="flex justify-start gap-8  my-1">
                    <div className="flex items-center ">
                        <Star size={14} fill="#5CA500" color="#5CA500" />
                        <Star size={14} fill="#5CA500" color="#5CA500" />
                        <Star size={14} fill="#5CA500" color="#5CA500" />
                        <Star size={14} fill="#5CA500" color="#5CA500" />
                        <Star size={14} fill="#5CA500" color="#5CA500" />
                        <p className="ml-2 text-sm text-neutral-400">5.0</p>
                        <p className="text-neutral-400 ml-8 text-sm">725 Reviews</p>
                    </div>
                    
                </div>
                <p className="text-sm text-neutral-400">
                    "Experience and expertise you can trust in the ever-changing
                    world of real estate."
                </p>
            </div>
        </div>
    );
};

export default Main;

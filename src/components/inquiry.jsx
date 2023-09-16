import React from "react";
import { Star } from "lucide-react";
import userLogo from "../assests/user.png";

export const InqueryCard = () => {
    return (
        <>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:border-[#340E62] hover:shadow-xl ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <img
                            src={userLogo}
                            alt="user"
                            className="w-[87px] rounded-full"
                        />
                        <div className="text-start">
                            <p className="text-lg">Mr. XYZ</p>
                            <p className="text-sm font-medium text-[#E36957]">
                                +91 XXXXXXXXXX
                            </p>
                        </div>
                    </div>
                    <div className="text-[#5CA500] flex gap-x-2">
                        <Star size={18} fill="#5CA500" />
                        <p className="font-semibold">4.4</p>
                    </div>
                </div>
                <p className="text-right text-neutral-400 text-sm">
                    Posted On 12/10/2023
                </p>
                <p className="text-left ">
                    The Property's location, size of the property, number of
                    rooms or units, features and amenities, age of the property,
                    condition of the property, and price. Also about the
                    surrounding area, such as nearby schools, also the public
                    transportation, shopping centres, and parks. Also about the
                    lease terms, security deposits, and move in dates.
                </p>
            </div>
        </>
    );
};

export const InqueryCardList = () => {
    return (
        <div className="mt-8">
            <h1 className="font-bold text-xl text-left mb-4">My inquiries</h1>
            <div className="flex gap-6 ">
                {[1, 2, 3].map((item, index) => (
                    <InqueryCard key={index} />
                ))}
            </div>
        </div>
    );
};

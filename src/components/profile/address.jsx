import React from "react";
import { MapPin } from "lucide-react";

const Address = () => {
    return (
        <div className="flex flex-col justify-start items-start pb-6 gap-2">
            <h1 className="text-xl font-bold mt-4 ml-8">
                You can find me around
            </h1>
            <div className="flex justify-start gap-24 px-8">
                <div className="flex flex-col text-sm">
                    <p className="text-left font-semibold">Residence</p>
                    <div className="flex items-center justify-center gap-1">
                        <MapPin size={16} />
                        <p> Noida, UP, India</p>
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <p className="text-left  font-semibold">Native</p>
                    <div className="flex items-center justify-center gap-1">
                        <MapPin size={16}  />
                        <p> Mumbai, Maharashtra, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;

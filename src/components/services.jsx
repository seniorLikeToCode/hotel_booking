import React from "react";
import { Button } from "./ui/button";
import { ServicesAreaData,ServicesData } from "../data/serviceAreaData";
import { MapPin, Mail, MoveUpRight,Share2 } from "lucide-react";

export const Services = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="text-start ml-8 mt-6 flex justify-between items-center">
                <h1 className="text-lg font-semibold mb-2">Services</h1>
                <div className="text-start text-sm font-bold px-6 flex gap-x-12">
                    <p className="text-neutral-800">Operating since: 2009</p>
                    <p className="text-[#76B329]">On Estte since: 2023</p>
                </div>
            </div>
            <p className="text-start ml-8">
                I I specialise in the Commercial property management, the Luxury
                property management, the Affordable housing management, the
                Legal knowledge, Marketing and sales
            </p>
            <div className="shrink-0 bg-border h-[1px] w-auto mx-8 my-6"></div>
            <div className="text-start ml-8 mt-4 mb-4">
                <h1 className="text-lg font-semibold"> Servicing Areas</h1>
            </div>
            <div className="flex ml-8 items-center flex-wrap gap-x-6 gap-y-3 mb-6">
                {ServicesAreaData.map((sData,index) => (
                    <Button key={index} variant="outline" className="w-48 rounded-3xl">
                        <MapPin size={16} className="mr-1" />
                        {sData.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export const ServicesSidebar = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            <h1 className="text-left text-xl font-semibold mb-3">Services</h1>
            <div className="flex justify-start flex-wrap gap-4">
                {ServicesData.map((d,id) => (
                    <Button key={id} variant="outline" className="w-36 rounded-3xl">
                        {d.icon}
                        {d.name}
                    </Button>
                ))}
            </div>
            <h1 className="text-left font-semibold mt-6 mb-1">Location</h1>
            <div className="text-left text-sm flex items-center">
                <MapPin size={14} className="mr-1" color='#340E62'/>
                <p className="text-sm">Mumbai, Maharahtra, India</p>
            </div>
            <h1 className="text-left font-semibold mt-4 mb-1">Email</h1>
            <p className="text-left text-sm flex items-center">
                <Mail size={14} className="mr-1" color='#340E62'/>
                <a href="mailto:abc@gmail.com"> ownerprop@gmail.com </a>
                <MoveUpRight size={14} className="ml-1" />
            </p>
            <h1 className="text-left font-semibold mt-4 mb-1">Website</h1>
            <p className="text-left text-sm flex items-center">
                <Share2 size={14} className="mr-1" color='#340E62' />
                <a href="https://www.google.com"> myproperty.com</a>
                <MoveUpRight size={14} className="ml-1" />
            </p>
            <div className="flex flex-col mt-4">
                <Button className="w-full mb-3 h-10 border-[#E36957] text-[#E36957] text-lg" variant="outline">
                    Add to Contact
                </Button>
                <Button className="w-full h-10 bg-[#E36957] text-lg">Message</Button>
            </div>
        </div>
    );
};

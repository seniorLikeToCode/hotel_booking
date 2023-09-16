import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#303030] px-2 py-4">
            <div className="flex justify-between items-center py-4 pb-6 px-8">
                <p className="text-lg text-neutral-100">ESTTE</p>
                <div className="flex gap-6">
                    <Instagram size={24} className="text-neutral-100" />
                    <Twitter size={24} className="text-neutral-100" />
                    <Linkedin size={24} className="text-neutral-100" />
                </div>
            </div>
            <div className="h-[1px] shrink-0 bg-neutral-400 mx-8"></div>
            <div className="flex justify-between items-center pt-8 pb-6 mx-8">
                <div className="text-neutral-300 flex gap-3">
                    <p>Privacy Policy</p>
                    <div className=" bg-neutral-300 h-auto w-[1px]"> </div>
                    <p>Disclaimer</p>
                </div>
                <p className="text-neutral-300">© 2023 All Rights Reserved Estte Group</p>
            </div>
        </div>
    );
};

export default Footer;

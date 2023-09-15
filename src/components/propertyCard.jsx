import React from "react";
import { Card, CardFooter, CardContent, CardHeader } from "./ui/card";
import { MapPin, BedDouble, Bath } from "lucide-react";
import {properties} from "../data/propertyCardData";

const PropertyCard = ({ name, price, distance, bed, bath, image, tag }) => {
    // <div className='flex flex-col items-center justify-center h-80 w-64 rounded'></div>
    return (
        <>
            <Card className="w-[22.5rem] rounded-2xl hover:border-[#340E62] hover:shadow-xl">
                <CardHeader className="p-0 overflow-hidden relative rounded-t-2xl">
                    <div className="absolute top-0 left-0 bg-[#E36957] text-white text-lg font-semibold px-6 py-2 rounded-tl-xl">
                        {tag}
                    </div>
                    <img src={image} alt="property" className="image-mt"></img>
                </CardHeader>

                <CardContent className="pt-4">
                    <p className="text-left font-semibold text-lg">{name}</p>
                    <p className="text-left font-semibold pt-2">
                        <span className="text-[#5CA500] text-xl">{price}</span>
                        /month
                    </p>
                </CardContent>

                <CardFooter className="flex justify-between text-neutral-400 font-semibold">
                    <div className="flex gap-2">
                        <div className="rounded-full p-1 bg-[#E9E2F1]">
                            <MapPin size={18} color="#340E62" />
                        </div>

                        <span>{distance}</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="rounded-full p-1 bg-[#E9E2F1]">
                            <BedDouble size={18} color="#340E62" />
                        </div>
                        <span>{bed}</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="rounded-full p-1 bg-[#E9E2F1]">
                            <Bath size={18} color="#340E62" />
                        </div>
                        <span>{bath}</span>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};

const PropertyCardList = () => {
    const propertiesForRent = properties.sort(() => Math.random() - 0.5);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-left pt-6">
                Properties for Sale
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6">
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        tag="SALE"
                        bed={property.bed}
                        bath={property.bath}
                        distance={property.distance}
                        price={property.price}
                        name={property.name}
                        image={property.image}
                    />
                ))}
            </div>
            
            <h1 className="text-2xl font-semibold text-left pt-6">
                Properties for Rent
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6">
                {propertiesForRent.map((property) => (
                    <PropertyCard
                        key={property.id}
                        tag="RENT"
                        bed={property.bed}
                        bath={property.bath}
                        distance={property.distance}
                        price={property.price}
                        name={property.name}
                        image={property.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertyCardList;

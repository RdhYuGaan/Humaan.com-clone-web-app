import React from 'react';

const SingleCard = ({ item }) => {
    return (
        <div className="bg-[#f8f8ed] rounded-3xl overflow-hidden min-w-[250px] max-w-xs  mr-4 flex-shrink-0">
            <div className="relative ">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.type}
                </span>
            </div>
            <div className="px-4 py-3 space-y-1">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-base font-semibold">{item.title}:</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex justify-start">
                    {item.linkText && (
                        <a
                            href="#"
                            className="text-sm text-black underline hover:no-underline hover:bg-black hover:text-white px-4 py-1 rounded-2xl"
                        >
                            {item.linkText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

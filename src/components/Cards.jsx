import React, { useRef, useEffect } from 'react';
import Card from './SingleCard';
import { cardData } from '../data/cardData';

const Cards = () => {
    const cardsRef = useRef(null);
    
        useEffect(() => {
            if (cardsRef.current) {
                console.log('Cards container:', cardsRef.current);
            }
        }, []);
    
  return (
    <div className="bg-[#f8f8ed] min-h-screen py-10 px-6 rounded-b-4xl" ref={cardsRef}>
                <h1 className="text-6xl font-bold text-gray-900 mb-8">What's New</h1>
                <div className="flex flex-row cursor-grabbing gap-6 justify-start">
                    {cardData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
    
  );
}

export default Cards
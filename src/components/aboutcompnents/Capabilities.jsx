import React from 'react'
import { services } from '../../data/cardData'



const Capabilities = () => {
return (
    <div className="py-10 ml-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            {Object.entries(services).map(([category, items]) => (
                <div key={category}>
                    <h3 className="text-4xl font-bold text-gray-900 mb-10">{category}</h3>
                    <ul className="space-y-6 list-none text-2xl font-semibold text-gray-700">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
)
}

export default Capabilities
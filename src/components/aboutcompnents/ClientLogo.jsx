import React from 'react'
import {clients} from "../../data/cardData"


const ClientLogo = () => {
    return (
        <div className='min-h-screen py-10 px-5 '>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {clients.map((client, index) => (
                    <div key={index}
                        className='bg-[#f0f6f7] rounded-2xl p-6 flex items-center shadow-md h-48 justify-center'>
                            <img src={client.logo} alt={client.name} className='max-h-16 object-contain' />
                            
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientLogo
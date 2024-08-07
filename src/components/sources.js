import React, { useEffect, useState } from 'react'
import { combineData } from '../functions/getSources';

const Sources = () => {
    const [sources, setSources] = useState([]);

    useEffect(() => {
        const fetchSources = async () => {
            try {
                const data = await combineData();
                if (Array.isArray(data)) {
                    setSources(data);
                } else {
                    console.error("Data is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching sources:", error);
            }
        };
        
        fetchSources();
    }, []);

    return (
        <div className='flex flex-col space-y-8'>
            <h1 className='flex font-lora text-dark font-semibold text-xl'>
                Sources
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {sources.map((source, index) => (
                    <div key={index} className='bg-white/30 px-4 py-6 rounded-md shadow-md flex flex-col space-y-3 items-center'>
                        <span className='text-dark font-semibold text-center'>{source.name}</span>
                        <div className='flex-1 flex flex-row space-x-6 items-center justify-center'>
                            <div className='flex flex-col space-y-1'>
                                <h1 className='text-dark/60 font-semibold text-center'>{source.people}</h1>
                                <h1 className='text-dark/30 text-sm font-semibold text-center'>People</h1>
                            </div>
                            
                            <div className='flex flex-col space-y-1'>
                                <h1 className='text-dark/60 font-semibold text-center'>{source.insights}</h1>
                                <h1 className='text-dark/30 text-sm font-semibold text-center'>Insights</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sources;
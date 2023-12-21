import React from 'react';

const Model = ({isVisible}) => {
    if((isVisible)) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl '>X</button>
                <div className='bg-white p-2 rounded'>
                    Model
                </div>
            </div>
        </div>
    );
}

export default Model;

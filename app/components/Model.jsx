import React from 'react';

const Model = ({isVisible, onClose}) => {
    if((isVisible)) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ' onClick={()=>onClose()}>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>x</button>
                <div className='bg-white p-2 rounded'>
                    Model
                </div>
            </div>
        </div>
    );
}

export default Model;

import React from 'react';

function Card({ users }) {
    return (
        <>
            {users.map((item, index) => {
                return (
                    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-4 ' key={index}>
                        <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden ">
                            <img className='w-full h-full object-cover' src="" alt="" />
                        </div>
                        <h1 className=' mt-1 text-xl font-semibold '>Lalchand Dhaka</h1>
                        <h4 className='opacity-60 text-xs font-semibold m-1'>Lalchand@gmail.com</h4>
                        <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, necessitatibus provident harum suscipit ipsam cupiditate!</p>
                        <button className='px-4 px-2 bg-red-600 text-xs rounded-md font-semibold text-white mt-5' >Remove It</button>
                    </div>
                );
            })}
        </>
    );
}

export default Card;

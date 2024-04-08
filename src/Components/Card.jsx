import React from 'react';

function Card({ user, hanleRemove  , id }) {
    return (

        <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-4 '>
            <div className="image w-[5vw] h-[5vw] rounded-full  overflow-hidden ">
                <img className='w-full h-full object-cover' src={user.image} alt="" />
            </div>
            <h1 className=' mt-1 text-xl font-semibold text-center leading-none'>{user.name}</h1>
            <h4 className='opacity-60 text-xs font-semibold m-1'>{user.email}</h4>
            <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, necessitatibus provident harum suscipit ipsam cupiditate!</p>
            <button onClick={() => hanleRemove(id)} className='px-5 px-3 bg-red-600 text-sm rounded-md font-semibold text-white mt-5' >Remove It</button>
        </div>
    );


}

export default Card;

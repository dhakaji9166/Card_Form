import React from 'react'

function Form() {
  return (
    <div className='mt-10 flex justify-center'>
<form className='gap-10 flex' action="">
    <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name'/>
    <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='Email'/>
    <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image url'/>
    <input className='px-5 px-1 rounded-md bg-blue-500 text-white font-semibold' type="submit" />
</form>
    </div>
  )
}

export default Form
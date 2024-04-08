import React from 'react'
import { useForm } from 'react-hook-form'

function Form({ HandleFormSubmit }) {

  const { register, handleSubmit, reset } = useForm()

  const formSubmit = (data) => {
    HandleFormSubmit(data);
    reset();
  }

 

  return (
    <div className='mt-10 flex justify-center'>
      <form className='gap-10 flex' onSubmit={handleSubmit(formSubmit)}>
        <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
        <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='Email' />
        <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image url' />
        <input className='px-5 px-1 rounded-md bg-blue-500 text-white font-semibold' type="submit" />
      </form>
    </div>
  )
}

export default Form
import React from 'react'
import Card from './Card'

function Cards({users}) {
  return (
    <div className='w-full max-h-96 p-3 flex flex-wrap justify-center gap-5'>
{users.map((item, index) =>{
    return <Card key={index} users={users} />
})}

    </div>
  )
}

export default Cards
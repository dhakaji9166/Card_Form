import React from 'react'
import Card from './Card'

function Cards({ users  ,hanleRemove}) {
  return (
    <div className='w-full max-h-96 p-3 flex flex-wrap justify-center gap-5'>
      {users.map((item, index) => {
        return <Card key={index} user={item}  hanleRemove = {hanleRemove} id ={index}/>
      })}

    </div>
  )
}

export default Cards
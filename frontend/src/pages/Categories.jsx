import React from 'react'

const Categories = () => {
const cat = [
    {
        name:"Comedy",
        color:"bg-purple-200",
        to: "/categories/Comedy",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
        name:"Business",
        color:"bg-green-200",
        to: "/categories/Business",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
        name:"Education",
        color:"bg-red-200",
        to: "/categories/Education",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
        name:"Business",
        color:"bg-red-200",
        to: "/categories/Business",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
        name:"Hobbies",
        color:"bg-zinc-200",
        to: "/categories/Hobby",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
        name:"Government",
        color:"bg-indigo-200",
        to: "/categories/Government",
        img:"https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
]
  return (
    <div className='h-screen lg:h-[78vh]'>
        <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {cat.map((items, i) => (
                <Link to={items.to} key={i} className = {`rounded px-8 py-4text-xl font-semibold ${items.color} hover:`}></Link>
            ))}

        </div>
          
    </div>
  )
}

export default Categories

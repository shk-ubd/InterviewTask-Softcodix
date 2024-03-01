import React from 'react'

function CharacterCard({
    bgColor= "bg-white/20",
    imgSrc = "https://picsum.photos/seed/picsum/200/300",
    name = "Random Name",
}) {
  return (
    <div className={`flex flex-col gap-5 p-10 ${bgColor} items-center w-[300px] hover:bg-white/25 border-2 rounded-xl cursor-pointer mt-8 hover:shadow-purple-500/30 hover:shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105`}>
        <div className='border-2 border-white rounded'>
            <img src={imgSrc} alt={name} />
        </div>
        <div>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default CharacterCard
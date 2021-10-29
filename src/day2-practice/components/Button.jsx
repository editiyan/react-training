import React from 'react'

export default function ButtonKlik({text, klik}) {
  return (
    <div>
      <button className="rounded-lg bg-red-500 border-red-500 mx-4 my-2 py-2 px-2 text-white font-bold" onClick={klik}>{text}</button>
    </div>
  )
}

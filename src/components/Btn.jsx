import React from 'react'

function Btn({contain, element, color='bg-blue-600', height='h-[50px]'}) {
  return (
        <button onClick={element} className={`${color} px-4 ${height} rounded-full text-white tracking-wide`}>{contain}</button>
  )
}

export default Btn

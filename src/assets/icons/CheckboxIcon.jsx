import React from 'react'

const CheckboxIcon = ({isEmpty = false}) => {
  return (
    <svg
        style={{
            color: "white",
            border: "2px solid black",
            borderRadius: "5px",
            height: "18px",
            width: "18px",
            backgroundColor: isEmpty ? "#fff" : "#3BB77E",
            borderColor: isEmpty ? "#e3e3e3" : "#3BB77E"
        }} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor"
    >
        
        {!isEmpty &&  <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.5 12.75l6 6 9-13.5" 
        />}
    </svg>
  )
}

export default CheckboxIcon
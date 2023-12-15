import React, { useState } from 'react'
import './navi.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";

export default function Navigation() {
  const[open,setOpen]=useState(false);
    const navdata=["home","service","about","blog","contact"]
  return (
    <>
        <nav>
        <div className='opcontainer'>
          <h1>Hello JAVA » S©®ï₽₸</h1>
          <ul className='menu'>
              {
                navdata.map((item,index)=>{
                  return(
                    <li key={index}>
                      <a href="">{item}</a>
                    </li>
                  )
                })
              }
          </ul>
          <FaBarsStaggered onClick={()=>{
            !open?setOpen(true):setOpen(false)
          }}/>
          <FaSkullCrossbones/>
        </div>
      </nav>
    </>
  )
}

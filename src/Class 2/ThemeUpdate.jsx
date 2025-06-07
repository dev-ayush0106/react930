import React, { useState } from 'react'
import { CiSun } from 'react-icons/ci'
import { FaRegMoon } from 'react-icons/fa'

const ThemeUpdate = () => {
    let [theme,setTheme]=useState(true);
    function updateTheme(){
        setTheme(!theme);
    }
    console.log(theme);
  return (
    <div>
        {(theme==true)?
      <CiSun style={{fontSize:"5rem", color:"yellow"}} />:
      <FaRegMoon style={{fontSize:"4rem"}}/>
        }
    <br />
      <button onClick={updateTheme}>Update to {(theme==true?"Moon":"Sun")}</button>
    </div>
  )
}

export default ThemeUpdate

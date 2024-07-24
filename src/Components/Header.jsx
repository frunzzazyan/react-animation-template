import { useState,useEffect } from "react";
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


export let fetchLeng = "src/DATA/script.json"

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)


function handleClick(){
    setMenuOpen(!menuOpen)
}
function handleFatch(v){
  fetch(v).then(res=>res.json()).then(res=>props.setData(res))
}

  return (
    <>
    <header>
        <h1 className="text-shadow-drop-tl">{props.title}</h1>
        <div onClick={()=>handleClick()} className="menu"><BiMenuAltRight /></div>
    </header>
    {menuOpen ? <div onClick={()=>setMenuOpen(false)} className="div-menu">
      <div className="list scale-up-hor-left">
      <IoMdClose />
        <ul>
          <Link to='home'><li>{props.menu.li1}</li></Link>
          <Link to='aboutSalon'><li>{props.menu.li2}</li></Link>
          <Link  to='ourPortfolio'><li>{props.menu.li3}</li></Link>
          <Link  to='contactUs'><li>{props.menu.li4}</li></Link>
        </ul>
        <ul className="leng">
          <li onClick={()=>{
            fetchLeng = "src/DATA/scriptArm.json"
            handleFatch(fetchLeng)
          }} >Arm</li>
          <li onClick={()=>{
            fetchLeng = "src/DATA/scriptRus.json"
            handleFatch(fetchLeng)
        }} >Rus</li>
          <li onClick={()=>{
            fetchLeng = "src/DATA/script.json"
            handleFatch(fetchLeng)
          }} >Eng</li>
        </ul>
      </div>
    </div> : "" }
    
    </>
  )
}

export default Header
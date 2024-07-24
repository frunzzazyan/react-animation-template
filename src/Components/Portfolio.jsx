import { useState,useEffect } from "react";
import "./Portfolio.css"
import { GoArrowRight } from "react-icons/go";
import ContactComponent from "./ContactComponent";
import SimpleSlider from "./SimpleSlider";
const Portfolio = (props) => {
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  const [acardyon,setAcardyon] = useState(false)
  const [portfolio,setPortfolio] = useState(false)


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)

      if(window.scrollY >= 1100){
        setAcardyon(true)
      }else{
        setAcardyon(false)
      }
      if(window.scrollY >= 1600){
        setPortfolio(true)
      }else{
        setPortfolio(false)
      }
    })
  },[])

function handleClick(elem,fn,fn2,fn3){
    fn(!elem)
    fn2(false)
    fn3(false)
}


  return (
    <>
        <div className="images scale-in-hor-center">
            <div className="portfolio-img-div">
                <div className="portfolio-img">
                    <img src={props.firstImg} alt="" />
                    <div className="image-info scale-up-ver-bottom">
                      <h1>{props.firstItemText?.text1}</h1>
                      <p>{props.firstItemText?.text2}</p>
                      <button>{props.firstItemText?.btn}</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
      <SimpleSlider/>
    </div>
        <div onScroll={(e)=>console.log(e)} className="info-list">
          <div  className={(acardyon ? "acardyon scale-up-hor-left ": "acardyon")}>
            <div onClick={()=>handleClick(showModal1,setShowModal1,setShowModal2,setShowModal3)} className="div-1 div-acardyon">{props.btnInfo1?.titleBtn1}<GoArrowRight /></div>
            {(showModal1 ? <div className="showModal1"> 
                <p>{props.btnInfo1?.textBtn1}</p>
                <h3>{props.btnInfo1?.listTitle}</h3>
                <ul>
                  <li>{props.btnInfo1?.list.one}</li>
                  <li>{props.btnInfo1?.list.two} </li>
                  <li>{props.btnInfo1?.list.tree} </li>
                  <li>{props.btnInfo1?.list.for}</li>
                </ul>
               </div> : "")}
            <div onClick={()=>handleClick(showModal2,setShowModal2,setShowModal1,setShowModal3)} className="div-2 div-acardyon">{props.btnInfo2?.titleBtn2}<GoArrowRight /></div>
            {(showModal2 ? <div className="showModal2"> 
              <p>{props.btnInfo2?.textBtn2}</p>
            </div> : "")}
            <div onClick={()=>handleClick(showModal3,setShowModal3,setShowModal2,setShowModal1)} className="div-3 div-acardyon">{props.btnInfo3?.titleBtn3} <GoArrowRight /></div>
            {(showModal3 ? <div className="showModal3">
              <p>{props.btnInfo3?.textBtn3}</p>
            </div> : "")}
          </div>
          <div className={(acardyon? "text-info scale-up-hor-right" : "text-info")}>
            <h1>{props.text2?.title}</h1>
            <p>{props.text2?.p}</p>
            <button>{props.text2?.btn}</button>
          </div>
        </div>
          <div className={(portfolio ? "portfolio shadow-drop-tb" : "portfolio")}>
            <div className="h1-color">
            <h1>{props.portfolio?.portfolioText}</h1>
            </div>
              
            <div className="portfolio-users">
              <div className="user"><img src={props.portfolio?.users.user1} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user2} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user3} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user4} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user5} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user6} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user7} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user8} alt="" /></div>
              <div className="user"><img src={props.portfolio?.users.user9} alt="" /></div>
            </div>
          </div>
          <ContactComponent size="2500" contact= {props?.contact}/>
    </>
  )
}

export default Portfolio
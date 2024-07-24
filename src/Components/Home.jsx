import "./Home.css"
import ContactComponent from "./ContactComponent"
import { useState,useEffect } from "react";

const Home = (props) => {

  const [div1,setDiv1] = useState(false)
  const [div2,setDiv2] = useState(false)
  const [div3,setDiv3] = useState(false)
  const [div4,setDiv4] = useState(false)
  const [div5,setDiv5] = useState(false)
  const [div6,setDiv6] = useState(false)
  const [div7,setDiv7] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      if(window.scrollY >= 0){
        setDiv1(true)
      }else{
        setDiv1(false)
      }
      if(window.scrollY >= 400){
        setDiv2(true)
      }else{
        setDiv2(false)
      }
      if(window.scrollY >= 1300){
        setDiv3(true)
      }else{
        setDiv3(false)
      }
      if(window.scrollY >= 1700){
        setDiv4(true)
      }else{
        setDiv4(false)
      }
      if(window.scrollY >= 3000){
        setDiv5(true)
      }else{
        setDiv5(false)
      }
      if(window.scrollY >= 3600){
        setDiv6(true)
      }else{
        setDiv6(false)
      }
      if(window.scrollY >= 4600){
        setDiv7(true)
      }else{
        setDiv7(false)
      }
      
    })
  },[])

  return (
    <>
    <div className="home-first-div">
        <div className={(div1? "home-first-div-text scale-up-ver-bottom" : "home-first-div-text")}>
            <h2>{props?.home?.homeFirstText.text1}</h2>
            <h1>{props?.home?.homeFirstText.text2}</h1>
            <p>{props?.home?.homeFirstText.text3}</p>
            <button>{props?.home?.homeFirstbtn}</button>
        </div>
        <img className={(div1? "scale-up-hor-right" : "")} src={props?.home?.homeFirstImg} alt="" />
    </div>
    <div className="div-grid">
      <div className="div-1-grid">

        <div className={(div2? "grid scale-up-tl" : "grid")} >
          <h1>{props?.home?.homeitems.item1.item1Text}</h1>
          <img className={(div2? "roll-in-left" : "")} src={props?.home?.homeitems.item1.item1Img} alt="" />
        </div>
        <div className={(div2? "grid scale-up-ver-top" : "grid")}>
          <h1>{props?.home?.homeitems.item2.item2Text}</h1>
        </div>
        <div className={(div2? "grid scale-up-ver-top" : "grid")}><img src={props?.home?.homeitems.item3.item3Img} alt="" /></div>
      </div>
      <div className="div-2-grid">
        <div className={(div2? "grid scale-up-ver-bottom" : "grid")}><img src={props?.home?.homeitems.item4.item4Img} alt="" /></div>
        <div className={(div2? "grid scale-up-ver-bottom" : "grid")}>
          <h1>{props?.home?.homeitems.item5.item5Text}</h1>
          <button>{props?.home?.homeitems.item5.item5btn}</button>
          </div>
        <div className={(div2? "grid scale-up-right" : "grid")} >
          <h1>{props?.home?.homeitems.item6.item6Text}</h1>
          <img className={(div2? "grid roll-in-right" : "grid")}
           src={props?.home?.homeitems.item6.item6Img} alt="" />
          </div>
    </div>
      </div>
    <div className="home-secnd-div">
      <div className={(div3 ? "div-1 slit-in-horizontal" : "div-1")}>
        <h1>{props?.home?.animationDiv.animationDivText.text1}</h1>
        <p>{props?.home?.animationDiv.animationDivText.text2}</p>
        <button>{props?.home?.animationDiv.animationDivbtn}</button>
      </div>
      <div className="div-2">
        <img className={(div4? "scale-up-hor-left" : "")} src={props?.home?.homeUsersInfo.firstUserImg} alt="" />
        <div className={(div4? "div-2-text scale-up-hor-left" : "div-2-text")}>
              <h1>{props?.home?.homeUsersInfo.firstUserText.text1}</h1>
              <p>{props?.home?.homeUsersInfo.firstUserText.text2}</p>
              <button>{props?.home?.homeUsersInfo.homeUserBtn}</button>
              
              <div className="div-2-img">
                  <img className={(div4 ? "scale-up-ver-bottom" : "")} src={props?.home?.homeUsersInfo.userItem1Img} alt="" />
                  <img className={(div4 ? "scale-up-ver-bottom" : "")} src={props?.home?.homeUsersInfo.userItem2Img} alt="" />
                  <img className={(div4 ? "scale-up-ver-bottom" : "")} src={props?.home?.homeUsersInfo.userItem3Img} alt="" />
              </div>  
        </div>
        
      </div>
        <div className="div-3">
            <div className={(div5?"div-3-first-div tilt-in-fwd-bl" : "div-3-first-div")}>
              <img src={props?.home?.miniDivItems.miniDiv1.miniDiv1Img1} alt="" />
              <p>{props?.home?.miniDivItems.miniDiv1.miniDiv1Text}</p>
              <img src={props?.home?.miniDivItems.miniDiv1.miniDiv1Img2} alt="" />
            </div>
            <div className={(div5?"div-3-last-div tilt-in-fwd-br" : "div-3-last-div")}>
              <h1>{props?.home?.miniDivItems.miniDiv2.miniDiv2Text1}</h1>
              <img src={props?.home?.miniDivItems.miniDiv2.miniDiv2Img} alt="" />
              <p>{props?.home?.miniDivItems.miniDiv2.miniDiv2Text2}</p>
              <button>LEARN MORE</button>
              <div className="color-div-3"></div>
            </div>
        </div>
    </div>
     <div className="home-third-div">
         <div className={(div6?"third-div-1 fade-in-bottom" : "third-div-1")}>
          <h1>{props?.home?.homeCenterDiv.homeCenterDivText.text1}</h1>
          <p>{props?.home?.homeCenterDiv.homeCenterDivText.text2}</p>
          <img src={props?.home?.homeCenterDiv.homeCenterDivImg} alt="" />
         </div>
         <div className={(div7? "third-div-2 scale-up-hor-right" : "third-div-2")}>
          <img src={props?.home?.homeImage} alt="" />
          <div className={(div7? "third-div-2-text fade-in-bottom" : "third-div-2-text")}>
            <h3>{props?.home?.homeImageDiv.text1}</h3>
            <h1>{props?.home?.homeImageDiv.text2}</h1>
            <button>{props?.home?.homeImageDivBtn}</button>
          </div>
         </div>
     </div>

     <ContactComponent size="8000" contact= {props?.contact}/>
    </>
  )
}

export default Home
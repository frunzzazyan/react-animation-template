import { useState,useEffect } from "react"
import "./About.css"
import ContactComponent from "./ContactComponent"

const About = (props) => {
   const [div1,setDiv1] = useState(false)
   const [div2,setDiv2] = useState(false)
   const [div3,setDiv3] = useState(false)
   const [div4,setDiv4] = useState(false)
   const [div5,setDiv5] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          console.log(window.scrollY)
          if(window.scrollY >= 300){
            setDiv1(true)
          }else{
            setDiv1(false)
          }
          if(window.scrollY >= 800){
            setDiv2(true)
          }else{
            setDiv2(false)
          }
          if(window.scrollY >= 1500){
            setDiv3(true)
          }else{
            setDiv3(false)
          }
          if(window.scrollY >= 2000){
            setDiv4(true)
          }else{
            setDiv4(false)
          }
          if(window.scrollY >= 2700){
            setDiv5(true)
          }else{
            setDiv5(false)
          }
        
        })
      },[])

  return (
    <>
    <div className="about-first-div">
        <div className="div-color scale-up-hor-left">
            <div className="black-div scale-up-hor-left">
                <h1>{props?.about?.aboutFirstDiv.aboutFirstDivText.text1}</h1>
                <p>{props?.about?.aboutFirstDiv.aboutFirstDivText.text2}</p>
                <button>{props?.about?.aboutFirstDiv.aboutFirstDivBtn}</button>
            </div>
        </div>
                <img className="scale-up-ver-bottom" src={props?.about?.aboutFirstDiv.aboutFirstDivImg} alt="" />
    </div>
    <div className="about-second-div">
        <h1>{props?.about?.aboutUsers.text}</h1>
        <p>{props?.about?.aboutUsers.p}</p>
        <div className="about-second-user">
            <div className={(div1 ? "about-user scale-up-center" : "about-user")}>
                <img src={props?.about?.aboutUsers.aboutUser1.aboutUser1Img} alt="" />
                <div className="about-div-btn"><h2>{props?.about?.aboutUsers.aboutUser1.aboutUser1ImgBtn}</h2></div>
            </div>
            <div className={(div1 ? "about-user scale-up-center" : "about-user")}>
                <img src={props?.about?.aboutUsers.aboutUser2.aboutUser2Img} alt="" />
                <div className="about-div-btn"><h2>{props?.about?.aboutUsers.aboutUser2.aboutUser2ImgBtn}</h2></div>
            </div>
            <div className={(div1 ? "about-user scale-up-center" : "about-user")}>
                <img src={props?.about?.aboutUsers.aboutUser3.aboutUser3Img} alt="" />
                <div className="about-div-btn"><h2>{props?.about?.aboutUsers.aboutUser3.aboutUser3ImgBtn}</h2></div>
            </div>
            <div className={(div1 ? "about-user scale-up-center" : "about-user")}>
                <img src={props?.about?.aboutUsers.aboutUser4.aboutUser4Img} alt="" />
                <div className="about-div-btn"><h2>{props?.about?.aboutUsers.aboutUser4.aboutUser4ImgBtn}</h2></div>
            </div>
        </div>
    </div>
    <div className="about-third-div">
        <div className={(div2? "about-third-div-text scale-up-hor-left" : "about-third-div-text")}>
            <h1>{props?.about?.aboutInfo.aboutInfoText.text1}</h1>
            <p>{props?.about?.aboutInfo.aboutInfoText.text2}</p>
            <button>{props?.about?.aboutInfo.aboutInfoBtn}</button>
        </div>
        <img  className={(div2? "scale-up-hor-right" : "")} src={props?.about?.aboutInfo.aboutInfoimg} alt="" />
    </div>
    <div className="about-fourth-div">
        <div className="about-fourth-div-users">
            <img className={(div3? "rotate-left" : "")} src={props?.about?.aboutUsersMetod.aboutUsersMetodImg1} alt="" />
            <img className={(div3? "rotate-left" : "")} src={props?.about?.aboutUsersMetod.aboutUsersMetodImg2} alt="" />
            <img className={(div3? "rotate-left" : "")} src={props?.about?.aboutUsersMetod.aboutUsersMetodImg3} alt="" />
        </div>
        <div className="about-fourth-div-text">
        <h1>{props?.about?.aboutUsersMetod.aboutUsersMetodText.text1}</h1>
        <p>{props?.about?.aboutUsersMetod.aboutUsersMetodText.text2}</p>
        <button>{props?.about?.aboutUsersMetod.aboutUsersMetodBtn}</button>
        </div>
    </div>
    <div className="about-fifth-div">
        <div className={(div4? "about-fifth-div-item scale-up-ver-bottom" : "about-fifth-div-item")}>
            <img src={props?.about?.aboutNews.News1.News1Img} alt="" />
            <div className="about-fifth-div-item-text">
                <h2>{props?.about?.aboutNews.News1.News1Text.text1}</h2>
                <h1>{props?.about?.aboutNews.News1.News1Text.text2}</h1>
                <p>{props?.about?.aboutNews.News1.News1Text.text3}</p>
            </div>
        </div>
        <div className={(div4? "about-fifth-div-item about-fifth-div-item-2 scale-up-ver-top" : "about-fifth-div-item about-fifth-div-item-2")}>
            <div className="about-fifth-div-item-text about-fifth-div-item-text-2">
                <h2>{props?.about?.aboutNews.News2.News2Text.text1}</h2>
                <h1>{props?.about?.aboutNews.News2.News2Text.text2}</h1>
                <p>{props?.about?.aboutNews.News2.News2Text.text3}</p>
            </div>
        </div>
        <div className={(div4? "about-fifth-div-item scale-up-ver-bottom" : "about-fifth-div-item")}>
            <img src={props?.about?.aboutNews.News3.News3Img} alt="" />
            <div className="about-fifth-div-item-text">
                <h2>{props?.about?.aboutNews.News3.News3Text.text1}</h2>
                <h1>{props?.about?.aboutNews.News3.News3Text.text2}</h1>
                <p>{props?.about?.aboutNews.News3.News3Text.text3}</p>
            </div>
        </div>
        <div className={(div4? "about-fifth-div-item about-fifth-div-item-4 scale-up-ver-top" : "about-fifth-div-item about-fifth-div-item-4")}>
            <div className="about-fifth-div-item-text">
                <h2>{props?.about?.aboutNews.News4.News4Text.text1}</h2>
                <h1>{props?.about?.aboutNews.News4.News4Text.text2}e</h1>
                <p>{props?.about?.aboutNews.News4.News4Text.text3}</p>
            </div>
        </div>
    </div>
    <div className="about-history-div">
        <div className={(div5? "about-history-text scale-up-ver-bottom" : "about-history-text")}>
            <p>{props?.about?.History.HistoryText}</p>
            <button>{props?.about?.History.HistoryBtn}</button>
        </div>
        <hr />
            <div className={(div5?"img scale-up-hor-right ":"img")}>
            <h1>{props?.about?.History.HistoryTitle}</h1>
            <img src={props?.about?.History.HistoryImg} alt="" />
        </div>
    </div>
    <ContactComponent size="5000" contact={props?.contact}/>
    </>
  )
}

export default About
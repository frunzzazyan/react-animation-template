import React, { useState,useEffect } from 'react'
import "./ContactUs.css"
import ContactComponent from "./ContactComponent";
const ContactUs = (props) => {

    const [div1,setDiv1] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          console.log(window.scrollY)
          if(window.scrollY >= 300){
            setDiv1(true)
          }else{
            setDiv1(false)
          }
        })
      },[])


  return (
    <>
        <div className="contactUs-firstDiv">
            <div className="div-color scale-up-hor-left">
                <img className='scale-up-hor-left' src={props.ContactUs?.contactUsImg} alt="" />
                <div className="info-div-contactUs scale-up-hor-right">
                    <h1>{props.ContactUs?.contactUsImgDivText}</h1>
                    <button>{props.ContactUs?.contactUsImgDivBtn}</button>
                </div>
            </div>
        </div>
        <div className="hours-operation">
            <div className={(div1? "text-hours-operation scale-up-ver-bottom" : "text-hours-operation")}>
                <h1>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.h1}</h1>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p1}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p2}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p3}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p4}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p5}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p6}</p>
                <p>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivText.p7}</p>
                <button>{props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivBtn}</button>
            </div>
            <div className={(div1? "img-hours-operation scale-up-ver-top " : "img-hours-operation")}><img src={props?.ContactUs?.contactUsTimeDiv.contactUsTimeDivImg} alt="" /></div>
        </div>
        <div className="style-pricing">
            <h1>Stylist & Pricing</h1>
            <div className="users-div-contact">
                <div className="user-contact">
                    <img src={props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Img} alt="" />
                    <h2>{props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Text.h2}</h2>
                    <div className="div-p">
                        <p>{props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Text.p1}</p>
                        <p>{props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Text.p2}</p>
                        <p>{props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Text.p3}</p>
                        <p>{props.ContactUs?.contactUsStyleList.StylistUser1.StylistUser1Text.p4}</p>

                    </div>
                </div>
                <div className="user-contact">
                    <img src={props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Img} alt="" />
                    <h2>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.h2}</h2>
                    <div className="div-p">
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.p1}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.p2}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.p3}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.p4}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser2.StylistUser2Text.p5}</p>
                    </div>
                </div>
                <div className="user-contact">
                    <img src={props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Img} alt="" />
                    <h2>{props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Text.h2}</h2>
                    <div className="div-p">
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Text.p1}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Text.p2}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Text.p3}</p>
                    <p>{props.ContactUs?.contactUsStyleList.StylistUser3.StylistUser3Text.p4}</p>
                    </div>
                </div>
            </div>
        </div>
        <ContactComponent size="1700" contact={props?.contact}/>
    </>
  )
}

export default ContactUs
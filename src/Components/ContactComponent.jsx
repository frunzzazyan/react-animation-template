import "./ContactComponent.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { useEffect,useState } from "react";


const ContactComponent = (props) => {

  const [contactComponent,setContactComponent] = useState(false)

  

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      if(window.scrollY >= props?.size){
        setContactComponent(true)
      }else{
        setContactComponent(false)
      }
    })
  },[])

  return (
    <>
    <div style={{top: props.top}} className="div-contact-component">
    <div className="contact-component">
        <img className={(contactComponent? "scale-up-hor-left" : "")} src={props.contact?.img} alt="" />
        <form className={(contactComponent? "scale-up-hor-right" : "")} action="#">
            <h1>{props.contact?.str}</h1>
            <span>{props.contact?.input1.type1}</span>
            <input type="text" placeholder={props.contact?.input1.placeholder1} />
            <span>{props.contact?.input2.type2}</span>
            <input type="email" placeholder={props.contact?.input2.placeholder2} />
            <span>{props.contact?.input3.type3}</span>
            <textarea name="" id=""  rows="10"></textarea>
            <input className="submit" type={props.contact?.submit} />
        </form>
    </div>
    <div className="contact-info">
      <div className={(contactComponent? "info rotate-vert-right" : "info")}>
        <h1><FaPhoneAlt />{props.contact?.call.callText}</h1>
        <p>
          {props.contact?.call.phones.phone1}
          <br />
          {props.contact?.call.phones.phone2}
        </p>
        </div>
      <div className={(contactComponent? "info rotate-vert-right" : "info")}>
        <h1><MdLocationOn />{props.contact?.location.locatilonText}</h1>
        <p>{props.contact?.location.links}</p>
      </div>
      <div className={(contactComponent? "info rotate-vert-right" : "info")}>
        <h1><MdAccessTimeFilled />{props.contact?.hours.hoursText}</h1>
        <p>{props.contact?.hours.hoursData}</p>
      </div>
    </div>
    <footer>
      <p>{props.contact?.footer.footerText}</p>
      <p>{props.contact?.footer.footerLink}</p>
    </footer>
    </div>
    </>
  )
}

export default ContactComponent
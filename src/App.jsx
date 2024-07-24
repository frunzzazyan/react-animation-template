import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './Components/ContactUs'
import About from './Components/About'
import Home from './Components/Home'


const App = () => {
    const [data,setData] = useState()
    
    useEffect(()=>{
      fetch("src/DATA/script.json").then(res=> res.json()).then(res=>setData(res))
      
        },[])
    
        
        
        return (
          <>
    <Header data={data} setData={setData} title={data?.title} menu={data?.menu} />
    <Routes>
      <Route path='/' element={<Portfolio top="3300px" footer={data?.contact.footer} call={data?.contact.call} contact={data?.contact} firstImg={data?.firstImg} firstItemText={data?.firstItemText} btnInfo1={data?.btnInfo1} btnInfo2={data?.btnInfo2} btnInfo3={data?.btnInfo3} text2={data?.text2} portfolio={data?.portfolio} />}/>
      <Route path='/home' element={<Home home={data?.menu.Home} footer={data?.contact.footer} call={data?.contact.call} contact={data?.contact}/>}/>
      <Route path='/aboutSalon' element={<About about={data?.menu.AboutSalon} footer={data?.contact.footer} call={data?.contact.call} contact={data?.contact}/>}/>
      <Route path='/ourPortfolio' element={<Portfolio  footer={data?.contact.footer} call={data?.contact.call} contact={data?.contact} firstImg={data?.firstImg} firstItemText={data?.firstItemText} btnInfo1={data?.btnInfo1} btnInfo2={data?.btnInfo2} btnInfo3={data?.btnInfo3} text2={data?.text2} portfolio={data?.portfolio} />}/>
      <Route path='/contactUs' element={<ContactUs  footer={data?.contact.footer} call={data?.contact.call} contact={data?.contact}  contactUsStylist={data?.menu.contactUsStylist} contactUsTimeDiv={data?.menu.contactUsTimeDiv} ContactUs = {data?.menu.ContactUs}/>}/>
    </Routes>


    </>
  )
}

export default App
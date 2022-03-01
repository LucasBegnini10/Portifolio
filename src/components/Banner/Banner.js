import React, { useState } from 'react'
import eu from './eu.png'
import './Banner.css'



function Banner() {
    
    const[nome, setNome] = useState("");
    
    return(
        <>
            <div className="banner">
                <div className='blur-banner'></div>
                <img src={eu} className="img-eu" alt='Imagem do Lucas Begnini'/>
                <h2 className='texto-banner'> Hi {nome}, I'm Lucas. I'm a junior developer.</h2>
                <input 
                className='input' 
                onChange={(e) => setNome(e.target.value)} 
                placeholder='Enter your name'
                maxLength="10"/>
            </div>
            
        </>
    )
}

export default Banner
import React from 'react'
import './Projects.css'

function Projects(){

  
   

    return(
        
        <div className="section-projects"> {/* SEÇÃO COM OS PROJETOS */}
            <div className='blur-projects'></div> { /* FUNDO COM PRETO*/}
            <div className='conteudo-projects'>  {/* DIV DOS PROJETOS*/}
                
                <div  className='title-projects'> {/* TÍTULO PROJETOS */}
                    <h2>My Projects</h2>
                </div>

                <div className='projects'> {/* PROJETOS */}
                    
                </div>

            </div>
        </div>  
       
    )
}

export default Projects
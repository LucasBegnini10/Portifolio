import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './Skills.css'


 function Skills(){

    const[isFlipped, setIsFlipped] = useState(false);
    
    function handleClick(){
        setIsFlipped(!isFlipped)
    }

    return(
        <div className="section2"> {/* SEÇÃO DAS SKILLS*/}

            <div className="skills"> {/* CONTEÚDO DAS SKILLS*/}
                
                <div className="title-skill"> {/* TÍTULO SKILLS*/}
                    <h2>Skills</h2>
                </div>
                
                <div className="table-skill"> {/* LINHA 1 COM OS CARDS*/}
                    

                    <div className="card"> {/* CARD HTML*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                                <i class="fa-brands fa-html5"></i>
                                <p>Html</p>
                                
                            </div>
                            <div  className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>
                                
                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                    <div className="card"> {/* CARD CSS*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                                <i class="fa-brands fa-css3-alt"></i>
                                <p>CSS</p>
                                
                            </div>
                            <div  className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>
                               
                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                    <div className="card"> {/* CARD JS*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                            <i class="fa-brands fa-js"></i>
                                <p>JavaScript</p>
                               
                            </div>
                            <div className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>
                                
                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                </div>

                <div className="table-skill"> {/* LINHA 2 COM OS CARDS*/}
                    
                    <div className="card"> {/* CARD REACT*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                                <i class="fa-brands fa-react"></i>
                                <p>ReactJs</p>
                                
                            </div>
                            <div  className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>
                                
                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                    <div className="card"> {/* CARD NODEJS*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                                <i class="fa-brands fa-node"></i>
                                <p>Node.js</p>
                                
                            </div>
                            <div  className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>
                               
                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                    <div className="card"> {/* CARD MYSQL*/}
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className='front'> {/* FRONT */}
                                <i class="fa-solid fa-database"></i>
                                <p>mySQL</p>
                               
                            </div>
                            <div className='back'> {/* BACK */}
                                <i class="fa-brands fa-html5"></i>
                                <p>BACK</p>

                            </div>
                        </ReactCardFlip>
                    </div> 
                    
                </div>

                <div className='bt-detalhes'> {/* BOTÃO DETALHES */}
                    <button 
                    className='bt'
                    onClick={handleClick}>
                        Detalhes
                    </button>
                </div>
                
            </div>
        </div>
    )
 }
 
export default Skills

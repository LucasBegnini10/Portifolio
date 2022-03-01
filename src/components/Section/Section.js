import React from "react"
import './Section.css'
import curriculo from './Curriculo-LucasBegnini.pdf'

function Section(){
    return(
        <div className="section">
            <div className="conteudo-section">
                <h2>About Me</h2>
                <p className="subtitulo-section">Cursando Análise e Desenvolvimentos de Sistemas na Fatec Americana.</p>
                <p className="texto-section">Qualificação Profissional em Programação Front-End pelo SENAI Álvares Romi.</p>
                <p className="texto-section">Sempre atento à novas tendências tecnológicas e melhorias, procuro conhecimento das mais 
                variadas formas, principalmente por cursos online.</p>
                <a href={curriculo} download>
                    <button className="download-cv">Baixar CV</button>
                </a>
            </div>
        </div>
    )
}


export default Section
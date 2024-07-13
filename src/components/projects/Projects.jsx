import Menu from '../menu/Menu';
import { useState } from 'react';


export default function Projects() {
    
    const [width] = useState(window.innerWidth);

    return (
        <div>
            <Menu />

            <h2>Projetos</h2>
            
            <div className="projects-container">
                {
                    width > 1000 ? (
                    <div className='projects-content'>
                        <div id='csharp'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                            width={150}/>
                        </div>

                        <div id="node">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" 
                            width={150}/>
                        </div>

                        <div id="react">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  
                            width={150}/>
                        </div>
                    </div>
                    ) : (
                        <div className='projects-content'> 
                            <div id='csharp'>
                                <div> 
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                                    width={50}/>
                                </div>

                                <div className='info'> 
                                    <h3>
                                        Aplicações desenvolvidas com a linguagem C# envolvem sistemas back-end, 
                                        utilizando a plataforma .NET e o framework ASP.NET.
                                    </h3> 
                                    
                                    <br/> 

                                    <a className='link' href='#'>Clique aqui e veja os projetos especificos</a>
                                </div>
                            </div>

                            <div id="node">
                                <div> 
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" 
                                    width={50}/>
                                </div>

                                <div className='info'>
                                    <h3>
                                        Aplicações Node.js podem ser utilizadas para criação de APIs e sistemas back-end, como também auxilia em 
                                        projetos front-end. 
                                    </h3>

                                    <br/> 

                                    <a className='link' href='#'>Clique aqui e veja os projetos especificos</a>
                                </div>
                            </div>

                            <div id="react">
                                <div> 
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  
                                    width={50}/>
                                </div>

                                <div className='info'>
                                    <h3>
                                        Aplicações React são utilizadas para criação de interfaces de usuário, ou seja,
                                        toda parte visual de um website ou plataforma online.
                                    </h3>

                                    <br/> 

                                    <a className='link' href='#'>Clique aqui e veja os projetos especificos</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}
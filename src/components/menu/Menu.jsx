import { useState } from 'react';


export default function Menu() {

    const [ width ] = useState(window.innerWidth);
    

    return (
        <div className='menu-container'>
            {
                width > 1000 ?  
                (<ul>

                    <li>
                        <a href='/'>Home</a>
                    </li>

                    <li>
                        <a href='/sobre'>Quem sou eu ?</a>
                    </li>

                    <li>
                        <a href="/projetos">Projetos</a>
                    </li>

                    <li>
                        <a href="/contato">Contato</a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-bueno-7b0799261/">Linkedin</a>
                    </li>

                    <li>
                        <a href="https://www.github.com/joaobueno07">Github</a>
                    </li>
                </ul>) : (
                    <div>
                        <div>
                            <img id='profile' src="/photo_profile.png"/>
                            <img width={50}/>
                        </div>

                        <div>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/sobre">Quem sou eu?</a>
                                </li>

                                <li>
                                    <a href="/projetos">Projetos</a>
                                </li>

                                <li>
                                    <a href="/contato">Contato</a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-bueno-7b0799261/">Linkedin</a>
                                </li>

                                <li>
                                    <a href="https://www.github.com/joaobueno07">Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div> 
    );
}
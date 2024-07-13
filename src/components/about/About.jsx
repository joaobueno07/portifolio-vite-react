import Menu from '../menu/Menu';

import { useState } from 'react';
import Footer from '../footer/Footer';

export default function About() {

    const [width] = useState(window.innerWidth);


    return (
        <>
            <Menu />

            <div>
            {
                width > 1000 ? (
                
                <div>
                    <div>
                        <h2>Quem sou eu?</h2>

                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>O que eu faço ?</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>Tecnologias</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>Curiosidades</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>
                
                    <Footer />
                </div>

                ) : 

                <div>
                    <div>
                        <h2>Quem sou eu?</h2>

                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>O que eu faço ?</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>Tecnologias</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div>
                        <h2>Curiosidades</h2>
                        
                        <p>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                
                    <Footer />
                    
                </div>
            }
            </div>
        </>
    );
}
export default function Content() {
    return (
        <div className='container'>
            <div className='content'>
                <h1>Olá, me chamo João Carlos</h1>
                
                <div>
                    <p id="subtitle">
                        Sou desenvolvedor capaz de criar aplicações e sistemas completos 
                        para você e seu negócio.
                    </p>
                </div>

                <div className='button-container'>
                    <a href='/projetos'>
                        <p id='button'> 
                            Clique aqui para visualizar meus projetos
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
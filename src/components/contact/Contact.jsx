import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

export default function Contact() {
    return (
        <div>
            <Menu />

            <div className="contact-container">
                <div className="contact-content">
                    <h2 className='contact-title'>Vamos desenvolver uma aplicação juntos ?</h2>
                    <p className='contact-subtitle'>Fique a vontade para entrar em contato!</p>

                    <button>
                        <a href="mailto:buenotjoao07@gmail.com?subject=Desenvolvimento de Projeto"> Enviar um e-mail </a>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
import Content from './components/content/Content';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

import './index.css';

export default function App() {

  return (
    <div className='container'>
     <Menu/>
     <Content/>
     <Footer/>
    </div>
  );
}



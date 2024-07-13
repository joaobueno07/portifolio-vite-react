import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import App from './App.jsx';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/projetos",
    element: <Projects />
  },
  {
    path: "/contato",
    element: <Contact />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
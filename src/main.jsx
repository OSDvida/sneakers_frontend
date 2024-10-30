
import { createRoot } from 'react-dom/client'
import './index.scss'
import 'primereact/resources/themes/saga-blue/theme.css';   // Tema
import 'primereact/resources/primereact.min.css';           // Estilos principais do PrimeReact
import 'primeicons/primeicons.css';                         // Ícones
import 'primeflex/primeflex.css';                           // PrimeFlex para layout
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';


createRoot(document.getElementById('root')).render(
  <Router/>
)

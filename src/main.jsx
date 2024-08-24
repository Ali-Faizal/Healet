import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';

import Hero from './Hero';
import './assets/CSS/bootstrap.css'
import './assets/CSS/font-awesome.min.css'
import './assets/CSS/responsive.css'
// import './assets/CSS/style.css'
// import './assets/CSS/style.css.map'
import './assets/CSS/style.scss'
// 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
  </StrictMode>,
)

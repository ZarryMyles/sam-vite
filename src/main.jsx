import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css'
import 'swiper/css'
import 'swiper/css/navigation'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { Error, About, Design } from './pages'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="design" element={<Design />} />
      {/* works */}
      {/* <Route path="billeasy" element={<BillEasyPage />} />
      <Route path="smart-vision" element={<SmartVision />} />
      <Route path="billeasy-visual-design" element={<BillEasyVisual />} />
      <Route path="happilyever" element={<HappilyEver />} />
      <Route path="smartvision" element={<SmartVision />} /> */}

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
)

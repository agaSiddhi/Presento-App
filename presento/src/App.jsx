import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import FooterInput from './Footer';
import PDFViewer from './PDFViewer';


export default function App() {
  return (
    <Router>
      <div className="app h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<><Navbar /><Slider /></>} />
          <Route path="/input" element={<><Navbar /><PDFViewer /><FooterInput /></>} />
        </Routes>
      </div>
    </Router>
  )
}

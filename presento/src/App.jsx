import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import FooterInput from './Footer';
import PDFViewer from './PDFViewer';


/**
 * Renders the main component of the application.
 *
 * @return {JSX.Element} The rendered main component.
 */
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

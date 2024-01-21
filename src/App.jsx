import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:manga_name" element={<ImageGallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

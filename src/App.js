

import Home from './pages/'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigninPage from './pages/signin';
import ImageUplaodPage from './pages/imageupload';
  

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/imageupload' element={<ImageUplaodPage/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage/>} />
      </Routes>
      </Router>
  
  );
}

export default App;

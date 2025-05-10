import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "d18106e430824e1987f97ede76ba339c";
  const [progress, setProgress] = useState(0);
  const[mode, setMode] = useState('light');
  
  const changeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b1b1b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  return (
    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
         onLoaderFinished={() => setProgress(0)}
      />
    <Navbar mode={mode} changeMode={changeMode} />
    <Routes>
      <Route exact  path='/'  element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='general' />} />
      <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='business' />} />
      <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='entertainment' />} />
      <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='general' />} />
      <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='health' />} />
      <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='science' />} />
      <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='sports' />} />
      <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} pageSize={15} country='in' category='technology' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

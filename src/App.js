import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navv from './component/hello';
import Hero from './component/hero';
import Service from './component/service';
import Language from './component/language';
import About from './component/About';
import Contact from './component/Contact';
import Nust from './component/Nust';
import Login from './component/login';
import Port from './component/port';
import Page from './component/webpage';
import UI from './component/ui';
import Design from './component/Design';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='complete'>
              <Navv />
              <Hero />
              <About />
              <Service />
              <Language />
              <Contact />
            </div>
          }
        />

        <Route path="/nust" element={<Nust />} />
                <Route path="/login" element={<Login />} />
                                <Route path="/port" element={<Port />} />
                                <Route path='/Page' element={<Page/>}/>
                                <Route path='/UI' element={<UI/>}/>
                               <Route path='/Design' element={<Design/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

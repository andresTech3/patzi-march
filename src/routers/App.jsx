import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import '../styles/components/App.css';

import Home from '../containers/Home.jsx';
import Chechout from '../containers/Checkout.jsx';
import Information from '../containers/Information.jsx';
import Payment from '../containers/Payment.jsx';
import Success from '../containers/Success.jsx';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext.js';
import useInicialState from '../hooks/useInicialState.js'

function App() {
  const inicialState = useInicialState();
  return(
    <AppContext.Provider value={inicialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/checkout' element={<Chechout/>}/>
            <Route exact path='/checkout/information' element={<Information/>}/>
            <Route exact path='/checkout/payment' element={<Payment/>}/>
            <Route exact path='/checkout/success' element={<Success/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;

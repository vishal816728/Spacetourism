import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from "./components/About";
import Destination from './components/destination';
import Technology from './components/technology';
import Crew from "./components/crew"

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Header></Header> 
          <Routes>
               <Route path="/"
                   element={<App />} />
          </Routes>
          <Routes>
            <Route path="/Destination" element={<Destination />}></Route>
          </Routes>
          <Routes>
            <Route path="/Crew" element={<Crew />}></Route>
          </Routes>
          <Routes>
            <Route path="/Technology" element={<Technology />}></Route>
          </Routes>
       </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

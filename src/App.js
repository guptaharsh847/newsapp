import NavBar from './components/NavBar';
import './App.css';
import About from './components/About';
import { BrowserRouter as Router,
  Route,
  Routes
   } from 'react-router-dom';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
     
      <Router>
      <NavBar/>
      <Routes>

      <Route  path="/"  element={<News key="general" pageSize={12} country= "in" category="general"/>}/>
      <Route  path="/business" exact element={<News key="business" pageSize={12} country= "in" category="business"/>}/>
      <Route  path="/health" exact element={<News key="health" pageSize={12} country= "in" category="health"/>}/>
      <Route  path="/entertainment" exact element={<News key="entertainmet" pageSize={12} country= "in" category="entertainment"/>}/>
      <Route  path="/science" exact element={<News key="science" pageSize={12} country= "in" category="science"/>}/>
      <Route  path="/sports" exact element={<News key="sports" pageSize={12} country= "in" category="sports"/>}/>
      <Route  path="/general" exact element={<News key="general" pageSize={12} country= "in" category="general"/>}/>
      <Route  path="/technology" exact element={<News key="technology" pageSize={12} country= "in" category="technology"/>}/>
      <Route  path="/about" exact element={<About key="about"/>}/>
      </Routes>
      </Router>
    
    )
  }
}
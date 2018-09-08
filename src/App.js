import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';

const ServicesComp = () => (
  <div className="liste">
    <Link className="for" to="/entrepreneurs">For entrepreneurs</Link>
    <Link className="for" to="/students">For students</Link>
    <Link className="for" to="/hobbyiests">For hobbyiests</Link>
      <div className="subTitleListe">
      <Route className="subTitle" path="/entrepreneurs" />
      <Route className="subTitle"path="/students" />
      <Route className="subTitle"path="/hobbyiests" />
      </div>
  </div>
)

class App extends Component {
  
  render() {
    return (
        <div className="items">
          <div>
            <Link className="item " to="/home" >Home </Link>
            <Link className="item" to="/services" >Services </Link>
            <Link className="item" to="/contact" >Contact </Link>
          </div>
          <div>
            <hr className="ligne"></hr>
          </div>
          <div>
            <Route path="/services" component={ServicesComp} />
          </div>
        </div>
    );
  }
}

export default App;

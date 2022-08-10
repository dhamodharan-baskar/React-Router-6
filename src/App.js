import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component, useState, useLayoutEffect } from 'react';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import Details from "./Containers/Details";
import Home from "./Containers/Home";
import Notfound from "./Containers/NotFound";


export const withRouter = (Component) =>  {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Routes>
         <Route path="/" element={<Home  {...this.props}/>}/>
         <Route path="/home" element={<Home  {...this.props}/>}/>
         <Route path="/detail" element={<Details />}/>
         <Route path="*" element={<Notfound/>}/>
       </Routes>       
     </div>
    )
  }
  }

export default  withRouter(App);

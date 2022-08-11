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
import Hooks from "./Containers/Hooks";
import Markets from "./Containers/Markets";


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
         <Route path="/" element={<Markets  {...this.props}/>}/>
       </Routes>       
     </div>
    )
  }
  }

export default  withRouter(App);

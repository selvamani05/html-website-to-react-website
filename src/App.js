import React from 'react'
/* import './App.css'; */
import Homepage from './components/HomePage'
import Gallery from './components//Gallery'
import FullWidth from './components/FullWidth'
import SideBarLeft from './components/SideBarLeft'
import SideBarRight from './components/SideBarRight'
import BasicGrid from './components/BasicGrid'
import FontIcons from './components/FontIcons'
import {Switch,Route} from "react-router-dom"; 
import Header from './components/common/Header' ;
  


function App() {
  return (
    <div>
      <Switch>
          <Route path="/gallery">
          <Gallery/>
          </Route>
          
          <Route path="/fullwidth">
          <FullWidth/>
          </Route> 

          <Route path="/sidebarleft">
          <SideBarLeft/>
          </Route> 

          <Route path="/sidebarright">
          <SideBarRight/>
          </Route>

          <Route path="/basicgrid">
          <BasicGrid/>
          </Route>

          <Route path="/fonticons">
          <FontIcons/>
          </Route>

          <Route path="/">
          <Header/>
         <Homepage/>

          </Route>

          
        </Switch>
      
    </div>
  );
}

export default App;

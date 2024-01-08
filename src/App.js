import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { profile as Profile } from './component/Navbar/profile/profile'
import { Home } from './component/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AllRoutes } from './component/Router/AllRoutes';
import { LeftSideBar } from './component/LeftSideBar/LeftSideBar';
import DrawerSideBar from './component/LeftSideBar/DrawerSideBar';
import { useState } from 'react';

function App() {
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState(false);
  const toggleDrawer = () => {
    if (toggleDrawerSidebar) {
      settoggleDrawerSidebar(false);
    } else {
      settoggleDrawerSidebar(true);
    }
  }
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} />
      {
        (toggleDrawerSidebar ? <DrawerSideBar toggleDrawer={toggleDrawer} /> : <></>)
      }
      <AllRoutes />

    </Router>
  );
}
export default App;



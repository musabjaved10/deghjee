import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import {SideNav} from "react-sidenav";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeCard from "./components/HomeCard.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProdConatiner from "./components/AddProdContainer.js"
import {DataProvider} from './components/CardData.js';
import SideNavPage from './components/SideNavbar';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <br/>
      <HomeCard/>
      {/* <AddProdConatiner/> */}
{/* <HomeCard/> */}
       {/* <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                 
    <ProSidebar
    
    >
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem>
    <MenuItem >Dashboard</MenuItem>
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem>
    <MenuItem >Dashboard</MenuItem>
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem> 
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container> */}
      
    </div>
    </DataProvider>
  );
}

export default App;

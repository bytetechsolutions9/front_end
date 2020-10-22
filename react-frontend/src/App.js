import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import addEmployeeComponent from './component/addEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import ViewEmployeeComponant from './component/ViewEmployeeComponant';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
         <HeaderComponent/>
         <div className='container'>
               <Switch> 
                    <Route path="/" exact component={ListEmployeeComponent}></Route>
                    <Route path="/employees" component={ListEmployeeComponent}></Route>
                    //step 1
                    <Route path="/add-Employees/:id" component={addEmployeeComponent}></Route>
                    {/*<Route path="/update-Employee/:id" component={UpdateEmployeeComponent}></Route>*/}

                    <Route path="/view-Employee/:id" component={ViewEmployeeComponant}></Route>

                    <ListEmployeeComponent/>
               </Switch>
             </div>
         <FooterComponent/>
       </div>
      </Router>
    </div>
  );
}

export default App;

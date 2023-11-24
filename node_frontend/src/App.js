import { BrowserRouter, Route, Routes } from 'react-router-dom';





import SignIn from './component/auth/Login';
import SignUp from './component/auth/Register';

import Dashboard from './component/dashboard/Dashboard';
import Zone from './controller/billing/creditlist';
import Cashlist_controller from './controller/billing/cashlist';
import Credit_controller from './controller/billing/credit';
import Cash_controller from './controller/billing/cash';
import BigFormPage from './trailform';
import Comapnylist_controller from './controller/billing/companylist';
import Company_controller from './controller/billing/company';
import Branch_controller from './controller/master/branch';
import Branchlist_controller from './controller/master/branchlist';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/navbar" element={<Dashboard/>} />
      <Route path="/creditlist" element={<Zone/>} />
      <Route path="/cashlist" element={<Cashlist_controller/>} />
      <Route path="/credit" element={<Credit_controller/>} />
      <Route path="/cash" element={<Cash_controller/>} />
      <Route path="/form" element={<BigFormPage/>} />
      <Route path="/companylist" element={<Comapnylist_controller/>} />
      <Route path="/company" element={<Company_controller/>} />
      <Route path="/branch" element={<Branch_controller/>} />
      <Route path="/branchlist" element={<Branchlist_controller/>} />
    
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;

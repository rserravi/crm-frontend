// https://www.youtube.com/watch?v=20V0Pd4tdT8&list=PLtPNAX49WUFP67x9OTuaFF6xZ2IABA_HW
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { PrivateRoute } from './components/private-route/PrivateRoute-comp';
import { Dashboard } from './pages/dashboard/Dashboard-page';
import { Entry } from './pages/entry/entry-page';
import { Registration } from "./pages/registration/registration-page";
import { AddTicket } from './pages/new-ticket/AddTicket-page';
import { TicketLists } from './pages/ticket-list/TicketLists-page';
import { Ticket } from './pages/ticket/Ticket-page';
import { UserVerification } from './pages/user-verification/user-verification.page';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
            <Route exact path='/' element={<Entry />}/>
        </Routes>
        <Routes>
          <Route exact path='registration' element={<Registration />}/>
          <Route exact path='verification/:randomUrl/:email' element={<UserVerification />} />
        </Routes>
        <PrivateRoute path='/dashboard' element={<Dashboard />} />
        <PrivateRoute path='/add-ticket' element={<AddTicket />} />
        <PrivateRoute path='/tickets' element={<TicketLists />} />
        <PrivateRoute path='/ticket/:tid' element={<Ticket />} />
      </Router>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=20V0Pd4tdT8&list=PLtPNAX49WUFP67x9OTuaFF6xZ2IABA_HW

import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/Default-Layout';
import { Dashboard } from './pages/dashboard/Dashboard-page';
import { Entry } from './pages/entry/entry-page';
import { AddTicket } from './pages/new-ticket/AddTicket-page';
import { TicketLists } from './pages/ticket-list/TicketLists-page';
import { Ticket } from './pages/ticket/Ticket-page';

function App() {
  return (
    <div className="App">
      {/*<Entry></Entry> */}
      <DefaultLayout>
          { /*<Dashboard></Dashboard>*/ }
          { /* <AddTicket></AddTicket>*/}
          { /*<TicketLists></TicketLists>*/}
          <Ticket></Ticket>
      </DefaultLayout>
    </div>
  );
}

export default App;

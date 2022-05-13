// https://www.youtube.com/watch?v=20V0Pd4tdT8&list=PLtPNAX49WUFP67x9OTuaFF6xZ2IABA_HW

import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/Default-Layout';
import { Entry } from './pages/entry/entry-page';

function App() {
  return (
    <div className="App">
      {/*<Entry></Entry> */}
      <DefaultLayout>
          here we can put componentes here or whatever.
      </DefaultLayout>
    </div>
  );
}

export default App;

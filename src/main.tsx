import React from 'react'
import ReactDOM from 'react-dom/client'
import {TicketApp }from './TicketApp'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
    <BrowserRouter>
      <TicketApp />
    </BrowserRouter>
   </React.StrictMode>,
)

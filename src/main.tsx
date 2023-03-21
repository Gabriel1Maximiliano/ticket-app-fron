import React from 'react'
import ReactDOM from 'react-dom/client'
import {TicketApp }from './TicketApp'
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from './context/socket-context/SocketProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   
 <SocketProvider>
     <BrowserRouter>
        <TicketApp />
      </BrowserRouter>
 </SocketProvider>
   
     
   
  
)

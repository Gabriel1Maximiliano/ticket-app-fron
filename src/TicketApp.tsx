
import React, { useState } from 'react';

import { Layout, Menu, theme } from 'antd';
import { RouterPages } from './pages/RouterPages';
import { UIProvider } from './context/UIContext';



export const TicketApp :React.FC = (props:any):ReturnType<React.FC> => {
  
 return(
  <UIProvider>
    <RouterPages />
  </UIProvider>
 
 
   
  )
}


import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { RouterPages } from './pages/RouterPages';
import { UIProvider } from './context/UIContext';

const { Header, Sider, Content } = Layout;

export const TicketApp :React.FC = (props:any):ReturnType<React.FC> => {
  
 return(
  <UIProvider>
    <RouterPages />
  </UIProvider>
   
  )
}

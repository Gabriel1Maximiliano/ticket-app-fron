import React, { useContext, useState } from 'react';
import { UploadOutlined, UserOutlined,VideoCameraOutlined,} from '@ant-design/icons';
import { Layout, Menu,theme  } from 'antd';

const {  Sider, Content } = Layout;

import { Routes, Route, NavLink } from "react-router-dom";
import { GetInto } from './GetInto';
import { Queue } from './Queue';
import { CreateTicket } from './CreateTicket';
import { Desktop } from './Desktop';
import { UIContext } from '../context/UIContext';



export const RouterPages:React.FC<any>  = ( props:any ):ReturnType<React.FC> => {

  const { token: { colorBgContainer } } = theme.useToken();

  const  { hideMenu } = useContext( UIContext );

  return ( 


    <Layout style={{ height:'100vh' }} >
    <Sider 
    breakpoint='md'
     collapsedWidth="0"
     hidden={ hideMenu }
     >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <NavLink to={'/get-into'} >Ingresar</NavLink>,
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <NavLink to={'/queue'} >cola</NavLink>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <NavLink to={'/create-ticket'} >Crear</NavLink>,
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
     
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background:colorBgContainer,
        }}
      >
        <Routes>
          <Route path='get-into' element={<GetInto />} />
          <Route path='queue' element={< Queue/>} />
          <Route path='create-ticket' element={< CreateTicket/>} />
          <Route path='desktop' element={< Desktop/>} />
          <Route path='/*' element={< GetInto/>} />
        </Routes>
       
      </Content>
    </Layout>
  </Layout>
             
   
  )
}

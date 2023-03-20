import React, { useState } from 'react';
import {
 
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const {  Sider, Content } = Layout;

export const RouterPages:React.FC  = ( props:any ):ReturnType<React.FC> => {
  return ( 

  <Layout style={{ height:'100vh' }} >
        <Sider >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Ingresar',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Cola',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Crear Ticket',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          {/* <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header> */}
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: 'gray',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      
  )
}

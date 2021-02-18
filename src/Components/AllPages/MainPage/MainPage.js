import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './mainPage.css';

import SideBar from './Sider';
import Statistics from '../Pages/Statistics/Statistics';
import Events from '../Pages/Calendar/Events';
import Accounting from '../Pages/Departments/Accounting';
import Information from '../Pages/Departments/Information';
import Logistics from '../Pages/Departments/Logistics';
import HumanResources from '../Pages/Departments/HumanResources';
import DepartmentsInfo from '../Pages/Departments/DepartmentsInfo';
import UserLog from './UserLog';

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content } = Layout;
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="home-page">
      <SideBar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
          <h5 className="userLog">
            <UserLog />
          </h5>
        </Header>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <DepartmentsInfo />
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 18,
              minHeight: '100vh',
              background: '#4d4e91',
              borderRadius: '8px',
              marginTop: '30px',
            }}
          >
            <Switch>
              <Route
                exact
                path="/main-page/statistics"
                component={Statistics}
              />
              <Route
                exact
                path="/main-page/members/af"
                component={Accounting}
              />
              <Route
                exact
                path="/main-page/members/it"
                component={Information}
              />
              <Route exact path="/main-page/members/lp" component={Logistics} />
              <Route
                exact
                path="/main-page/members/hr"
                component={HumanResources}
              />
              <Route exact path="/main-page/events" component={Events} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPage;

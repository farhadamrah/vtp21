import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UsergroupDeleteOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import './mainPage.css';
import vtp21 from '../../../assets/VTP21.png';

const SideBar = ({ collapsed }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src={vtp21} className={!collapsed ? 'logoVtp' : 'miniLogoVtp'} />
      </div>
      <Menu className="menu" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<BarChartOutlined />}>
          <Link className="item-link" to="/main-page/statistics">
            Statistics
          </Link>
        </Menu.Item>
        <SubMenu
          className="subMenu"
          key="sub1"
          icon={<UsergroupDeleteOutlined />}
          title="Members"
        >
          <Menu.Item key="2">
            <Link className="item-link" to="/main-page/members/af">
              Accounting & Finance
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link className="item-link" to="/main-page/members/it">
              Information Technology
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link className="item-link" to="/main-page/members/lp">
              Logistics & Purchasing
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link className="item-link" to="/main-page/members/hr">
              Human Resources
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="6" icon={<CalendarOutlined />}>
          <Link className="item-link" to="/main-page/events">
            Events Calendar
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;

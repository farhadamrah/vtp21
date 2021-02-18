import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Modal } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './mainPage.css';

const UserLog = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(!visible);
  };

  const menu = (
    <Menu style={{ marginTop: '15px' }}>
      <Menu.Item key="0" onClick={showModal}>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to="/">Log out</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="avatarLink" onClick={(e) => e.preventDefault()}>
          <Avatar size={35} icon={<UserOutlined />} />
          <span style={{ marginLeft: '5px' }}>User</span> <DownOutlined />
        </a>
      </Dropdown>

      <Modal
        visible={visible}
        onCancel={handleCancel}
        title="User Info"
        footer={null}
      >
        'User Info'
      </Modal>
    </div>
  );
};

export default UserLog;

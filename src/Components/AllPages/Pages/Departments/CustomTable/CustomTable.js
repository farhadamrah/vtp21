import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './CustomTable.css';

const CustomTable = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      title: 'FullName',
      dataIndex: 'fullName',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      sortDirections: ['descend', 'ascend'],
      // ellipsis: true,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: (a, b) => a.username.length - b.username.length,
      sortDirections: ['descend', 'ascend'],
      ellipsis: true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Kişi',
          value: 'Kişi',
        },
        {
          text: 'Qadın',
          value: 'Qadın',
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
      sorter: (a, b) => a.gender.length - b.gender.length,
      sortDirections: ['descend', 'ascend'],
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
      sortDirections: ['descend', 'ascend'],
      // ellipsis: true,
    },
    {
      title: 'University',
      dataIndex: 'university',
      sorter: (a, b) => a.university.localeCompare(b.university),
      sortDirections: ['descend', 'ascend'],
      // ellipsis: true,
    },
    {
      title: 'Faculty',
      dataIndex: 'faculty',
      sorter: (a, b) => a.faculty.localeCompare(b.faculty),
      sortDirections: ['descend', 'ascend'],
      // ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ['descend', 'ascend'],
      // ellipsis: true,
    },
  ];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let newData = children.filter((names) => names.fullName.includes(searchTerm));

  return (
    <div>
      <Input
        placeholder="Search"
        onChange={handleChange}
        prefix={<UserOutlined />}
      />
      <Table columns={columns} dataSource={newData} />
    </div>
  );
};

export default CustomTable;

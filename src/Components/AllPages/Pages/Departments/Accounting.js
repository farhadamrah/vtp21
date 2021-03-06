import React from 'react';
import CustomTable from './CustomTable/CustomTable';

const Accounting = () => {
  const dataAcc = [
    {
      key: '1',
      fullName: 'Sahil Zəkəryəyev',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'BMU',
      faculty: 'Maliyyə',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '2',
      fullName: 'Sadiq Hüseynov',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'ADA',
      faculty: 'Biznesin İdarə Olunması',
      degree: 'Bakalavr',
      course: 2,
      email: '-',
      address: '-',
    },
    {
      key: '3',
      fullName: 'Aydan İsgəndərova',
      username: '-',
      gender: 'Qadın',
      age: 20,
      university: 'Xəzər ',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '4',
      fullName: 'Fəqan Məmmədov',
      username: '-',
      gender: 'Kişi',
      age: 22,
      university: 'BMU',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 4,
      email: '-',
      address: '-',
    },
    {
      key: '5',
      fullName: 'Elvin Quliyev',
      username: '-',
      gender: 'Kişi',
      age: 19,
      university: 'BDU',
      faculty: 'Dünya İqtisadiyyatı',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '6',
      fullName: 'İkram Hüseynli',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'ADİU',
      faculty: 'Dövlət və Bələdiyyə İdarəetməsi',
      degree: 'Bakalavr',
      course: 4,
      email: '-',
      address: '-',
    },
    {
      key: '7',
      fullName: 'Əkbər Məmmədov ',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'ADİU',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '8',
      fullName: 'Şəfəq Süleymanova',
      username: '-',
      gender: 'Qadın',
      age: 22,
      university: 'ADİU',
      faculty: 'Maliyyə',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '9',
      fullName: 'Israfil Baxşizadə',
      username: '-',
      gender: 'Kişi',
      age: 19,
      university: 'ADİU',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 2,
      email: '-',
      address: '-',
    },
    {
      key: '10',
      fullName: 'Xanım Əliyeva',
      username: '-',
      gender: 'Qadın',
      age: 21,
      university: 'ADİU',
      faculty: 'Biznesin təşkili və idarə edilməsi',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '11',
      fullName: 'Eldəniz Mustafayev',
      username: '-',
      gender: 'Kişi',
      age: 23,
      university: 'BMU',
      faculty: 'Beynəlxalq İqtisadi Münasibətlər',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '12',
      fullName: 'Cavanşir Ənnağıyev',
      username: '-',
      gender: 'Kişi',
      age: 21,
      university: 'İstanbul Universiteti',
      faculty: 'Financial Managmen',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '13',
      fullName: 'Salatın Qəribova',
      username: '-',
      gender: 'Qadın',
      age: 20,
      university: 'BDU',
      faculty: 'Dünya İqtisadiyyatı',
      degree: 'Bakalavr',
      course: 4,
      email: '-',
      address: '-',
    },
    {
      key: '14',
      fullName: 'Elvin Süleymanov',
      username: '-',
      gender: 'Kişi',
      age: 21,
      university: 'Budapeşt Texnologiya və İqtisad Universiteti',
      faculty: 'Budapeşt Texnologiya və İqtisad Universiteti',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '15',
      fullName: 'Aytən Qurbanova,',
      username: '-',
      gender: 'Qadın',
      age: 21,
      university: 'ADİU',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 4,
      email: '-',
      address: '-',
    },
    {
      key: '16',
      fullName: 'Elmir Mahmudzadə',
      username: '-',
      gender: 'Kişi',
      age: 19,
      university: 'ADİU',
      faculty: 'Mühasibat uçotu və audit',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '17',
      fullName: 'Əfsanə Hüseynova',
      username: '-',
      gender: 'Qadın',
      age: 21,
      university: 'ADİU',
      faculty: 'Biznes və data analitikasi',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
  ];
  return (
    <div>
      <h3 style={{ color: 'white' }}>Accounting and Finance</h3>
      <CustomTable>{dataAcc}</CustomTable>
    </div>
  );
};

export default Accounting;

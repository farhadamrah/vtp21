import React from 'react';
import CustomTable from './CustomTable/CustomTable';

const Logistics = () => {
  const dataLP = [
    {
      key: '1',
      fullName: 'Məhəmməd Quluzadə',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'APDİA',
      faculty: 'Beynəlxalq münasibətlər',
      degree: 'Bakalavr',
      course: 4,
      email: '-',
      address: '-',
    },
    {
      key: '2',
      fullName: 'Ümid Heybətov',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'ADNSU',
      faculty: 'Biznesin idarə olunması',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '3',
      fullName: 'Cavid Əliyev',
      username: '-',
      gender: 'Kişi',
      age: 22,
      university: 'ADİU',
      faculty: 'Beynəlxalq biznes ',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '4',
      fullName: 'Zöhrə Yusifli',
      username: '-',
      gender: 'Qadın',
      age: 19,
      university: 'ADİU',
      faculty: 'Dünya iqtisadiyyatı',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '5',
      fullName: 'Sadiq Hüseynzadə',
      username: '-',
      gender: 'Kişi',
      age: 20,
      university: 'Çukurova Universiteti',
      faculty: 'İşletme',
      degree: 'Bakalavr',
      course: 3,
      email: '-',
      address: '-',
    },
    {
      key: '6',
      fullName: 'Səidə Məmmədova',
      username: '-',
      gender: 'Qadın',
      age: 22,
      university: 'ADİU',
      faculty: 'Maliyyə menecmenti',
      degree: 'Magistr',
      course: 1,
      email: '-',
      address: '-',
    },
    {
      key: '7',
      fullName: 'Xanım İsmayılzadə',
      username: '-',
      gender: 'Qadın',
      age: 24,
      university: 'ADİU',
      faculty: 'Dizayn',
      degree: 'Magistr',
      course: 'Məzun',
      email: '-',
      address: '-',
    },
  ];
  return (
    <div>
      <h3 style={{ color: 'white' }}>Logistic and Procurement</h3>
      <CustomTable>{dataLP}</CustomTable>
    </div>
  );
};

export default Logistics;

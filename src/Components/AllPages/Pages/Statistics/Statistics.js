import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../Statistics/statistics.css';
import AgeChart from './Charts/AgeChart';
import GenderChart from './Charts/GenderChart';
import DegreeChart from './Charts/DegreeChart';

import DepartmentChart from './Charts/DepartmentChart';
import UniversityChart from './Charts/UniversityChart';
import FacultyChart from './Charts/FacultyChart';

const Statistics = () => {
  return (
    <>
      <div class="container">
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <AgeChart />
          </Col>
          <Col span={12}>
            <GenderChart />
          </Col>

          <Col span={12}>
            <DegreeChart />
          </Col>
          <Col span={12}>
            <DepartmentChart />
          </Col>

          <Col span={12}>
            <UniversityChart />
          </Col>
          <Col span={12}>
            <FacultyChart />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Statistics;

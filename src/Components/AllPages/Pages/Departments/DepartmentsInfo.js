import React from 'react';
import { Row, Col } from 'antd';
import { DollarOutlined } from '@ant-design/icons';
import './DepartmentsInfo.css';

const DepartmentsInfo = () => {
  return (
    <>
      <Row>
        <Col className="box" span={8}>
          <Row>
            <Col span={8}>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>
            </Col>
            <Col span={15}>
              <div className="texts">
                <span className="title"> Total Members</span> <br />
                <span className="number">51</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mini-box" span={4}>
          <Row>
            <Col span={8}>
              <div className="mini-icon">
                <DollarOutlined
                  style={{
                    color: 'white',
                    fontSize: '55px',
                  }}
                />
              </div>
            </Col>
            <Col span={15}>
              <div className="mini-texts">
                <span className="mini-title">Accounting</span> <br />
                <span className="mini-number">17</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mini-box" span={4}>
          <Row>
            <Col span={8}>
              <div className="mini-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  fill="currentColor"
                  class="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
              </div>
            </Col>
            <Col span={15}>
              <div className="mini-texts">
                <span className="mini-title">IT</span> <br />
                <span className="mini-number">14</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mini-box" span={4}>
          <Row>
            <Col span={8}>
              <div className="mini-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
            </Col>
            <Col span={15}>
              <div className="mini-texts">
                <span className="mini-title">Logistics</span> <br />
                <span className="mini-number">7</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mini-box" span={4}>
          <Row>
            <Col span={8}>
              <div className="mini-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-file-earmark-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </div>
            </Col>
            <Col span={15}>
              <div className="mini-texts">
                <span className="mini-title">HR</span> <br />
                <span className="mini-number">13</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DepartmentsInfo;

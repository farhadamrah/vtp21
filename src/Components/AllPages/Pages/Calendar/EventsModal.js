import React from 'react';
import { Modal, Button, Input, DatePicker, Form, message } from 'antd';
import moment from 'moment';

const AddEventsModal = ({
  visible,
  setVisible,
  handleChange,
  title,
  setTitle,
  handleDateChange,
  events,
  setEvents,
  date,
}) => {
  const handleOk = () => {
    if (title && date) {
      setVisible(false);
      setEvents([...events, { title, date }]);
      setTitle('');
    } else {
      message.error('Please enter valid informations');
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Event"
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ maxWidth: '350px' }}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Add Event
          </Button>,
        ]}
      >
        <Form>
          <Form.Item>
            <Input
              placeholder="Event title"
              onChange={handleChange}
              id="titleInput"
              value={title}
              style={{ width: '300px' }}
            />
          </Form.Item>
          <Form.Item>
            <DatePicker
              onChange={handleDateChange}
              placeholder="Event date"
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddEventsModal;

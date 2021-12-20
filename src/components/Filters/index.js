import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filtersSlice';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [filterByStatus, setFilterByStatus] = useState('All');
  const [prioriry, setPriority] = useState([]);

  const handleInputSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSlice.actions.filterChangeText(e.target.value));
  };
  const handleRadioChange = (e) => {
    setFilterByStatus(e.target.value);
    dispatch(filterSlice.actions.filterChangeStatus(e.target.value));
  };
  const handleChangeSelectPriority = (value) => {
    setPriority(value);
    dispatch(filterSlice.actions.filterChangePriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handleInputSearchChange}
          value={searchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterByStatus} onChange={handleRadioChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={prioriry}
          onChange={handleChangeSelectPriority}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}

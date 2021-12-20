import { Button, Col, Input, Row, Select, Tag } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import todoListSlice from '../Todo/todoListSlice';
import { todoListRemainingSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector(todoListRemainingSelector);

  const [toDoInput, setTodoInput] = React.useState();
  const [prioriry, setPriority] = React.useState('High');
  const SelectRef = React.useRef('');

  const handleAddToDo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidV4(),
        name: toDoInput,
        prioriry: prioriry,
        completed: false,
      })
    );
    setTodoInput('');
    setPriority('High');
  };

  const handleOnChangeInput = (e) => {
    console.log(e.target.value);
    setTodoInput(e.target.value);
  };
  const handleOnChangeSel = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            prioriry={item.prioriry}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={toDoInput} onChange={handleOnChangeInput} />
          <Select value={prioriry} onChange={handleOnChangeSel} ref={SelectRef}>
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
          <Button type="primary" onClick={handleAddToDo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

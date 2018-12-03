import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TodoView from "./Todo/todo";
import AddTodo from "./Todo/addtodo";
describe('App', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the TodoView Component', () => {
    expect(wrapper.containsMatchingElement(<TodoView data={wrapper.instance().state.data} handleStatus={wrapper.instance().handleStatus} handleDelete={wrapper.instance().handleDelete} />)).toEqual(true);
  });
  it('should render the AddTodo Component', () => {
    expect(wrapper.containsMatchingElement(<AddTodo handleAddTask={wrapper.instance().handleAddTask} />))
  })
});
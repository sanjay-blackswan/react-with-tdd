import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './Todo/addtodo'
describe("AddTodo", () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<AddTodo handleAddTask={jest.fn()} editText={''} handleUpdateTodo={jest.fn()} />));
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it('should render a <div/>', () => {
        expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1);
    })
})
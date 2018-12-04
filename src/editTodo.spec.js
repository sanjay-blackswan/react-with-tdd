import React from 'react';
import { shallow } from 'enzyme';
import EditTodo from './Todo/EditTodo';
describe('EditTodo', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<EditTodo editText={""} handleUpdateTodo={jest.fn()} />));
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
    });
});
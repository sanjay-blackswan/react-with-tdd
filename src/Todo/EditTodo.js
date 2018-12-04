import React, { Component } from 'react';
import PropTypes from 'prop-types';
class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.editText
        }
    }
    handleOnchange = (event) => {
        this.setState({
            textInput: event.target.value
        });
    }
    render() {
        const { editText, handleUpdateTodo } = this.props;
        const { textInput } = this.state;
        return (
            <div style={{ display: 'flex', width: '500px' }}>
                <input type='text' style={{ flex: 1 }} value={textInput} onChange={this.handleOnchange} />
                <button style={{ padding: '10px', background: 'steelblue', border: '1px solid steelblue', cursor: 'pointer' }} onClick={() => { handleUpdateTodo(editText, textInput) }}  >
                    Update
                </button>
            </div>);
    }
}
EditTodo.propTypes = {
    editText: PropTypes.any,
    handleUpdateTodo: PropTypes.func
};

export default EditTodo;
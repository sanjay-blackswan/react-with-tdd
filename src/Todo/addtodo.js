import React from 'react';
import PropTypes from 'prop-types';
const AddTodo = ({ handleAddTask }) => {
    let textInput = React.createRef();
    return (
        <div style={{ display: 'flex' }}>
            <input ref={textInput} />
            <button onClick={() => { handleAddTask(textInput.current.value); textInput.current.value = ''; }}>
                Addtodo
            </button>
        </div>
    );
}

AddTodo.propTypes = {
    handleAddTask: PropTypes.func.isRequired
};

export default AddTodo;
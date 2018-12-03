import React from 'react';
import PropTypes from 'prop-types';
const AddTodo = ({ handleAddTask, editText, handleUpdateTodo }) => {
    let textInput = React.createRef();
    return (
        <div style={{ display: 'flex', width: '500px' }}>

            {
                editText ?
                    <React.Fragment>
                        <input type='text' ref={textInput} style={{ flex: 1 }} defaultValue={editText ? editText : ''} />
                        <button style={{ padding: '10px', background: 'steelblue', border: '1px solid steelblue', cursor: 'pointer' }} onClick={() => { handleUpdateTodo(editText, textInput.current.value); textInput.current.value = '' }} >
                            Update
                        </button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <input ref={textInput} style={{ flex: 1 }} />
                        <button style={{ padding: '10px', background: 'steelblue', border: '1px solid steelblue', cursor: 'pointer' }} onClick={() => { handleAddTask(textInput.current.value); textInput.current.value = ''; }}>
                            Addtodo
                        </button>
                    </React.Fragment>
            }
        </div>
    );
}

AddTodo.propTypes = {
    handleAddTask: PropTypes.func.isRequired,
    editText: PropTypes.any,
    handleUpdateTodo: PropTypes.func
};

export default AddTodo;
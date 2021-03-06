import React from 'react';
import PropTypes from 'prop-types';
const TodoView = ({ data, handleStatus, handleDelete, handleEditTodo }) => {
    return (
        <div style={{ background: "rebeccapurple" }}>
            <h2>TODO TASK </h2>
            {
                data.map((d, i) => {
                    return (
                        <div key={i} style={{ display: 'flex', width: '500px' }}>
                            <p style={{ flex: 2, cursor: 'pointer', textDecoration: (d.status) ? 'line-through' : '' }} onClick={() => { handleStatus(d.taskname) }}> {`${i} ${d.taskname}`} </p>
                            <p style={{ flex: 2, cursor: 'pointer' }} onClick={() => { handleDelete(d) }}>Delete</p>
                            <p style={{ flex: 1, cursor: 'pointer' }} onClick={() => { handleEditTodo(d.taskname) }} >Edit</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

TodoView.displayName = 'TodoView';

TodoView.propTypes = {
    data: PropTypes.array.isRequired,
    handleStatus: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEditTodo: PropTypes.func.isRequired
};

export default TodoView;

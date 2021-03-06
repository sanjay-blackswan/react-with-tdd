import React, { Component } from 'react';
import './App.css';
import TodoView from "./Todo/todo"
import AddTodo from "./Todo/addtodo";
import EditTodo from "./Todo/EditTodo";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ taskname: 'C', status: true },
      { taskname: 'C++', status: false },
      { taskname: 'Java', status: false },
      { taskname: 'Python', status: false },
      { taskname: 'COBOL', status: false }],
      editText: ''
    }
  }

  handleStatus = (name) => {
    let data = [...this.state.data];
    let index = data.findIndex(d => d.taskname === name);
    data[index].status = !data[index].status;
    this.setState({
      data: data
    })
  }

  handleDelete = (obj) => {
    let data = [...this.state.data];
    data = data.filter(d => d.taskname != obj.taskname);
    this.setState({
      data: data,
      editText: ''
    })
  }

  handleAddTask = (taskname) => {
    let data = [...this.state.data];
    data.push({
      taskname: taskname,
      status: false
    });
    this.setState({
      data: data
    })
  }

  handleEditTodo = (taskname) => {
    this.setState({
      editText: taskname
    })
  }
  handleUpdateTodo = (prevtaskname, taskname) => {
    let data = [...this.state.data];
    let index = data.findIndex(d => d.taskname === prevtaskname);
    data[index].taskname = taskname;
    this.setState({
      data: data,
      editText: ''
    })
  }

  render() {
    const { data, editText } = this.state;
    return (
      <div className="App-header">
        {
          editText ? <EditTodo editText={editText} handleUpdateTodo={this.handleUpdateTodo} />
            : <AddTodo handleAddTask={this.handleAddTask} />
        }
        <TodoView data={data}
          handleStatus={this.handleStatus}
          handleDelete={this.handleDelete}
          handleEditTodo={this.handleEditTodo} />
      </div>
    );
  }
}

export default App;

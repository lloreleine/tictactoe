import React, { Component } from 'react';
import './App.css';
import List from './List';

class Tasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: '',
      list:[]
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let newList = this.state.list;
    newList.push({value: this.state.current, isChecked: false});

    this.setState({ list: newList });
  }

  handleInput = (evt) => {
    this.setState({current: evt.target.value});
  }

  handleCheck = (task) => {
    console.log(task);
    let newList = this.state.list.map(tsk => {
      if (tsk.value === task.value) {
        tsk.isChecked = !task.isChecked
      }

      return tsk;
    })

    this.setState({ list: newList })
  }

  handleDelete = (task, index) => {
    let newList = this.state.list;
    newList.splice(index, 1);
    console.log(newList);
    this.setState({
      list: newList
    });
  }

  render() {
    return (
      <div className="margin">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add task:&nbsp;
            <input type="text" value={this.state.current} onChange={this.handleInput} />
            </label>
            {this.state.list.map((task, index) =>
              <List
                key={index}
                index={index}
                task={task}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            )}
        </form>
      </div>
    );
  }
}

export default Tasks;

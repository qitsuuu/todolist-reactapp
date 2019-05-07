import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{ id: Date.now(), value: "Eat", items: [] }],
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleAddTask() {
    const { input, tasks } = this.state;

    const newTask = {
      id: Date.now(),
      value: input,
      items: []
    };

    this.setState({ tasks: tasks.concat(newTask), input: "" });
    console.log(tasks.concat(newTask));
  }

  handleRemove(taskId) {
    const tasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks });
  }

  // shouldComponentUpdate(nextState) {
  //   if (nextState.tasks !== this.state.tasks) {
  //     console.log("State mount", this.state.tasks);
  //     return true;
  //     // } else if (nextProps.input !== this.props.input) {
  //     //   console.log("Props mount", this.props.input);
  //     //   return true;
  //   }
  // }

  render() {
    console.log(new Date().getMonth() + 1);
    const { input } = this.state;
    return (
      <div>
        <input
          type="text"
          id="input"
          value={input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTask}>Add</button>

        {this.state.tasks.map(task => (
          <Task key={task.id} task={task} onRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}

export default TaskList;

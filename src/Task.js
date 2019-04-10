import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.task,
      edit: false,
      items: props.task.items
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  onUpdate(id) {
    this.setState({ edit: true });
    console.log(this.state.edit, id);
  }

  handleUpdate(taskChanges, id) {
    const arr = this.state.task;
    arr[id] = taskChanges;

    const newTask = {
      id: this.state.task.id,
      value: taskChanges
    };

    this.setState({ task: newTask, edit: false });
    console.log(this.state.task);
  }

  handleAddItem() {
    const { items } = this.state;
    const newItem = {
      id: Date.now(),
      value: "Item " + (items.length + 1)
    };

    this.setState({ items: items.concat(newItem) });
    console.log(items.concat(newItem));
  }

  handleDeleteItem(itemId) {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items });
  }

  editView() {
    return (
      <div>
        <textarea ref="taskChanges" defaultValue={this.state.task.value} />
        <button
          onClick={() =>
            this.handleUpdate(this.refs.taskChanges.value, "value")
          }
        >
          Save
        </button>
      </div>
    );
  }

  normalView() {
    const { task } = this.state;
    return (
      <div>
        <h3>{task.value}</h3>
        <button onClick={this.handleAddItem}>+</button>
        <button onClick={() => this.props.onRemove(task.id)}>x</button>
        <button onClick={() => this.onUpdate(task.id)}>Edit</button>
        <ul>
          {this.state.items.map(item => (
            <TaskItem
              key={item.id}
              item={item}
              onDeleteItem={this.handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { edit } = this.state;
    if (edit === true) {
      return this.editView();
    } else if (edit === false) {
      return this.normalView();
    }
  }
}

export default Task;

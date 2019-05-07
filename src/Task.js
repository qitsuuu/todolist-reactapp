import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.task,
      edit: false,
      isDone: false,
      items: props.task.items
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.testClick = this.testClick.bind(this);
  }

  onUpdate(id) {
    this.setState({ edit: true });
    console.log("edit : ", this.state.edit, id);
  }

  handleUpdate(taskChanges, id) {
    const arr = this.state.task;
    arr[id] = taskChanges;

    console.log("updating", arr, taskChanges);
    const newTask = {
      id: this.state.task.id,
      value: taskChanges
    };

    this.setState({ task: newTask, edit: false });
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

  testClick() {
    const { isDone } = this.state;
    if (isDone === false) {
      this.setState({ isDone: true });
    }
    if (isDone === true) {
      this.setState({ isDone: false });
    }
  }

  doneClass() {
    let classes = "plain";

    const { isDone, task } = this.state;
    if (isDone === true) {
      classes -= "plain";
      classes += " doneClass";
      console.log("truee : checked " + task.id);
      return classes;
    } else if (isDone === false) {
      console.log("fallsssee");
      return classes;
    }
  }

  normalView() {
    const { task } = this.state;
    return (
      <div>
        <h2 className={this.doneClass()} onClick={this.testClick}>
          {task.value}
        </h2>
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

  render() {
    // console.log("rendering");
    const { edit } = this.state;
    if (edit === true) {
      return this.editView();
    } else if (edit === false) {
      return this.normalView();
    }
  }
}

export default Task;

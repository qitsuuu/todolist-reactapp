import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item,
      edit: false
    };
  }

  onUpdate(id) {
    this.setState({ edit: true });
    console.log(this.state.edit, id);
  }

  handleUpdate(itemChanges, id) {
    const arr = this.state.item;
    arr[id] = itemChanges;

    const newItem = {
      id: this.state.item.id,
      value: itemChanges
    };

    this.setState({ task: newItem, edit: false });
    console.log(this.state.item);
  }

  editView() {
    return (
      <div>
        <textarea ref="itemChanges" defaultValue={this.state.item.value} />
        <button
          onClick={() =>
            this.handleUpdate(this.refs.itemChanges.value, "value")
          }
        >
          Save
        </button>
      </div>
    );
  }

  normalView() {
    const { item } = this.state;
    return (
      <div>
        <li>{item.value}</li>
        <button onClick={() => this.props.onDeleteItem(item.id)}>x</button>
        <button onClick={() => this.onUpdate(item.id)}>Edit</button>
      </div>
    );
  }

  render() {
    console.log("rendering");
    const { edit } = this.state;
    if (edit === true) {
      return this.editView();
    } else if (edit === false) {
      return this.normalView();
    }
  }
}

export default TaskItem;

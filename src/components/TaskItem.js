import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const { item, itempar } = this.props;
    return (
      <div>
        <span
          className="plain m-3"
          id={item.id}
          contentEditable={true}
          suppressContentEditableWarning={true}
          ref="taskChanges"
          onBlur={() =>
            this.props.onUpdate(this.refs.taskChanges, itempar, item)
          }
        >
          {item.value}
        </span>
        <button onClick={() => this.props.onRemove(itempar, item)}>x</button>
      </div>
    );
  }
}

export default TaskItem;

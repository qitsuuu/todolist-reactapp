import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      func: props.testfunc
    };
  }

  defaultView() {
    const {
      task,
      onRemove,
      onUpdate,
      onUpdateItem,
      onFinished,
      onDragStart,
      onRemoveItem,
      onhandleAddItem
    } = this.props;
    return (
      <div
        className="draggable"
        style={{ backgroundColor: task.bgcolor }}
        id={task.value}
        draggable
        onDragStart={e => onDragStart(e, task.value)}
      >
        <input
          checked={task.selected}
          type="checkbox"
          onChange={() => onFinished(task)}
        />
        <span
          // className={onDoneClass(task) + " m-3"}
          className={(task.selected ? "done" : "plain").concat(" m-3")}
          id={task.id}
          contentEditable={true}
          suppressContentEditableWarning={true}
          ref="taskChanges"
          onBlur={() => onUpdate(this.refs.taskChanges, task)}
        >
          {task.value}
        </span>
        {/* <button onClick={() => onAdd(task)}>+</button> */}
        <button onClick={() => onhandleAddItem(task)}>+ Item</button>
        <button onClick={() => onRemove(task.id)}>x</button>

        <ul>
          {task.items.map(item => (
            <li key={item.id}>
              <TaskItem
                itempar={this.props.task}
                item={item}
                onRemove={onRemoveItem}
                onUpdate={onUpdateItem}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { state } = this.props;
    if (state.isEditing === true) return this.defaultView();
    else return this.defaultView();
  }
}

export default Task;

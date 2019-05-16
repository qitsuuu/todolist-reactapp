import React, { Component } from "react";

class Testing extends Component {
  constructor(props) {
    super(props);

    const colors = ["yellow", "skyblue", "teal", "pink", "purple"];
    const max = colors.length - 1;

    this.state = {
      tasks: [
        {
          id: 1,
          name: "Fruit Salad",
          status: "new",
          bgcolor: colors[Math.round(Math.random() * (+max - 0))]
        },
        {
          id: 2,
          name: "Meatballs",
          status: "done",
          bgcolor: colors[Math.round(Math.random() * (+max - 0))]
        },
        {
          id: 3,
          name: "Strawberry Shortcake",
          status: "new",
          bgcolor: colors[Math.round(Math.random() * (+max - 0))]
        },
        {
          id: 4,
          name: "Hmmmmburger",
          status: "done",
          bgcolor: colors[Math.round(Math.random() * (+max - 0))]
        }
      ]
    };
  }

  onDragStart = (ev, task) => {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("task", task);
  };

  onDragOver = ev => {
    ev.preventDefault();
    console.log("dragover");
  };

  onDrop = (ev, status) => {
    ev.preventDefault();
    let task = ev.dataTransfer.getData("task");

    let tasks = this.state.tasks.filter(t => {
      if (t.name === task) {
        t.status = status;
      }
      return t;
    });

    this.setState({ ...this.state, tasks });

    // console.log(task);
  };

  render() {
    const tasks = {
      new: [],
      done: []
    };

    this.state.tasks.forEach(task => {
      tasks[task.status].push(
        <div
          key={task.name}
          className="draggable"
          style={{ backgroundColor: task.bgcolor }}
          draggable
          onDragStart={e => this.onDragStart(e, task.name)}
        >
          {task.name}
        </div>
      );
    });

    return (
      <div className="cont-drag">
        <h2>Drag and Drop yow!!!</h2>
        <div
          className="new w-25"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "new")}
        >
          <span className="header">NEW</span>
          {tasks.new.sort()}
        </div>

        <div
          className="done w-25"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "done")}
        >
          <span className="header">DONE</span>
          {tasks.done.sort()}
        </div>
      </div>
    );
  }
}

export default Testing;

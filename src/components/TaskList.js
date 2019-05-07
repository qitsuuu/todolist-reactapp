import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      finishedTasks: [],
      isSelected: false,
      text: "",
      fruits: []
    };

    this.taskChanges = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.doneClass = this.doneClass.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.testfunc = this.testfunc.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleAdd() {
    const { tasks, text } = this.state;
    const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    const invalid = tasks.filter(t => t.value === newText).length;

    if (invalid !== 0) {
      alert(`Item "${text}" already exists.`);
    } else if (invalid === 0) {
      console.log(`${invalid} invalidities.`);

      const newItem = {
        id: Date.now(),
        value: newText,
        status: "new",
        selected: false,
        items: []
      };

      const newTask = tasks.concat(newItem);

      this.setState({
        tasks: newTask,
        text: "",
        isClicked: true
      });
    }
  }

  handleRemove(idx) {
    const tasks = this.state.tasks.filter(task => task.id !== idx);
    this.setState({ tasks });
  }

  handleUpdate(taskChanges, task) {
    const { tasks } = this.state;
    // const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    const x = document.getElementById(taskChanges.id).textContent;
    tasks[index].value = x; //issue : saves even without setState
    this.setState({ tasks });
    console.log(taskChanges);
  }

  //WORKING FUNCTION OF HANDLEFINISHED
  handleFinished(task) {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };

    if (tasks[index].selected === false) {
      tasks[index].selected = true;
      tasks[index].status = "finished";
      this.setState({
        tasks
      });
    } else if (tasks[index].selected === true) {
      tasks[index].selected = false;
      tasks[index].status = "new";
      this.setState({
        tasks
      });
    }
  }

  doneClass(task) {
    let classes = "plain ";

    if (task.selected === true) {
      classes -= "plain";
      classes = " done ";
      return classes;
    } else if (task.selected === false) {
      return classes;
    }
  }

  handleAddItem(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);

    const newItem = {
      id: Date.now(),
      value: "new item" + (task.items.length + 1)
    };

    tasks[index] = { ...task, items: task.items.concat(newItem) };
    this.setState({ tasks });
  }

  handleUpdateItem(taskChanges, parentTask, item) {
    const { tasks } = this.state;
    const taskx = tasks.indexOf(parentTask);
    const task = { ...parentTask };
    const itemx = task.items.indexOf(item);
    task.items[itemx].value = document.getElementById(
      taskChanges.id
    ).textContent;
    tasks[taskx] = { ...task };
    this.setState({ tasks });
  }

  handleRemoveItem(parentTask, item) {
    const { tasks } = this.state;
    const taskx = tasks.indexOf(parentTask);
    const task = { ...parentTask };
    task.items = task.items.filter(itm => itm.id !== item.id);
    tasks[taskx] = { ...task };
    this.setState({ tasks });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state !== nextState) {
  //     return true;
  //   } else if (this.state === nextState) {
  //     console.log("Don't update");
  //     return false;
  //   }
  // }

  componentDidMount() {
    // localStorage.clear();
    this.loadStateFromLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // console.log("Did Mounted");
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  loadStateFromLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  testfunc(name) {
    console.log(`Hello ${name}`);
  }

  handleDragOver(ev) {
    ev.preventDefault();
    console.log("just dragged over");
  }

  handleDragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.id);
    // e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    console.log("start dragging", e.target.id);
  }

  handleDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log("just dropped", data);
  }

  render() {
    // console.log(
    //   "new ",
    //   this.state.tasks,
    //   " finished ",
    //   this.state.finishedTasks
    // );
    let { text, tasks } = this.state;
    let ntasks = tasks.filter(task => task.status === "new");
    let ftasks = tasks.filter(task => task.status === "finished");
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 p-0">
            <input
              className="offset-md-4 w-25"
              type="text"
              name={"text"}
              value={text}
              onChange={this.handleChange}
              // onChange={e => this.handleChange("text", e.target.value)}
            />

            <button onClick={this.handleAdd} disabled={!text.length}>
              Add Task
            </button>
          </div>
          <div
            className="col-sm"
            onDrop={this.handleDrop}
            onDragOver={this.handleDragOver}
            width="88"
            height="31"
          >
            <h4
              id="new"
              className="drag"
              draggable
              onDragStart={this.handleDragStart}
            >
              NEW
            </h4>
            <ul>
              {ntasks.map(task => (
                <li key={task.id}>
                  <Task
                    state={this.state}
                    task={task}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                    onAdd={this.handleAdd}
                    onFinished={this.handleFinished}
                    onDoneClass={this.doneClass}
                    onChange={this.handleChange}
                    onhandleAddItem={this.handleAddItem}
                    onUpdateItem={this.handleUpdateItem}
                    onRemoveItem={this.handleRemoveItem}
                    onDragStart={this.handleDragStart}
                    testfunc={this.testfunc}
                  />
                </li>
              ))}
            </ul>
          </div>
          <hr />

          <div
            className="col-sm"
            onDrop={this.handleDrop}
            onDragOver={this.handleDragOver}
          >
            <h4
              id="finished"
              className="drag"
              draggable
              onDragStart={this.handleDragStart}
            >
              FINISHED
            </h4>
            <ul>
              {ftasks.map(task => (
                <li key={task.id}>
                  <Task
                    state={this.state}
                    task={task}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                    onAdd={this.handleAdd}
                    taskChanges={this.taskChanges}
                    onFinished={this.handleFinished}
                    onDoneClass={this.doneClass}
                    onChange={this.handleChange}
                    onhandleAddItem={this.handleAddItem}
                    onUpdateItem={this.handleUpdateItem}
                    onRemoveItem={this.handleRemoveItem}
                    onDragStart={this.handleDragStart}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

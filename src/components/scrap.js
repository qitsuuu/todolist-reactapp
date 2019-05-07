// handleRemove(idx) {
//   const tasks = this.state.tasks.filter(task => task.id !== idx);
//   const finishedTasks = this.state.finishedTasks.filter(
//     ftask => ftask.id !== idx
//   );

//   this.setState({ tasks, finishedTasks });
// }

// handleUpdate(taskChanges, task) {
//   const { tasks, finishedTasks } = this.state;
//   // const tasks = [...this.state.tasks];

//   const nx = tasks.indexOf(task);
//   const fx = finishedTasks.indexOf(task);
//   tasks[nx] = { ...task };
//   finishedTasks[fx] = { ...task };
//   const x = document.getElementById(taskChanges.id).textContent;

//   tasks[nx].value = x;
//   // finishedTasks[fx].value = x;
//   this.setState({ tasks });

//   console.log("Clicked Update", nx, fx);
// }

//WORKING FUNCTION OF HANDLEFINISHED thru saving in another array

// handleFinished(task) {
//   const { finishedTasks, tasks } = this.state;
//   // const tasks = [...this.state.tasks];
//   // const finishedTasks = [...this.state.finishedTasks];
//   const nx = tasks.indexOf(task);
//   const fx = finishedTasks.indexOf(task);
//   tasks[nx] = { ...task };
//   finishedTasks[fx] = { ...task };

//   const removeFromNew = tasks.filter(ntask => ntask.id === task.id);
//   const AddToNew = finishedTasks.filter(ftask => ftask.id === task.id);
//   const newList = tasks.filter(ntask => ntask.id !== task.id);
//   const finishedList = finishedTasks.filter(ftask => ftask.id !== task.id);

//   if (tasks[nx].selected === false) {
//     tasks[nx].selected = true;
//     tasks[nx].status = "finished";
//     this.setState({
//       finishedTasks: finishedTasks.concat(removeFromNew),
//       tasks: newList
//     });
//   } else if (finishedTasks[fx].selected === true) {
//     finishedTasks[fx].selected = false;
//     finishedTasks[fx].status = "new";
//     this.setState({
//       finishedTasks: finishedList,
//       tasks: tasks.concat(AddToNew)
//     });
//   }

//   console.log("test", nx, fx);

//   // localStorage.setItem("finishedTasks", JSON.stringify(removeFromNew));
//   // localStorage.removeItem("finishedTasks");
// }

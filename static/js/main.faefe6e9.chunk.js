(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(10),o=a.n(i),r=(a(18),a(11)),l=a(2),d=a(8),c=a(3),h=a(4),u=a(7),m=a(5),v=a(6),f=a(1),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.itempar;return s.a.createElement("div",null,s.a.createElement("span",{className:"item m-3",id:a.id,contentEditable:!0,suppressContentEditableWarning:!0,ref:"taskChanges",onBlur:function(){return e.props.onUpdate(e.refs.taskChanges,n,a)}},a.value),s.a.createElement("button",{onClick:function(){return e.props.onRemove(n,a)}},"x"))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={func:e.testfunc},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"defaultView",value:function(){var e=this,t=this.props,a=t.task,n=t.onRemove,i=t.onUpdate,o=t.onUpdateItem,r=t.onFinished,l=t.onDragStart,d=t.onRemoveItem,c=t.onhandleAddItem;return s.a.createElement("div",{className:"draggable",style:{backgroundColor:a.bgcolor},id:a.value,draggable:!0,onDragStart:function(e){return l(e,a.value)}},s.a.createElement("input",{checked:a.selected,type:"checkbox",onChange:function(){return r(a)}}),s.a.createElement("span",{className:(a.selected?"done":"plain").concat(" m-3"),id:a.id,contentEditable:!0,suppressContentEditableWarning:!0,ref:"taskChanges",onBlur:function(){return i(e.refs.taskChanges,a)}},a.value),s.a.createElement("button",{onClick:function(){return c(a)}},"+ Item"),s.a.createElement("button",{onClick:function(){return n(a.id)}},"x"),s.a.createElement("ul",null,a.items.map(function(t){return s.a.createElement("li",{key:t.id},s.a.createElement(b,{itempar:e.props.task,item:t,onRemove:d,onUpdate:o}))})))}},{key:"render",value:function(){return this.props.state.isEditing,this.defaultView()}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={tasks:[],finishedTasks:[],isSelected:!1,text:"",fruits:[]},a.taskChanges=s.a.createRef(),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleAdd=a.handleAdd.bind(Object(f.a)(Object(f.a)(a))),a.handleRemove=a.handleRemove.bind(Object(f.a)(Object(f.a)(a))),a.handleUpdate=a.handleUpdate.bind(Object(f.a)(Object(f.a)(a))),a.handleFinished=a.handleFinished.bind(Object(f.a)(Object(f.a)(a))),a.doneClass=a.doneClass.bind(Object(f.a)(Object(f.a)(a))),a.handleAddItem=a.handleAddItem.bind(Object(f.a)(Object(f.a)(a))),a.handleUpdateItem=a.handleUpdateItem.bind(Object(f.a)(Object(f.a)(a))),a.handleRemoveItem=a.handleRemoveItem.bind(Object(f.a)(Object(f.a)(a))),a.handleDragStart=a.handleDragStart.bind(Object(f.a)(Object(f.a)(a))),a.handleDrop=a.handleDrop.bind(Object(f.a)(Object(f.a)(a))),a.handleDragOver=a.handleDragOver.bind(Object(f.a)(Object(f.a)(a))),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(d.a)({},a,n))}},{key:"handleAdd",value:function(){var e=["lightyellow","skyblue","lightgray","pink","lightpink","wheat"],t=e.length-1,a=this.state,n=a.tasks,s=a.text,i=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),o=n.filter(function(e){return e.value===i}).length;if(0!==o)alert('Item "'.concat(s,'" already exists.'));else if(0===o){console.log("".concat(o," invalidities."));var r={id:Date.now(),value:i,status:"new",bgcolor:e[Math.round(Math.random()*(+t-0))],selected:!1,items:[]},l=n.concat(r);this.setState({tasks:l,text:"",isClicked:!0})}}},{key:"handleRemove",value:function(e){var t=this.state.tasks.filter(function(t){return t.id!==e});this.setState({tasks:t})}},{key:"handleUpdate",value:function(e,t){var a=this.state.tasks,n=a.indexOf(t);a[n]=Object(l.a)({},t);var s=document.getElementById(e.id).textContent;a[n].value=s,this.setState({tasks:a}),console.log(e)}},{key:"handleFinished",value:function(e){var t=Object(r.a)(this.state.tasks),a=t.indexOf(e);t[a]=Object(l.a)({},e),!1===t[a].selected?(t[a].selected=!0,t[a].status="finished",this.setState({tasks:t})):!0===t[a].selected&&(t[a].selected=!1,t[a].status="new",this.setState({tasks:t}))}},{key:"doneClass",value:function(e){var t="plain ";return!0===e.selected?(t-="plain",t=" done "):!1===e.selected?t:void 0}},{key:"handleAddItem",value:function(e){var t=this.state.tasks,a=t.indexOf(e),n={id:Date.now(),value:"new item"+(e.items.length+1)};t[a]=Object(l.a)({},e,{items:e.items.concat(n)}),this.setState({tasks:t})}},{key:"handleUpdateItem",value:function(e,t,a){var n=this.state.tasks,s=n.indexOf(t),i=Object(l.a)({},t),o=i.items.indexOf(a);i.items[o].value=document.getElementById(e.id).textContent,n[s]=Object(l.a)({},i),this.setState({tasks:n})}},{key:"handleRemoveItem",value:function(e,t){var a=this.state.tasks,n=a.indexOf(e),s=Object(l.a)({},e);s.items=s.items.filter(function(e){return e.id!==t.id}),a[n]=Object(l.a)({},s),this.setState({tasks:a})}},{key:"componentDidMount",value:function(){this.loadStateFromLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),console.log("Did Mounted")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"loadStateFromLocalStorage",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(d.a)({},e,t))}catch(a){this.setState(Object(d.a)({},e,t))}}}},{key:"saveStateToLocalStorage",value:function(){for(var e in this.state)localStorage.setItem(e,JSON.stringify(this.state[e]))}},{key:"handleDragOver",value:function(e){e.preventDefault(),console.log("dragged over")}},{key:"handleDragStart",value:function(e,t){e.dataTransfer.setData("task",t),console.log(t)}},{key:"handleDrop",value:function(e,t){e.preventDefault();var a=e.dataTransfer.getData("task"),n=this.state.tasks.filter(function(e){return e.value===a&&(e.status=t),console.log("dropped",a),e});this.setState(Object(l.a)({},this.state,{tasks:n}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.tasks,i={new:[],finished:[],wip:[]};return n.forEach(function(t){i[t.status].push(s.a.createElement(p,{key:t.id,state:e.state,task:t,onRemove:e.handleRemove,onUpdate:e.handleUpdate,onAdd:e.handleAdd,onFinished:e.handleFinished,onDoneClass:e.doneClass,onChange:e.handleChange,onhandleAddItem:e.handleAddItem,onUpdateItem:e.handleUpdateItem,onRemoveItem:e.handleRemoveItem,onDragStart:e.handleDragStart}))}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 p-5 toolbar"},s.a.createElement("input",{className:"offset-md-4 w-25",type:"text",name:"text",value:a,onChange:this.handleChange}),s.a.createElement("button",{onClick:this.handleAdd,disabled:!a.length},"Add Task")),s.a.createElement("div",{className:"col-sm-4 new",onDragOver:function(t){return e.handleDragOver(t)},onDrop:function(t){return e.handleDrop(t,"new")}},s.a.createElement("h3",{className:"header"},"New"),i.new),s.a.createElement("div",{className:"col-sm-4 wip",onDragOver:function(t){return e.handleDragOver(t)},onDrop:function(t){return e.handleDrop(t,"wip")}},s.a.createElement("h3",{className:"header"},"WIP"),i.wip),s.a.createElement("div",{className:"col-sm-4 finished",onDragOver:function(t){return e.handleDragOver(t)},onDrop:function(t){return e.handleDrop(t,"finished")}},s.a.createElement("h3",{className:"header"},"Finished"),i.finished)))}}]),t}(n.Component);o.a.render(s.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.faefe6e9.chunk.js.map
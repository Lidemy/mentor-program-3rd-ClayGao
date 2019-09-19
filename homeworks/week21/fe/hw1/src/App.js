import React, {Component} from 'react'
import './style.scss'


class Input extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="task-input">
                <form>
                    <input type="text" onChange={this.props.handleTaskText} className="taskInputBlock" value={this.props.inputValue} />
                    <input type="button" onClick={this.props.addTask} value="Send" />
                 </form>
           </div>
        )
    }
}

class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const tasks = this.props.todoListContext 
        return (
            <div className="todo-list">
                {tasks.map(task => (
                    <div className="todo-list-task">
                        <span className="todo-list-task-is-done">{task.isComplete ? `O` : `X`}</span>
                        <span className="todo-list-task-text" dataid={task.taskId}>{task.taskText}</span>
                        <input type="button" value="Complete" onClick={this.props.completeTask.bind(this,task.taskId)} />
                        <input type="button" value="Delete" onClick={this.props.deleteTask.bind(this,task.taskId)}/>
                    </div>
                ))}
            </div>
        )
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            tasks : [],
            taskText : '',
            taskId : 1
        }
        
        this.addTask = this.addTask.bind(this)
        this.handleTaskText = this.handleTaskText.bind(this)
        this.completeTask = this.completeTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    // 完成選定 id 的 task
    completeTask(id) {
        const {tasks} = this.state
        this.setState({
            tasks: tasks.map(task => {
                if (task.taskId === id) {
                    return {
                        ...task,
                        isComplete: !task.isComplete
                    }
                } return task
            })
        })
    }

    // 刪除選定 id 的 task
    deleteTask(id) {
        const {tasks} = this.state
        this.setState({
            tasks: tasks.filter(task => (
                task.taskId !== id
            ))
        })
    }

    // 上課範例方法，input 輸入同時改變 state 的值
    handleTaskText(e) {
        this.setState({
            taskText : e.target.value
        })
    }

    addTask() {
        const {tasks, taskText, taskId} = this.state
        if (!taskText) { 
            alert('請輸入內容') 
            return 
        }
        this.setState({
            tasks : [...tasks, {
                taskId: taskId,
                taskText: taskText,
                isComplete: false
            }],
            taskText: '',
            taskId : taskId + 1
        })
    }

    render() {
        const {tasks, taskText} = this.state
        return (
            <div className="wrapper">
                <Input inputValue={taskText} handleTaskText={this.handleTaskText} addTask={this.addTask} />
                <TodoList todoListContext={tasks} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
            </div>
        )
    }
}
 

export default App
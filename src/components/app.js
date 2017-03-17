import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
	{
		task: "Make react tutorial",
		isCompleted: false
	},
	{
		task: "eat with ??",
		isCompleted: true
	}
]

export default class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			todos: todos
		}
	}
	render() {
		return (
			<div>
				<h1 className="text-center">Todo App</h1>
				<CreateTodo createTask={this.createTask.bind(this)}  todos={this.state.todos} />
				<TodosList 
					todos={this.state.todos} 
					toogleTask={this.toogleTask.bind(this)}
					saveTask={this.saveTask.bind(this)} 
					deleteTask={this.deleteTask.bind(this)} />
			</div>
		);
	}

	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({todos: this.state.todos});
	}
	toogleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos: this.state.todos});
	}
	createTask(task){
		this.state.todos.push({task, isCompleted:false});
		this.setState({todos: this.state.todos});
	}

	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask
		this.setState({todos: this.state.todos});
	}
}
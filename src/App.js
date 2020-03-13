import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const originalList = [
  {
    name: "Work on roof",
    id: 123,
    completed: false
  },
  {
    name: "Get milk",
    id: 124,
    completed: false
  },
  {
    name: "Get tools to work on roof",
    id: 1235,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: originalList
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = itemName => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          name: itemName,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = itemId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearCompleted = () => {
    console.log("bk: App.js: App: clearPurchased");
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    });
  };


  render() {
    return (
      <>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addItem={this.addItem} 
            handleAddItem={this.handleAddItem} 
            handleChanges={this.handleChanges}
          />
        </div>
        <TodoList
          todoList={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </>
    );
  }
}

export default App;

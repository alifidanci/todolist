import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Styles/TodoList.css'
import TodoItem from "./TodoItem";
//import {GetTodoList} from '../app/Services';
import {connect} from "react-redux";
import { loadTodos } from "../redux/todos";
import AddTodoItem from "./AddTodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        //GetTodoList();

    }

    componentDidMount() {
        const {loadTodos} = this.props;
        loadTodos();
    }

    render() {
        const {todos} = this.props;
        return (
            <div className="custom-todo-list">
                <h1 className="todo-list-title">
                    Todo List
                </h1>
                <AddTodoItem />
                <div className="todo-list-items">
                    {
                        todos.map(todo => {
                            return (
                                <TodoItem
                                    key={todo.id}
                                    id={todo.id}
                                    status={todo.completed}
                                    name={todo.name}
                                />
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

TodoList.propTypes = {
    loadTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todos:state.todos.todos
});

const mapDispatchToProps = (dispatch) => ({
    loadTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
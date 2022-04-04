import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addNewTodo} from "../redux/todos";
import {connect} from "react-redux";
import '../Styles/AddTodoItem.css'

class AddTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: ""
        };
        this.changeTodoName = this.changeTodoName.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    changeTodoName(event) {
        this.setState({
            todoName: event.target.value
        });
    }

    saveTodo() {
        const {todoName} = this.state;
        const {addNewTodo} =this.props;
        addNewTodo(todoName);
        this.setState({todoName:''});
    }

    render() {
        const {todoName} = this.state;
        return (
            <div className="new-todo-box">
                <div className="input-group">
                    <input
                        type="text"
                        className="new-todo-name"
                        placeholder="Enter the todo name.."
                        value={todoName}
                        onChange={this.changeTodoName}
                    />
                    <button
                        className="add-button"
                        onClick={this.saveTodo}

                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

AddTodoItem.propTypes = {
    addNewTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (name) => dispatch(addNewTodo(name)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoItem);
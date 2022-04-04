import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {deleteTodo, toggleTodo} from "../redux/todos";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../Styles/TodoItem.css'

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    handleToggle(id,e) {
        const {toggleTodo} = this.props;
        const currentStatus = e.target.checked;
        toggleTodo( id, currentStatus );
    }

    handleDelete(id) {
        const { deleteTodo } = this.props;
        deleteTodo( id );
    }

    render() {
        const {id, status, name} = this.props;
        return (
            <div className={status ? "todo-item completed":"todo-item"}>
                <input
                    className="todo-item-checkbox"
                    type="checkbox"
                    defaultChecked={status}
                    onChange={(e) => this.handleToggle(id,e)}
                />
                <span className="todo-item-name">
                    {name}
                </span>
                <button
                    className="todo-remove-button"
                    onClick={() => this.handleDelete(id)}
                >
                    <span className="todo-remove-span">Remove</span>
                    <FontAwesomeIcon
                        className="todo-remove-icon"
                        icon={faTrash} />
                </button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string,
    status: PropTypes.bool,
    name:PropTypes.string
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id, status) => dispatch(toggleTodo(id, status)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
import { createAction, handleActions } from 'redux-actions';
import { GetTodoList, AddNewTodo, DeleteTodo, ToggleTodo } from "../app/Services";

const initialState = {
    todos:[]
};

export const setTodos = createAction('SET_TODO_LIST');

export default handleActions( {
    SET_TODO_LIST: (state, action) => ({ ...state, todos: action.payload }),
},initialState);

export const loadTodos = () => {
    return function (dispatch) {
        GetTodoList().then(resp => {
            dispatch(setTodos(resp.data));
        })
    }
};

export const addNewTodo = (name) => {
    return function (dispatch) {
        AddNewTodo(name).then(resp => {
            dispatch(setTodos(resp.data));
        })
    }
};

export const deleteTodo = (id) => {
    return function (dispatch) {
        DeleteTodo(id).then(resp => {
            dispatch(setTodos(resp.data));
        })
    }
};

export const toggleTodo = (id, status) => {
    return function (dispatch) {
        ToggleTodo(id, status).then(resp => {
            dispatch(setTodos(resp.data));
        })
    }
};

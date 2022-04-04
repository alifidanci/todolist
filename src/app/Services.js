import axios from 'axios';

//This API is available for 14 days from today (01.04.2022)
const axs = axios.create({
    baseURL: 'https://api.fake.rest/9a51e287-1226-4cc1-a03a-74e2aa6e533b/',
});

export const GetTodoList = () =>{
    return axs.get(`list/get`);
};

export const AddNewTodo = (name) =>{
    return axs.post(`list/add`,{name:name});
};

export const DeleteTodo = (id) =>{
    return axs.delete(`list/delete`,{data: {
            id: id
        }});
};

export const ToggleTodo = (id,status) =>{
    return axs.put(`list/toggle`,{
            id: id,
            completed: status
        });
};
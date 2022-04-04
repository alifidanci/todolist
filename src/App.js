import './Styles/App.css';
import TodoList from './components/TodoList';
import {faThList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="header">
          <h1>Header</h1>
      </div>
      <div className="sidebar">
          <FontAwesomeIcon
              className="menu-icon"
              icon={faThList} />
          <h1 className="section-title">Sidebar</h1>
      </div>
        <div className="main">
            <div className="content1">
                <h1>Slider</h1>
            </div>
            <div className="content2">
                <TodoList />
            </div>
            <div className="content3">
                <h1>Lorem </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolores ea iste pariatur, perferendis quod reiciendis reprehenderit sint vero. Ea itaque minus quo? Asperiores, deserunt dolore dolorem doloremque enim error est, ex iure omnis optio, placeat possimus quaerat repellendus sapiente similique tenetur totam. Alias aspernatur excepturi expedita quibusdam quo?</p>
            </div>
        </div>

    </div>
  );
}

export default App;

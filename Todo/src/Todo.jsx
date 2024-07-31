import React, { useState } from 'react';
import styles from './TodoApp.module.css';
import uncheckedImg from './assets/unchecked.png';
import checkedImg from './assets/checked.png';
import bookImg from './assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input === '') {
      alert('You must write something!');
    } else {
      setTasks([...tasks, { text: input, checked: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoApp}>
        <h2>
          Todo App
          <img src={bookImg} alt="Book Icon" className={styles.bookIcon} />
        </h2>
        <div className={styles.row}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add your text"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? styles.checked : ''}>
              <div
                className={styles.checkbox}
                onClick={() => toggleTask(index)}
                style={{ backgroundImage: `url(${task.checked ? checkedImg : uncheckedImg})` }}
              ></div>
              {task.text}
              <span onClick={() => removeTask(index)} className={styles.crossIcon}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;

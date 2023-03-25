import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import { Empty } from "./Empty";

import styles from "./Tasks.module.css";

export interface TasksProps {
  id: string;
  content: string;
  checked: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [tasksAmount, setTasksAmount] = useState(0);
  const [tasksCheckedAmount, setTasksCheckedAmount] = useState(0);

  function handleCreateNewTask() {
    const newTask = {
      id: uuidv4(),
      content: newTaskContent,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setTasksAmount((state) => {
      return state + 1;
    });
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskContent(event.target.value);
  }

  function handleCheck(id: string) {
    const checkedTask = tasks.map((task) => {
      if (task.id === id) {
        const checkedTaskObj = { ...task, checked: !task.checked };
        if (checkedTaskObj.checked) {
          setTasksCheckedAmount((state) => state + 1);
        } else {
          setTasksCheckedAmount((state) => state - 1);
        }
        return checkedTaskObj;
      }
      return task;
    });
    setTasks(checkedTask);
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
    setTasksAmount((state) => {
      return state - 1;
    });
  }

  const isNewTaskContentEmpty = newTaskContent.length === 0; // Contando o número de caracteres

  return (
    <>
      <div className={styles.inputNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskContent}
          onChange={handleNewTaskChange}
        />
        <button
          type="button"
          onClick={handleCreateNewTask}
          disabled={isNewTaskContentEmpty}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </div>

      <div className={styles.markers}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasksAmount}</span>
        </div>
        <div className={styles.concludedTasks}>
          <strong>Concluídas</strong>
          <span>
            {tasksCheckedAmount && tasksAmount
              ? `${tasksCheckedAmount} de ${tasksAmount}`
              : 0}
          </span>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              onDeleteTask={deleteTask}
              onCheck={handleCheck}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </>
  );
}

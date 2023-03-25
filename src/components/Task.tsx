import { Trash } from "phosphor-react";
import { TasksProps } from "./Tasks";
import React, { useState } from "react";

import styles from "./Task.module.css";

interface TaskTypes {
  task: TasksProps;
  onDeleteTask: (id: string) => void;
  onCheck: (id: string) => void;
}

export function Task({ task, onCheck, onDeleteTask }: TaskTypes) {
  return (
    <div className={styles.item}>
      <input type="checkbox" onChange={() => onCheck(task.id)} />
      <p className={task.checked ? styles.textChecked : styles.textUnchecked}>
        {task.content}
      </p>
      <button title="Deletar tarefa" onClick={() => onDeleteTask(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}

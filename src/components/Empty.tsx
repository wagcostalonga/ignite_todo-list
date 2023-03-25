import styles from "./Empty.module.css";

import clipboardImg from "../assets/clipboard.png";

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>Crie tarefas e
        organize seus itens a fazer
      </p>
    </div>
  );
}

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Tasks />
      </main>
    </div>
  );
}

export default App;

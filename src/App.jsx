import logo from './logo.svg';
import styles from './App.module.css';

function App() {

  const errorClick = (event) => {
    console.log("Button Clicked!", event)
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <button class={styles.sampleButton} onClick={errorClick}>Errors</button>
        <p>Will this be a failure?</p>
      </header>
    </div>
  );
}
export default App;

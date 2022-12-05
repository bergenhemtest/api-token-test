import logo from './logo.svg';
import styles from './App.module.css';

import { onMount, createSignal, Show } from 'solid-js';
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

function App() {

  onMount(() => {   
    // environment variable comes from GitHub Actions job
    let envVar = import.meta.env.VITE_ENVIRONMENT;
    
    if(envVar) { //will be undefined in local development
      Sentry.init({
        dsn: "https://979354779c2640c2b9464b4e22046c49@o4504176326279168.ingest.sentry.io/4504244182450176",
        integrations: [new BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
    }
    
    let faviconLink = document.querySelector('link[rel="shortcut icon"]') ||
    document.querySelector('link[rel="icon"]');

    // just in case something happens with our favicon
    if(!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.id = "favicon";
      faviconLink.rel = "shortcut icon";
      document.head.appendChild(faviconLink);
    }

    let faviconUrl;

    switch(envVar) {
      case "develop":
        faviconUrl = "/src/assets/favicons/develop-favicon.ico";
        break;
      case "staging":
        faviconUrl = "/src/assets/favicons/staging-favicon.ico";
        break;
      case "production":
        faviconUrl = "/src/assets/favicons/prod-favicon.ico";
        break;
      default:
        faviconUrl = "/src/assets/favicon.ico";
    }

    faviconLink.href = faviconUrl;

  });

  const [errorStart, setErrorStart] = createSignal(null);

  const errorClick = (event) => {
    if(errorStart() === null) {
      setErrorStart(setInterval(() => {
        throw new Error('Everything is awful');
      }, 1000));
    }
    else {
      clearInterval(errorStart());
      setErrorStart(null);
    }
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
        <Show
          when={errorStart()}
          fallback={<button class={styles.sampleButton} onClick={errorClick}>Start Errors</button>}
        >
          <button class={styles.sampleButton} onClick={errorClick}>Stop Errors</button>
        </Show>
        <p>Will this be a failure?</p>
      </header>
    </div>
  );
}
export default App;

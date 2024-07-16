import { ReactLifecycleClass } from './components/ReactLifecycleClass';
import { ReactLifecycle } from './components/ReactLifecycle';
import WordProcessor from "./components/WordProcessor";

function App() {
  // return <ReactLifecycleClass />;
  // return <ReactLifecycle />;
  return (
      <div className="App">
          <WordProcessor/>
      </div>
  )
}

export default App;

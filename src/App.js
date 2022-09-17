
import './App.css';
import FocusTimer from './Components/FocusTimer/FocusTimer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Logo'>
          Focusify
        </h1>
      </header>
      <div className='Container'>
        <FocusTimer />
      </div>
    </div>
  );
}

export default App;

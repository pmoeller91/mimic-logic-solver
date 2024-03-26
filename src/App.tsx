import './App.css';
import { LanguageSwitcher } from './components/language-switcher/LanguageSwitcher';

function App() {
  return (
    <>
      <h1>Mimic Logic Solver</h1>
      <div className="card">
        <LanguageSwitcher />
      </div>
    </>
  );
}

export default App;

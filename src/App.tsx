import './App.css';
import { LanguageSwitcher } from './components/language-switcher/LanguageSwitcher';

function App() {
  return (
    <>
      <h1>Mimic Logic Solver</h1>
      <div className="flex flex-row w-full">
        <div className="w-32 h-32 bg-pdd" />
        <div className="w-32 h-32 bg-pd" />
        <div className="w-32 h-32 bg-p" />
        <div className="w-32 h-32 bg-pl" />
        <div className="w-32 h-32 bg-pll" />
        <div className="w-32 h-32 bg-cdd" />
        <div className="w-32 h-32 bg-cd" />
        <div className="w-32 h-32 bg-c" />
        <div className="w-32 h-32 bg-cl" />
        <div className="w-32 h-32 bg-cll" />
      </div>
      <div className="card">
        <LanguageSwitcher />
      </div>
    </>
  );
}

export default App;

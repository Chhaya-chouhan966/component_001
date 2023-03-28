import './App.css';
import Exprience from './component/Exprience';
import Headar from './component/Headar';
import Hobbies from './component/Hobbies';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Headar/>
      <Exprience/>
      <Skills/>
      <Hobbies/>
    </div>
  );
}

export default App;

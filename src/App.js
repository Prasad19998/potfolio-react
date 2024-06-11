import NavBar from "./component/NavBar/navbar";
import Intro  from './component/Intro/intro'
import Skills from "./Skills/skills";
import Works from "./component/Works/works";


function App() {
  return (
    <div className="App">
    <NavBar />
    <Intro/>
    <Skills/>
    <Works/>
      </div>
  );
}

export default App;

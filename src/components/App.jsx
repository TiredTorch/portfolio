import './App.scss';

import Header from './Header/Header';
import Visitings from './section_elements/Visitings/Visitings';
import Skills from './section_elements/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Visitings/>
      <Skills/>
    </div>
  );
}

export default App;

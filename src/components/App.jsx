import './App.scss';

import Header from './Header/Header';
import Visitings from './section_elements/Visitings/Visitings';
import Skills from './section_elements/Skills/Skills';
import Works from './section_elements/Works/Works';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Visitings/>
      <Skills/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;

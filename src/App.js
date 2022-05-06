import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <Header greeting={'Welcome to the Animal farm!'}/>
      <Main animals={animals} />
      <Footer email={'testemail@email.com'}/>
    </div>
  );
}

export default App;

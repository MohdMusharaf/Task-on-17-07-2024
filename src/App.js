import logo from './logo.svg';
import Counter from './code/counter.js';
import Fruit from './code/fruits.js';
import Speed from './code/speed.js';
import Subscribe from './code/subscribe.js';
import ShowHide from './code/showhide.js';
import Random from './code/random.js';
import LoginLogout from './code/loginout.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Counter />
      <Speed />
      <Fruit />
      <Subscribe />
      <ShowHide />
      <Random />
      <LoginLogout />
      </header>
    </div>
  );
}

export default App;

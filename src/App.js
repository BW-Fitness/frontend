import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import InstClassList from './components/InstClassList';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Navbar} />
      <Route path='/' component={InstClassList} />
    </div>
  );
}

export default App;

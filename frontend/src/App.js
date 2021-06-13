import './App.css';
import Navbar from './layouts/Navbar';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import CityList from './pages/CityList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path ="/" component = {Dashboard}/>
      <Route path ="/" component = {Auth}/>
    </div>
  );
}

export default App;

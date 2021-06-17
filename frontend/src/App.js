import './App.css';
import Navbar from './layouts/Navbar';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path ="/" component = {Dashboard}/>
      <Route path ="/" component = {Auth}/>
      <Route path = "/admin" component= {AdminDashboard} />
    </div>
  );
}

export default App;

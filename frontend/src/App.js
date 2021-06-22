import './App.css';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import HomeDashboard from './layouts/HomeDashboard';
import { Switch } from 'react-router-dom';
import Links from './components/Links';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import ResumeDetail from './pages/ResumeDetail';
function App() {


  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={true} pauseOnHover={false} />

      <Switch>
        <Route exact path="/admin*" component={AdminDashboard} />

        <Route exact path="/resume*" component={ResumeDetail} />
        
        <Route path={Links.USERS} component={Auth} />
        <Route exact path="/" component={HomeDashboard} />
        <Route path="/" component={Dashboard} />
        
      </Switch>
    </div>
  );
}

export default App;

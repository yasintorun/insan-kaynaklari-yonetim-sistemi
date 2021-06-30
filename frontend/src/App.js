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
import JobseekerDashboard from './layouts/JobseekerDashboard';
import EmployerDashboard from './layouts/employer/EmployerDashboard';
function App() {


  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={true} pauseOnHover={false} />

      <Switch>
        <Route exact path="/admin*" component={AdminDashboard} />

        <Route exact path="/resume*" component={ResumeDetail} />
        <Route exact path="/jobseeker_dashboard*" component={JobseekerDashboard} />
        <Route exact path="/employer_dashboard*" component={EmployerDashboard} />
        
        <Route path={Links.USERS} component={Auth} />
        <Route exact path="/" component={HomeDashboard} />
        <Route path="/" component={Dashboard} />
        
      </Switch>
    </div>
  );
}

export default App;

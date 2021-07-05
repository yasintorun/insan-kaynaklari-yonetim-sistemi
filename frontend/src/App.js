import './css/App.css';
import Auth from './layouts/auth/AuthDashboard'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import HomeDashboard from './layouts/HomeDashboard';
import { Switch } from 'react-router-dom';
import Links from './components/Links';
import ResumeDetail from './pages/jobseeker/ResumeDetail';
import JobseekerDashboard from './layouts/jobseeker/JobseekerDashboard';
import EmployerDashboard from './layouts/employer/EmployerDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetAllCities } from './Store/actions/cityActions';
function App() {
  
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={true} pauseOnHover={false} />
      <Switch>
        <Route exact path="/" component={HomeDashboard} />
        <Route exact path="/admin*" component={AdminDashboard} />
        <Route exact path="/jobseeker_dashboard*" component={JobseekerDashboard} />
        <Route exact path="/employer_dashboard*" component={EmployerDashboard} />
        <Route path={Links.USERS} component={Auth} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

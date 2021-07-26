import './css/App.css';
import Auth from './layouts/auth/AuthDashboard'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import HomeDashboard from './layouts/HomeDashboard';
import { Redirect, Switch } from 'react-router-dom';
import Links from './components/Links';
import ResumeDetail from './pages/jobseeker/ResumeDetail';
import JobseekerDashboard from './layouts/jobseeker/JobseekerDashboard';
import EmployerDashboard from './layouts/employer/EmployerDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getResume } from './Store/actions/ResumeActions';
import Helper from './utilities/Helper';
function App() {

  let user = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getResume(26))
  }, [])

  const PathRedirect = ({ path = "/", to }) => {
    return (
      <Route exact path={path}>
        <Redirect to={to} />
      </Route>
    )
  }

  const RoutersByUserAuth = () => {

    /*if (!user?.authority) {
      return (
        <>
          <Route exact path="/" component={HomeDashboard} />
          <Route path={Links.USERS} component={Auth} />
        </>
      )
    }*/
    //user.authority.id
    switch (3) { 
      case 1:
        return (
          <>
            <PathRedirect to="/admin" />
            <Route exact path={"/admin*"} component={AdminDashboard} />
          </>   
        )
      case 2:
        return (
          <>
            <PathRedirect to="/employer_dashboard" />
            <Route exact path="/employer_dashboard*" component={EmployerDashboard} />
          </>
        )
      case 3:
        return (
          <>
            <PathRedirect to="/jobseeker_dashboard" />
            <Route exact path="/jobseeker_dashboard*" component={JobseekerDashboard} />
          </>
        )

      default:
        return (
          <>
            <Route exact path="/" component={HomeDashboard} />
            <Route path={Links.USERS} component={Auth} />
          </>
        )
    }
  }


  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={true} pauseOnHover={false} />
      <Switch>
        <RoutersByUserAuth />
      </Switch>
    </div>
  );
}

export default App;

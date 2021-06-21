import './App.css';
import Navbar from './layouts/Navbar';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import HomeDashboard from './layouts/HomeDashboard';
import Footer from './layouts/Footer';
function App() {
  const isAdmin = false;
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={true} pauseOnHover={false} />

      {
        isAdmin ? (
          <Route path="/admin" component={AdminDashboard} />
        ) : (
          <div>
            <Navbar />
            <Route exact path="/" component={HomeDashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/users" component={Auth} />
            <Footer />
          </div>
        )
      }

    </div>
  );
}

export default App;

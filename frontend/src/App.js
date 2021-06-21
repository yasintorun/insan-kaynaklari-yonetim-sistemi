import './App.css';
import Navbar from './layouts/Navbar';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import HomeDashboard from './layouts/HomeDashboard';
function App() {
  const isAdmin = false;
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={1500} hideProgressBar={true} pauseOnHover={false} />

      {
        isAdmin ? (
          <Route path="/admin" component={AdminDashboard} />
        ) : (
          <div>
            <Route exact path="/" component={HomeDashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Auth} />
          </div>
        )
      }



    </div>
  );
}

export default App;

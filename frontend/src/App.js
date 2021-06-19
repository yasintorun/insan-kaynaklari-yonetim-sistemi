import './App.css';
import Navbar from './layouts/Navbar';
import Auth from './layouts/auth/Auth'
import { Route } from 'react-router'
import Dashboard from './layouts/Dashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={1500} hideProgressBar={true} pauseOnHover={false} />
      <Navbar />
      <Route path="/" component={Dashboard} />
      <Route path="/" component={Auth} />
      <Route path="/admin" component={AdminDashboard} />
    </div>
  );
}

export default App;

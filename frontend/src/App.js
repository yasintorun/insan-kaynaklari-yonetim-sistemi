
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './layouts/Navbar';
import Education from './pages/Education';
import Employer from './pages/Employer';
import JobAdvertisement from './pages/JobAdvertisement';
import JobPosition from './pages/JobPosition';
import JobSeekerList from './pages/JobSeekerList';
import Resume from './pages/Resume';
import UserLanguage from './pages/UserLanguage';
import UserSkill from './pages/UserSkill';
import JobPositionService from './services/jobPositionService';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        
        <JobSeekerList />
        <Resume/>
        <JobAdvertisement/>
        <Education/>
        <Employer/>
        <JobPosition/>
        <UserLanguage/>
        <UserSkill/>
      </Container>
    </div>
  );
}

export default App;

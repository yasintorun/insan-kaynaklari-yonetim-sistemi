
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './layouts/Navbar';
import EducationList from './pages/EducationList';
import EmployerList from './pages/EmployerList';
import JobAdvertisementList from './pages/JobAdvertisementList';
import JobPositionList from './pages/JobPositionList';
import JobSeekerList from './pages/JobSeekerList';
import ResumeList from './pages/ResumeList';
import UserLanguageList from './pages/UserLanguageList';
import UserSkillList from './pages/UserSkillList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        
        <JobSeekerList />
        <ResumeList/>
        <JobAdvertisementList/>
        <EducationList/>
        <EmployerList/>
        <JobPositionList/>
        <UserLanguageList/>
        <UserSkillList/>
      </Container>
    </div>
  );
}

export default App;

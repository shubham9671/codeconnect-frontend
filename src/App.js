import React from 'react';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import FreelancerDashboard from './components/freelancer/Dashboard';
import FreelancerProfile from './components/freelancer/profile';
import Frontpage from './components/common/Frontpage'
import ProjectProgress from './components/freelancer/ProjectProgress';
import SponsorDashboard from './components/sponser/Dashboard';
import CreateProject from './components/sponser/CreateProject';
import GetProject from './components/sponser/GetProject';

const App = () => {
  const appStyle = {
    // backgroundImage: `url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight : '100vh'
  };

  return (
    <div style={appStyle}>
      <Navbar />
      {/* <GetProject/> */}
      {/* <ProjectProgress/> */}
      {/* <FreelancerProfile/> */}
      {/* <Login/> */}
      {/* <SponsorDashboard/> */}
      {/* <CreateProject/> */}
      <Routes>
        <Route exact path="/" element={<Frontpage/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        {/* <Route path="/freelancer/dashboard" element={<FreelancerDashboard/>} /> */}
        <Route path="/freelancer/profile" element={<FreelancerProfile/>} />
        <Route path="/freelancer/progress/:projectId" element={<ProjectProgress/>} />
        <Route exact path="/sponsor/dashboard" element={<SponsorDashboard/>} />
        <Route path="/sponsor/create-project" element={<CreateProject/>} />
        <Route path="/sponsor/get-project" element={<GetProject/>} />
      </Routes>
      {/* <Footer />  */}
    </div>
  );
};

export default App
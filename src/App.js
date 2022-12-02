import 'bootstrap/dist/css/bootstrap.min.css';

import Academy from 'Pages/Academy';
import JobPortal from 'Pages/JobPortal';
import NftMarket from 'Pages/NftMarket';
import TeamPage from 'Pages/TeamPage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
function App() {
  return (
    < >
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nft-market" element={<NftMarket/>}/>
          <Route exact path="/job-portal" element={<JobPortal/>}/>
          <Route exact path="/academy" element={<Academy/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
        
        </Routes>
    </Router>
    </>
  );
}

export default App;

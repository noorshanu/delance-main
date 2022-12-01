import 'bootstrap/dist/css/bootstrap.min.css';
import NftMarket from 'Pages/NftMarket';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
function App() {
  return (
    < >
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nft-market" element={<NftMarket/>}/>
        
        </Routes>
    </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './layout/Header';
import SideBar from './layout/SideBar';

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:userId" element={<Dashboard />} />
              <Route path="/mock/user/:userId" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

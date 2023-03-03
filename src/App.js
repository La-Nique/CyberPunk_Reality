import './App.css';

import Homepage from './components/Homepage';
import ArcillaBlvd from './components/Arcilla-Blvd';
import DowntownCentral from './components/Downtown-Central';
import BasingriverAve from './components/Basingriver-Ave';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="arcilla-blvd" element={<ArcillaBlvd />} />
          <Route path="downtown-central" element={<DowntownCentral />} />
          <Route path="basingriver-ave" element={<BasingriverAve />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

var navStyle = { textDecoration: "none", color: "white"};

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/arcilla-blvd">Arcilla Blvd</Link>
          </li>
          <li>
            <Link style={navStyle} to="/downtown-central">Downtown Central</Link>
          </li>
          <li>
            <Link style={navStyle} to="/basingriver-ave">Basingriver Ave</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Whoopsies. You are lost!</h2>
        <Link to="/"><error>click here to return to the home page :)</error></Link>
    </div>
  );
}
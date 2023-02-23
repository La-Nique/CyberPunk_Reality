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
          <Route path="arcilla" element={<ArcillaBlvd />} />
          <Route path="basing" element={<BasingriverAve />} />
          <Route path="downtown" element={<DowntownCentral />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const navStyle = { textDecoration: "none", color: "blue" };
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/arcilla">Arcilla Blvd</Link>
          </li>
          <li>
            <Link style={navStyle} to="/downtown">Downtown Central</Link>
          </li>
          <li>
            <Link style={navStyle} to="/basing">Basingriver Ave</Link>
          </li>
          <li>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


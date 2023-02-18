import logo from './logo.svg';
import './App.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  export default function App() {
  return (
    <div className="App">
        <Homepage />
        <h1>Welcome to Project One!</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="lodging" element={<Lodging />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="attractions" element={<Attractions />} />


            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    );
  }

  function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lodging">Lodging</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="/attractions">Attractions</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
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
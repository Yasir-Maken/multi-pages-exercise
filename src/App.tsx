import React from 'react'; // Imports the React library
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; // Imports routing components
import HomePage from './components/HomePage'; // Imports the HomePage component
import ProfilePage from './components/ProfilePage'; // Imports the ProfilePage component
import SettingsPage from './components/SettingsPage'; // Imports the SettingsPage component
import './App.css'; //  CSS file

const App: React.FC = () => {  // Defines the main App component
  return (
    <HashRouter> {/* Enables browser routing with a hash in the URL */}
      <div className="app-container"> {/* Main container for the App */}
        <nav> {/* Navigation bar */}
          <ul> {/* Unordered list for navigation links */}
            <li>
              <Link to="/">Home</Link> {/* Link to the home page */}
            </li>
            <li>
              <Link to="/profile">Profile</Link> {/* Link to the profile page */}
            </li>
            <li>
              <Link to="/settings">Settings</Link> {/* Link to the settings page */}
            </li>
          </ul>
        </nav>

        <div className="content"> {/* Container for the page content */}
          <Routes>  {/* Defines the routes for the application */}
            <Route path="/" element={<HomePage />} />  {/* Route for the home page */}
            <Route path="/profile" element={<ProfilePage />} /> {/* Route for the profile page */}
            <Route path="/settings" element={<SettingsPage />} /> {/* Route for the settings page */}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App; // Exports the App component
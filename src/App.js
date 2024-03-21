import React from 'react';
import './App.css';
import Header from './Header';
import JobListings from './JobListings';
import store from './store'; // Import the Redux store

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <JobListings />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;

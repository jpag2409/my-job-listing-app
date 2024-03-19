import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import JobListings from './JobListings';

const App = () => {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      company: 'Twenix',
      title: 'Online English Tutor',
      location: 'Full-Time/Anywhere in the World',
      isFeatured: true,
      isNew: true,
    },
    {
      id: 2,
      company: 'Proxify AB',
      title: 'Senior Symfony Developer',
      location: 'Remote',
      isFeatured: true,
      isNew: true,
    },
    // Add more mock job listings here
  ]);

  return (
    <div>
      <Header />
      <main>
        <JobListings jobListings={jobListings} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;
// JobListings.js
import React, { useState } from 'react';
import './JobListings.css';
import JobCard from './JobCard';

const JobListings = ({ jobListings }) => {
  // Initialize the state for job listings
  const [jobListingsState, setJobListings] = useState(jobListings);
  const [newJob, setNewJob] = useState({
    id: null,
    company: '',
    title: '',
    location: '',
    isFeatured: false,
    isNew: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleJobSubmission = (e) => {
    e.preventDefault();
    // Create a new job listing object with the input values
    const nextId = jobListingsState.length + 1;
    const updatedJobListings = [
      ...jobListingsState,
      { ...newJob, id: nextId },
    ];
    // Update the state with the new job listings
    setJobListings(updatedJobListings);
    // Clear the form fields
    setNewJob({
      id: null,
      company: '',
      title: '',
      location: '',
      isFeatured: false,
      isNew: false,
    });
  };

  return (
    <div>
      <h2>All Other Remote Jobs</h2>
      <p>Latest post about 8 hours ago</p>
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={newJob.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={newJob.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newJob.location}
          onChange={handleInputChange}
        />
        <button onClick={handleJobSubmission}>Post Job</button>
      </div>
      <div>
        {jobListingsState.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;

// JobListings.js
import React, { useState, useEffect } from 'react';
import './JobListings.css';
import JobCard from './JobCard';
import mongoose from 'mongoose'; // Import Mongoose
import connectDB from './connectDB.js';

const JobListings = ({ jobListings }) => {
  // Initialize the state for job listings
  useEffect(() => {
    connectDB();
  }, []);
  const [jobListingsState, setJobListings] = useState([]);
  const [newJob, setNewJob] = useState({
    id: null,
    company: '',
    title: '',
    location: '',
    isFeatured: false,
    isNew: false,
  });
  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const Job = mongoose.model('Job'); // Access the Job model
        const response = await Job.find(); // Fetch all jobs from MongoDB
        setJobListings(response);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleJobSubmission = async (e) => {
    e.preventDefault();
    try {
      const Job = mongoose.model('Job'); // Access the Job model
      const newJob = new Job(newJob); // Create a new Job instance
      await newJob.save(); // Save the new job document to MongoDB
  
      // ... (rest of the code remains the same)
    } catch (error) {
      console.error('Error submitting job:', error);
    }
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

connectDB();

export default JobListings;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../reducers/actions'; // Adjust path as needed
import JobCard from './JobCard';

const JobListings = ({ jobs, getJobs, loading, error }) => {
  useEffect(() => {
    getJobs(); // Fetch jobs on component mount
  }, [getJobs]); // Only run when getJobs changes

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>Error fetching jobs: {error.message}</p>;
  }

  return (
    <div>
      <h2>All Other Remote Jobs</h2>
      <p>Latest post about 8 hours ago</p>
      <div>
        {/* Form for adding a new job can go here (optional) */}
      </div>
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobReducer.jobs,
  loading: state.jobReducer.loading,
  error: state.jobReducer.error,
});

export default connect(mapStateToProps, { getJobs })(JobListings);

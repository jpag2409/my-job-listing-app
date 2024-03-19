// JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div>
      <div>{job.company}</div>
      <div>{job.title}</div>
      <div>{job.location}</div>
      {job.isFeatured && <div>Featured</div>}
      {job.isNew && <div>NEW</div>}
    </div>
  );
};

export default JobCard;
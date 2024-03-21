import axios from 'axios';

export const getJobs = () => async (dispatch) => {
  dispatch({ type: 'GET_JOBS_REQUEST' });
  try {
    const response = await axios.get('/api/jobs'); // Replace '/api/jobs' with your actual API endpoint
    dispatch({ type: 'GET_JOBS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_JOBS_FAIL', payload: error });
  }
};

export const addJob = (jobData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/jobs', jobData); // Replace '/api/jobs' with your actual API endpoint
    dispatch({ type: 'ADD_JOB', payload: response.data });
  } catch (error) {
    console.error('Error adding job:', error);
  }
};

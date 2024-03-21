const initialState = {
    jobs: [],
    loading: false,
    error: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_JOBS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_JOBS_SUCCESS':
        return {
          ...state,
          loading: false,
          jobs: action.payload,
        };
      case 'GET_JOBS_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_JOB':
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  
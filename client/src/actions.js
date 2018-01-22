export const GET_RESOURCE_REQUEST="GET_RESOURCE_REQUEST";
export const GET_RESOURCE_SUCCESS="GET_RESOURCE_SUCCESS";
export const GET_RESOURCE_FAILURE="GET_RESOURCE_FAILURE";

export const GET_NAV_REQUEST="GET_NAV_REQUEST";
export const GET_NAV_SUCCESS="GET_NAV_SUCCESS";
export const GET_NAV_FAILURE="GET_NAV_FAILURE";

export const getResourceRequest = () => {
  return {
    type: GET_RESOURCE_REQUEST
  };
};

export const getResourceSuccess = (data) => {
  return {
    type: GET_RESOURCE_SUCCESS,
    data: data
  };
};

export const getResourceFailure = (error) => {
  return {
    type: GET_RESOURCE_FAILURE,
    data: error
  };
};

export const getNavRequest = () => {
  return {
    type: GET_NAV_REQUEST
  };
};

export const getNavSuccess = (data) => {
  return {
    type: GET_NAV_SUCCESS,
    data: data
  };
};

export const getNavFailure = (error) => {
  return {
    type: GET_NAV_FAILURE,
    data: error
  };
};

export const getResource = ({type, path='', query=''}) => {
  const urlPicker = {
    'resource': 'resource/',
    'url': 'fullUrl/',
    'nav': '/'
  };
  const requestUrl = urlPicker[type]+path+'/query='+query;
  
  return (dispatch) => {
    if (type === 'nav') {
      dispatch(getNavRequest());
    } else {
      dispatch(getResourceRequest());
    }
    
    fetch(requestUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(json => {
      dispatch(getResourceSuccess(json));
    })
    .catch(error => {
      dispatch(getResourceFailure(error));
    });
  };
};

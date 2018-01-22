import * as Actions from './actions';
import {combineReducers} from 'redux';

const initialState = {
  payload: {},
  nav: {},
  isFetching: false,
  error: null,
};

export const starWarsResources = (state = initialState, action) => {
  switch(action.type) {
    case Actions.GET_RESOURCE_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case Actions.GET_RESOURCE_SUCCESS: {
      return {
        ...state,
        payload: action.data,
        isFetching: false,
        error: null
      };
    }
    case Actions.GET_RESOURCE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.data
      };
    }
    default: 
      return {
        ...state
      };
  }
};
export const starWarsNav = (state = initialState, action) => {
  switch(action.type) {
    case Actions.GET_NAV_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case Actions.GET_NAV_SUCCESS: {
      return {
        ...state,
        nav: action.data,
        isFetching: false,
        error: null
      };
    }
    case Actions.GET_NAV_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.data
      };
    }
    default: 
      return {
        ...state
      };
  }
  
};

export const starWarsApp = ({
  starWarsResources,
  starWarsNav
});